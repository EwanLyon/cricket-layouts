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

nodecg.listenFor('updateMatch', (data: MatchInfo) => {
    matchRep.value = data;
});

nodecg.listenFor('newInnings', (data: [Teams[0], Teams[0]]) => {
	// nodecg.log.info(util.inspect(currentInningsRep, false, null, true /* enable colors */));

	currentInningsRep.value.wickets = 0;
	currentInningsRep.value.runs = 0;
	currentInningsRep.value.over = 0;
	
	const bowlingTeam: Teams[0] = data[0];
	const battingTeam: Teams[0] = data[1];

	currentInningsRep.value.bowlingTeam = bowlingTeam.name;
	currentInningsRep.value.battingTeam = battingTeam.name;

	currentInningsRep.value.TLAs = [bowlingTeam.tla, battingTeam.tla];

	const bowlingPlayers: Bowler[] = createBowlersObjects(bowlingTeam);
	const battingPlayers: Batter[] = createBatterObjects(battingTeam);

	currentInningsRep.value.bowlers = bowlingPlayers;
	currentInningsRep.value.batters = battingPlayers;

	nodecg.log.info('New innings started! Batters: ' + currentInningsRep.value.battingTeam + ' | Bowlers: ' + currentInningsRep.value.bowlingTeam);
});

function createBowlersObjects(bowlingTeam: Teams[0]) {
	var buildingBowlers: Bowler[] = [];

	bowlingTeam.players.forEach(player => {
		var bowlingObj: Bowler = {
			name: player.name,
			overs: 0,
			maidenOvers: 0,
			runs: 0,
			wickets: 0,
			badBalls: [0,0]
		};

		buildingBowlers.push(bowlingObj);
	});

	return buildingBowlers;
}

function createBatterObjects(battingTeam: Teams[0]) {
	var buildingBatters: Batter[] = [];

	battingTeam.players.forEach(player => {
		var batterObj: Batter = {
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