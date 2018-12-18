"use strict";
'use-strict';
Object.defineProperty(exports, "__esModule", { value: true });
const nodecgApiContext = require("./util/nodecg-api-context");
const nodecg = nodecgApiContext.get();
const currentInningsRep = nodecg.Replicant('currentInnings');
nodecg.listenFor('newInnings', (data) => {
    currentInningsRep.value.wickets = 0;
    currentInningsRep.value.runs = 0;
    currentInningsRep.value.over = 0;
    const bowlingTeam = data[0];
    const battingTeam = data[1];
    currentInningsRep.value.bowlingTeam = bowlingTeam.name;
    currentInningsRep.value.battingTeam = battingTeam.name;
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
            dismissal: ""
        };
        buildingBatters.push(batterObj);
    });
    return buildingBatters;
}
nodecg.listenFor('changeBowler', (newVal) => {
    nodecg.log.info(currentInningsRep.value.currentBowler.name);
    if (currentInningsRep.value.currentBowler.name == "NO BOWLER NAME") {
        currentInningsRep.value.currentBowler = newVal;
    }
    else if (newVal) {
    }
    // currentInningsRep.value.currentBowler;
});
//# sourceMappingURL=currentmatch.js.map