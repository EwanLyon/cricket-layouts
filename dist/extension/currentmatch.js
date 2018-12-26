"use strict";
'use-strict';
Object.defineProperty(exports, "__esModule", { value: true });
const nodecgApiContext = require("./util/nodecg-api-context");
const nodecg = nodecgApiContext.get();
// const util = require('util');
const currentInningsRep = nodecg.Replicant('currentInnings', { persistent: false });
nodecg.listenFor('newInnings', (data) => {
    // nodecg.log.info(util.inspect(currentInningsRep, false, null, true /* enable colors */));
    currentInningsRep.value.wickets = 0;
    currentInningsRep.value.runs = 0;
    currentInningsRep.value.over = 0;
    const bowlingTeam = data[0];
    const battingTeam = data[1];
    currentInningsRep.value.bowlingTeam = bowlingTeam.name;
    currentInningsRep.value.battingTeam = battingTeam.name;
    currentInningsRep.value.TLAs = [bowlingTeam.tla, battingTeam.tla];
    const bowlingPlayers = createBowlersObjects(bowlingTeam);
    const battingPlayers = createBatterObjects(battingTeam);
    currentInningsRep.value.bowlers = bowlingPlayers;
    currentInningsRep.value.batters = battingPlayers;
    nodecg.log.info('New innings started! Batters: ' + currentInningsRep.value.battingTeam + ' | Bowlers: ' + currentInningsRep.value.bowlingTeam);
});
function createBowlersObjects(bowlingTeam) {
    var buildingBowlers = [];
    bowlingTeam.players.forEach(player => {
        var bowlingObj = {
            name: player.name,
            overs: 0,
            maidenOvers: 0,
            runs: 0,
            wickets: 0,
            badBalls: [0, 0]
        };
        buildingBowlers.push(bowlingObj);
    });
    return buildingBowlers;
}
function createBatterObjects(battingTeam) {
    var buildingBatters = [];
    battingTeam.players.forEach(player => {
        var batterObj = {
            name: player.name,
            runs: [0, 0, 0],
            balls: 0,
            dismissal: "",
            batting: false
        };
        buildingBatters.push(batterObj);
    });
    return buildingBatters;
}
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
//# sourceMappingURL=currentmatch.js.map