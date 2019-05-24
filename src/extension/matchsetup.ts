'use-strict';

import * as nodecgApiContext from './util/nodecg-api-context';
const nodecg = nodecgApiContext.get();

import {CurrentInnings} from '../types/schemas/currentInnings';
import {MatchInfo} from '../types/schemas/matchInfo'
import {Teams} from '../types/schemas/teams';
import {Batter} from '../types/schemas/batter';
import {Bowler} from '../types/schemas/bowler';

const matchRep = nodecg.Replicant<MatchInfo>('match');
const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings', {persistent: false});

// const util = require('util');

nodecg.listenFor('updateMatch', (data: MatchInfo) => {
    matchRep.value = data;
});

nodecg.listenFor('newInnings', (data: [Teams[0], Teams[0]]) => {
	// nodecg.log.info(util.inspect(currentInningsRep, false, null, true /* enable colors */));

	let newInnings: CurrentInnings;

	newInnings.wickets = 0;
	newInnings.runs = 0;
	newInnings.overs = [];
	
	const bowlingTeam = data[0];
	const battingTeam = data[1];

	newInnings.bowlingTeam = bowlingTeam.name;
	newInnings.battingTeam = battingTeam.name;

	newInnings.TLAs = [bowlingTeam.tla, battingTeam.tla];

	const bowlingPlayers = createBowlersObjects(bowlingTeam);
	const battingPlayers = createBatterObjects(battingTeam);

	bowlingPlayers[0].bowling = true;

	newInnings.bowlers = bowlingPlayers;
	newInnings.batters = battingPlayers;

	currentInningsRep.value = newInnings;
	nodecg.log.info('New innings started! Batters: ' + newInnings.battingTeam + ' | Bowlers: ' + newInnings.bowlingTeam);
});

function createBowlersObjects(bowlingTeam: Teams[0]) {
	let buildingBowlers: Bowler[] = [];

    // Reset each player to default
	bowlingTeam.players.forEach(player => {
		let bowlingObj: Bowler = {
			name: player.name,
			overs: 0,
			maidenOvers: 0,
			runs: 0,
			wickets: 0,
			badBalls: [0,0],
			bowling: false
		};

		buildingBowlers.push(bowlingObj);
	});

	return buildingBowlers;
}

function createBatterObjects(battingTeam: Teams[0]) {
	var buildingBatters: Batter[] = [];

    // Reset each player to default
	battingTeam.players.forEach(player => {
		var batterObj: Batter = {
			name: player.name,
			runs: [0, 0, 0],
			balls: 0,
			dismissal: "",
            batting: "WAITING",
            facing: false
		};

		buildingBatters.push(batterObj);
	});

	return buildingBatters;
}

nodecg.listenFor('updateBattingRoster', (updatedBatters: Batter[]) => {
	// Push each batter into the batting roster	
	let batters = updatedBatters;

	batters[0].batting = "BATTING";
	batters[0].facing = true;
	batters[1].batting = "BATTING";

    // Set first two batters as on pitch
	currentInningsRep.value.batters = batters;
});