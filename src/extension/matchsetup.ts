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

// import * as util from 'util';

nodecg.listenFor('updateMatch', (data: MatchInfo) => {
    matchRep.value = data;
});

nodecg.listenFor('newInnings', (data: {bowlingTeam: Teams[0], battingTeam: Teams[0]}) => {
	const bowlingPlayers = createBowlersObjects(data.bowlingTeam);
	const battingPlayers = createBatterObjects(data.battingTeam);

	bowlingPlayers[0].bowling = true;

	let newInnings: CurrentInnings = {
		wickets: 0,
		runs: 0,
		overs: [],
		bowlingTeam: data.bowlingTeam.name,
		battingTeam: data.battingTeam.name,
		TLAs: [data.bowlingTeam.tla, data.battingTeam.tla],
		bowlers: bowlingPlayers,
		batters: battingPlayers
	};

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
	batters[0].name += '*';

	batters[1].batting = "BATTING";

    // Set first two batters as on pitch
	currentInningsRep.value.batters = batters;
});