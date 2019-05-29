"use strict";
'use-strict';
Object.defineProperty(exports, "__esModule", { value: true });
const nodecgApiContext = require("./util/nodecg-api-context");
const nodecg = nodecgApiContext.get();
const currentInningsRep = nodecg.Replicant('currentInnings', { persistent: false });
const overRep = nodecg.Replicant('over', { persistent: false });
let badBallInOver = false;
function findCurrentBowlerIndex() {
    return currentInningsRep.value.bowlers.findIndex(bowler => {
        return bowler.bowling;
    });
}
nodecg.listenFor('changeBowler', (newVal) => {
    currentInningsRep.value.bowlers[findCurrentBowlerIndex()].bowling = false;
    const newBowlerIndex = currentInningsRep.value.bowlers.indexOf(newVal);
    currentInningsRep.value.bowlers[newBowlerIndex].bowling = true;
});
nodecg.listenFor('newWicket', (data) => {
    const currentBowler = getCurrentBowler();
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
    // Get next batter
    let nextBatter;
    for (let batter of currentInningsRep.value.batters) {
        if (batter.dismissal == '' && batter.batting == "WAITING") {
            // Batter hasn't been dismissed and isn't batting
            nextBatter = batter;
            nextBatter.batting = "BATTING"; // Set batter to be facing
            nextBatter.facing = data.batterOut.facing; // If batter was facing set this batter to be facing
            break;
        }
    }
    ;
    data.batterOut.batting = "OUT";
    data.batterOut.dismissal = dismissalText;
    // Update dismissed batter
    currentInningsRep.value.batters[data.batterIndex] = data.batterOut;
});
nodecg.listenFor('addRuns', (runs) => {
    const currentBatterFacingIndex = currentInningsRep.value.batters.findIndex(batter => {
        return batter.facing == true && batter.batting == "BATTING";
    });
    const currentBatterFacing = currentInningsRep.value.batters[currentBatterFacingIndex];
    // Add runs to total score
    currentInningsRep.value.runs = +runs;
    // Add runs to over
    overRep.value.over.push(runs);
    // Add runs to batter
    currentBatterFacing.runs[0] = +runs;
    currentBatterFacing.balls++;
    // Add stats to type of run scored
    if (runs == 4) {
        // Add one to four stat
        currentBatterFacing.runs[1] = +1;
    }
    else if (runs == 6) {
        // Add one to six stat
        currentBatterFacing.runs[2] = +1;
    }
    // Add runs to bowler
    currentInningsRep.value.bowlers[findCurrentBowlerIndex()].runs = +runs;
    // Switch current facing status
    swapBatters();
    // Add balls to players
    currentBatterFacing.balls++;
    currentInningsRep.value.batters[currentBatterFacingIndex] = currentBatterFacing;
    _nextBall();
});
function swapBatters() {
    const currentBatters = currentInningsRep.value.batters.filter(batter => {
        return batter.batting == "BATTING";
    });
    currentBatters[0].facing = !currentBatters[0].facing;
    currentBatters[1].facing = !currentBatters[1].facing;
    // Set the batter objects back
    currentInningsRep.value.batters.map(batter => {
        if (batter.name == currentBatters[0].name) {
            batter = currentBatters[0];
        }
        else if (batter.name == currentBatters[1].name) {
            batter = currentBatters[1];
        }
    });
}
function _nextBall() {
    const currentBowler = getCurrentBowler();
    // Add ball to over
    if (currentInningsRep.value.overs.length != 5) {
        // Still in over
        currentBowler.overs = +0.1;
    }
    else {
        // NEXT OVER
        // Push current over to list of overs
        currentInningsRep.value.overs.push(overRep.value);
        // Check if maiden
        if (overRep.value.over.every(x => x == 0) && badBallInOver == false) {
            currentBowler.maidenOvers++;
        }
        // Start new over
        overRep.value.over = [];
        // Add over to bowler (add 0.5 to complete the whole number)
        currentBowler.overs = +0.5;
        // Switch batter status
        swapBatters();
        // Reset local badball status
        badBallInOver = false;
    }
    currentInningsRep.value.bowlers[findCurrentBowlerIndex()] = currentBowler;
}
nodecg.listenFor('addBadBall', (ballType) => {
    badBallInOver = true;
    const currentBowler = getCurrentBowler();
    if (ballType == "wide") {
        // Add wide to bowler
        currentBowler.badBalls[0]++;
        // Add run against bowler: http://atca.sa.cricket.com.au/files/38/files/General%20Scoring%20Tips.pdf
        // Add single run to score
        // TODO: Byes and Leg byes
        currentInningsRep.value.runs++;
    }
    else {
        // Must be no ball
        // Add no ball to bowler
        currentBowler.badBalls[1]++;
        // Add single run to score
        currentInningsRep.value.runs++;
    }
    currentInningsRep.value.bowlers[findCurrentBowlerIndex()] = currentBowler;
    _nextBall();
});
function getCurrentBowler() {
    return currentInningsRep.value.bowlers[findCurrentBowlerIndex()];
}
//# sourceMappingURL=currentmatch.js.map