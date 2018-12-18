'use-strict';

import * as nodecgApiContext from './util/nodecg-api-context';
const nodecg = nodecgApiContext.get();
import {CurrentInnings} from '../types/schemas/currentInnings';
import {Teams} from '../types/schemas/teams';
import {Batter} from '../types/schemas/other/batter';
import {Bowler} from '../types/schemas/other/bowler';

// const util = require('util');

const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings', {persistent: false});

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
			dismissal: ""
		};

		buildingBatters.push(batterObj);
	});

	return buildingBatters;
}

nodecg.listenFor('changeBowler', (newVal: Bowler) => {

	// Check if the current bowler is not initialised meaning it is the first bowler
	if (currentInningsRep.value.currentBowler.name == "MISSING BOWLERS NAME"){
		currentInningsRep.value.playedBowlers = [];
		currentInningsRep.value.currentBowler = newVal;	// Set the new bowler as the current bowler
	} else {
		// Put the current bowler into the played bowlers list
		currentInningsRep.value.playedBowlers.push(currentInningsRep.value.currentBowler);

		// Assign played bowlers variable
		var playedBowlers = currentInningsRep.value.playedBowlers;

		// Iterate through played bowlers using a normal for loop to access the iteration number (i)
		for (let i = 0; i < playedBowlers.length; i++) {

			// If the bowler is already in the played bowlers list, take that object and delete it from the list
			if (playedBowlers[i].name == newVal.name){
				currentInningsRep.value.currentBowler = playedBowlers[i];
				playedBowlers.splice(i, 1);

			} else {
				// It must be a bowler who hasn't bowled before and thus can be added in raw
				currentInningsRep.value.currentBowler = newVal;
			}
		}
	}
});