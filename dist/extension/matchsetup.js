"use strict";
'use-strict';
Object.defineProperty(exports, "__esModule", { value: true });
const nodecgApiContext = require("./util/nodecg-api-context");
const nodecg = nodecgApiContext.get();
const matchRep = nodecg.Replicant('match');
const currentInningsRep = nodecg.Replicant('currentInnings', { persistent: false });
// const util = require('util');
nodecg.listenFor('updateMatch', (data) => {
    matchRep.value = data;
});
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
    currentInningsRep.value.currentBowler = {
        name: "Select bowler",
        overs: -999,
        maidenOvers: -999,
        runs: -999,
        wickets: -999,
        badBalls: [-999, -999]
    };
    currentInningsRep.value.playedBowlers = [];
    nodecg.log.info('New innings started! Batters: ' + currentInningsRep.value.battingTeam + ' | Bowlers: ' + currentInningsRep.value.bowlingTeam);
});
function createBowlersObjects(bowlingTeam) {
    let buildingBowlers = [];
    // Reset each player to default
    bowlingTeam.players.forEach(player => {
        let bowlingObj = {
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
    // Reset each player to default
    battingTeam.players.forEach(player => {
        var batterObj = {
            name: player.name,
            runs: [0, 0, 0],
            balls: 0,
            dismissal: "",
            batting: false,
            facing: false
        };
        buildingBatters.push(batterObj);
    });
    return buildingBatters;
}
nodecg.listenFor('updateBattingRoster', (updatedBatters) => {
    // Reset batting roster
    currentInningsRep.value.batters = [];
    // Push each batter into the batting roster	
    currentInningsRep.value.batters = updatedBatters;
    // updatedBatters.forEach(batter => {
    // 	currentInningsRep.value.batters.push(batter);
    // });
    // Set first two batters as on pitch
    currentInningsRep.value.battersFacing = [currentInningsRep.value.batters[0], currentInningsRep.value.batters[1]];
    currentInningsRep.value.batters[0].batting = true;
    currentInningsRep.value.batters[1].batting = true;
    // Set the first batter as facing
    currentInningsRep.value.battersFacing[0].facing = true;
    // nodecg.log.info(util.inspect(currentInningsRep.value.batters, false, null, true /* enable colors */));
});
//# sourceMappingURL=matchsetup.js.map