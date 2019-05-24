"use strict";
'use-strict';
Object.defineProperty(exports, "__esModule", { value: true });
const nodecgApiContext = require("./util/nodecg-api-context");
const nodecg = nodecgApiContext.get();
const currentInningsRep = nodecg.Replicant('currentInnings', { persistent: false });
const overRep = nodecg.Replicant('over', { persistent: false });
let badBallInOver = false;
nodecg.listenFor('changeBowler', (newVal) => {
    // Check if the current bowler is not initialised meaning it is the first bowler
    if (currentInningsRep.value.currentBowler.name == "MISSING BOWLERS NAME") {
        currentInningsRep.value.playedBowlers = [];
        currentInningsRep.value.currentBowler = newVal; // Set the new bowler as the current bowler
    }
    else {
        // Put the current bowler into the played bowlers list
        currentInningsRep.value.playedBowlers.push(currentInningsRep.value.currentBowler);
        // Assign played bowlers variable
        var playedBowlers = currentInningsRep.value.playedBowlers;
        // Iterate through played bowlers using a normal for loop to access the iteration number (i)
        for (let i = 0; i < playedBowlers.length; i++) {
            // If the bowler is already in the played bowlers list, take that object and delete it from the list
            if (playedBowlers[i].name == newVal.name) {
                currentInningsRep.value.currentBowler = playedBowlers[i];
                playedBowlers.splice(i, 1);
            }
            else {
                // It must be a bowler who hasn't bowled before and thus can be added in raw
                currentInningsRep.value.currentBowler = newVal;
            }
        }
    }
});
// Data: [dismissalText, batterOut, batterIndex, fielderItem]
nodecg.listenFor('newWicket', (data) => {
    if (currentInningsRep.value.wickets == 10) {
        // All batters are out!
        return;
    }
    // Add one to wickets
    currentInningsRep.value.wickets++;
    // Add one to bowler
    currentInningsRep.value.currentBowler.wickets++;
    let dismissedBatter = currentInningsRep.value.battersFacing[data[2]];
    // Get dismissal message
    let dismissalText = "Error";
    if (data[0] == "c: ") {
        // Caught therefore needs both fielder and bowler
        dismissalText = "c: " + data[3].name + " b: " + currentInningsRep.value.currentBowler.name;
    }
    else if (data[0] == "b: " || data[0] == "lbw: ") {
        // Bowled only needs bowler
        dismissalText = data[0] + currentInningsRep.value.currentBowler.name;
    }
    else if (data[3]) {
        // Else add fielder to end of dismissal text given
        dismissalText = data[0] + data[3].name;
    }
    else {
        // Else extra data must not be needed
        dismissalText = data[0];
    }
    // Get next batter
    let nextBatter = {};
    for (let batter of currentInningsRep.value.batters) {
        if (batter.dismissal == '' && !batter.batting) {
            // Batter hasn't been dismissed and isn't batting
            nextBatter = batter;
            nextBatter.batting = true; // Set batter to be facing
            nextBatter.facing = dismissedBatter.facing; // If batter was facing set this batter to be facing
            break;
        }
    }
    ;
    // Update dismissed batter
    currentInningsRep.value.battersFacing[data[2]] = {
        name: dismissedBatter.name,
        runs: dismissedBatter.runs,
        balls: dismissedBatter.balls,
        dismissal: dismissalText,
        batting: false,
        facing: false
    };
    let batterOriginalIndex = currentInningsRep.value.batters.findIndex(x => x.name == dismissedBatter.name);
    currentInningsRep.value.batters[batterOriginalIndex] = currentInningsRep.value.battersFacing[data[2]];
    // Set next batter as the batter facing
    currentInningsRep.value.battersFacing[data[2]] = nextBatter;
});
nodecg.listenFor('addRuns', (runs) => {
    // Add runs to total score
    currentInningsRep.value.runs = +runs;
    // Add runs to over
    overRep.value.over.push(runs);
    // Get the batter currently facing
    let batterFacingIndex = currentInningsRep.value.battersFacing.findIndex(x => x.facing == true);
    // Add runs to batter
    currentInningsRep.value.battersFacing[batterFacingIndex].runs[0] = +runs;
    // Add stats to type of run scored
    if (runs == 4) {
        // Add one to four stat
        currentInningsRep.value.battersFacing[batterFacingIndex].runs[1] = +1;
    }
    else if (runs == 6) {
        // Add one to six stat
        currentInningsRep.value.battersFacing[batterFacingIndex].runs[2] = +1;
    }
    // Add runs to bowler
    currentInningsRep.value.currentBowler.runs = +runs;
    // Switch current facing status
    if ((runs % 2) == 1) {
        currentInningsRep.value.battersFacing[0].facing = !currentInningsRep.value.battersFacing[0].facing;
        currentInningsRep.value.battersFacing[1].facing = !currentInningsRep.value.battersFacing[1].facing;
    }
    // Add balls to players
    currentInningsRep.value.battersFacing[batterFacingIndex].balls = +1;
    _NextBall();
});
function _NextBall() {
    // Add ball to over
    if (currentInningsRep.value.overs.length != 5) {
        // Still in over
        currentInningsRep.value.currentBowler.overs = +0.1;
    }
    else {
        // Next over
        // Push current over to list of overs
        currentInningsRep.value.overs.push(overRep.value);
        // Check if maiden
        if (overRep.value.over.every(x => x == 0) && badBallInOver == false) {
            currentInningsRep.value.currentBowler.maidenOvers++;
        }
        // Start new over
        overRep.value.over = [];
        // Add over to bowler (add 0.5 to complete the whole number)
        currentInningsRep.value.currentBowler.overs = +0.5;
        // Switch batter status
        currentInningsRep.value.battersFacing[0].facing = !currentInningsRep.value.battersFacing[0].facing;
        currentInningsRep.value.battersFacing[1].facing = !currentInningsRep.value.battersFacing[1].facing;
        // Reset local badball status
        badBallInOver = false;
    }
}
nodecg.listenFor('addBadBall', (ballType) => {
    badBallInOver = true;
    if (ballType == "wide") {
        // Add wide to bowler
        currentInningsRep.value.currentBowler.badBalls[0]++;
        // Add run against bowler: http://atca.sa.cricket.com.au/files/38/files/General%20Scoring%20Tips.pdf
        // Add single run to score
        // TODO: Byes and Leg byes
        currentInningsRep.value.runs++;
    }
    else {
        // Must be no ball
        // Add no ball to bowler
        currentInningsRep.value.currentBowler.badBalls[1]++;
        // Add single run to score
        currentInningsRep.value.runs++;
    }
    _NextBall();
});
//# sourceMappingURL=currentmatch.js.map