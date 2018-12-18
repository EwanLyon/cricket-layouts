'use-strict';

import * as nodecgApiContext from './util/nodecg-api-context';
const nodecg = nodecgApiContext.get();
import {CurrentInnings} from '../types/schemas/currentInnings';
import {Teams} from '../types/schemas/teams';
import {Batter} from '../types/schemas/other/batter';
import {Bowler} from '../types/schemas/other/bowler';

const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

nodecg.listenFor('newInnings', (data: [Teams[0], Teams[0]]) => {
	currentInningsRep.value.wickets = 0;
	currentInningsRep.value.runs = 0;
	currentInningsRep.value.over = 0;
	
	const bowlingTeam: Teams[0] = data[0];
	const battingTeam: Teams[0] = data[1];

	currentInningsRep.value.bowlingTeam = bowlingTeam.name;
	currentInningsRep.value.battingTeam = battingTeam.name;

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
			dismissal: ""
		};

		buildingBatters.push(batterObj);
	});

	return buildingBatters;
}

nodecg.listenFor('changeBowler', (newVal: Bowler) => {

	nodecg.log.info(currentInningsRep.value.currentBowler.name);

	if (currentInningsRep.value.currentBowler.name == "NO BOWLER NAME"){
		currentInningsRep.value.currentBowler = newVal;
	} else if (newVal){

	}
	// currentInningsRep.value.currentBowler;
});