"use strict";
'use-strict';
Object.defineProperty(exports, "__esModule", { value: true });
const nodecgApiContext = require("./util/nodecg-api-context");
const nodecg = nodecgApiContext.get();
const currentInningsRep = nodecg.Replicant('currentInnings', { persistent: false });
const overRep = nodecg.Replicant('over', { persistent: false });
let ballsLeft = 6;
function findCurrentBowlerIndex() {
    return currentInningsRep.value.bowlers.findIndex(bowler => {
        return bowler.bowling;
    });
}
function findBowlerIndex(searchBowler) {
    let index = currentInningsRep.value.bowlers.map((bowler, i) => {
        if (bowler.name == searchBowler.name) {
            return i;
        }
        return undefined;
    });
    return index.filter(item => item != undefined)[0];
}
nodecg.listenFor('changeBowler', (newVal) => {
    if (findCurrentBowlerIndex() > -1) {
        currentInningsRep.value.bowlers[findCurrentBowlerIndex()].bowling = false;
    }
    const newBowlerIndex = findBowlerIndex(newVal);
    if (newBowlerIndex != undefined) {
        currentInningsRep.value.bowlers[newBowlerIndex].bowling = true;
    }
});
nodecg.listenFor('newWicket', (data) => {
    const currentBowler = getCurrentBowler();
    let batterOutLocal = data.batterOut;
    if (currentInningsRep.value.wickets == 10) {
        // All batters are out!
        return;
    }
    // Add one to wickets
    currentInningsRep.value.wickets++;
    // Add one to bowler
    currentBowler.wickets++;
    // Get dismissal message
    let dismissalText = "Error";
    switch (data.dismissal) {
        case "c: ":
            dismissalText = "c: " + data.fielder.name + " b: " + currentBowler.name;
            break;
        case "b: ":
        case "lbw: ":
            dismissalText = data.dismissal + currentBowler.name;
            break;
        default:
            if (data.fielder) {
                dismissalText = data.dismissal + data.fielder.name;
            }
            else {
                dismissalText = data.dismissal;
            }
            break;
    }
    // Update dismissed batter
    batterOutLocal.batting = "OUT";
    batterOutLocal.dismissal = dismissalText;
    // Update over
    overRep.value.over.push("W");
    // Update dismissed batter
    currentInningsRep.value.batsmen[data.batterIndex] = batterOutLocal;
    // Get next batter
    let nextBatter;
    for (let batter of currentInningsRep.value.batsmen) {
        if (batter.dismissal == '' && batter.batting == "WAITING") {
            // Batter hasn't been dismissed and isn't batting
            nextBatter = batter;
            nextBatter.batting = "BATTING"; // Set batter to be facing
            nextBatter.facing = batterOutLocal.facing; // If batter was facing set this batter to be facing
            break;
        }
    }
    ;
});
nodecg.listenFor('addRuns', (runs) => {
    if (ballsLeft == 0) {
        nextOver(currentInningsRep.value.bowlers[findCurrentBowlerIndex()]);
    }
    const currentBatterFacingIndex = currentInningsRep.value.batsmen.findIndex(batter => {
        return batter.facing == true && batter.batting == "BATTING";
    });
    const currentBatterFacing = currentInningsRep.value.batsmen[currentBatterFacingIndex];
    // Add runs to total score
    currentInningsRep.value.runs += runs;
    // Add runs to over
    overRep.value.over.push(runs);
    // Add runs to batter
    currentBatterFacing.runs += runs;
    currentBatterFacing.balls++;
    // Add stats to type of run scored
    if (runs == 4) {
        // Add one to four stat
        currentBatterFacing.fours += 1;
    }
    else if (runs == 6) {
        // Add one to six stat
        currentBatterFacing.sixes += 1;
    }
    // Add runs to bowler
    currentInningsRep.value.bowlers[findCurrentBowlerIndex()].runs += runs;
    // Switch current facing status
    if ((runs % 2) == 1) {
        swapBatters();
    }
    currentInningsRep.value.batsmen[currentBatterFacingIndex] = currentBatterFacing;
    nextBall();
});
function swapBatters() {
    const currentBatters = currentInningsRep.value.batsmen.filter(batter => {
        return batter.batting == "BATTING";
    });
    if (currentBatters.length != 2) {
        nodecg.log.error('There aren\'t two batters: ' + currentBatters.length);
        process.exit(0);
    }
    // Switching asterisk
    currentBatters.map(batter => {
        if (batter.facing) {
            batter.name = batter.name.slice(0, -1);
        }
        else {
            batter.name += '*';
        }
    });
    currentBatters[0].facing = !currentBatters[0].facing;
    currentBatters[1].facing = !currentBatters[1].facing;
    // Set the batter objects back
    currentInningsRep.value.batsmen.map(batter => {
        if (batter.name == currentBatters[0].name) {
            batter = currentBatters[0];
        }
        else if (batter.name == currentBatters[1].name) {
            batter = currentBatters[1];
        }
    });
}
function nextBall() {
    const currentBowler = getCurrentBowler();
    // Add ball to over
    currentBowler.overs += 0.1;
    ballsLeft--;
}
nodecg.listenFor('nextOver', () => {
    nextOver(getCurrentBowler());
});
function nextOver(curBowler) {
    // NEXT OVER
    ballsLeft = 6;
    let currentOver = JSON.parse(JSON.stringify(overRep.value)); // Fixes NodeCG assert single owner error
    // Check if maiden
    if (overRep.value.over.every(x => x == 0 || x == "W")) {
        curBowler.maidenOvers++;
    }
    // Start new over
    overRep.value = {
        over: []
    };
    // Push current over to list of overs
    currentInningsRep.value.overs.push(currentOver);
    // Add over to bowler
    curBowler.overs = Math.ceil(curBowler.overs);
    // Switch batter status
    swapBatters();
    currentInningsRep.value.bowlers[findCurrentBowlerIndex()] = curBowler;
}
nodecg.listenFor('addBadBall', (ballType) => {
    const currentBowler = getCurrentBowler();
    switch (ballType) {
        case "wide":
            currentBowler.badBalls[0]++; // Add wide to bowler
            currentBowler.runs++; // Add run against bowler: http://atca.sa.cricket.com.au/files/38/files/General%20Scoring%20Tips.pdf
            currentInningsRep.value.runs++; // Add single run to score
            overRep.value.over.push("Wide");
            ballsLeft++;
            break;
        case "noball":
            currentBowler.badBalls[1]++; // Add no ball to bowler
            currentInningsRep.value.runs++; // Add single run to score
            overRep.value.over.push("NB");
            ballsLeft++;
            break;
        case "bye":
            break;
        case "legbye":
            break;
        default:
            break;
    }
    currentInningsRep.value.bowlers[findCurrentBowlerIndex()] = currentBowler;
    nextBall();
});
function getCurrentBowler() {
    return currentInningsRep.value.bowlers[findCurrentBowlerIndex()];
}
//# sourceMappingURL=currentmatch.js.map