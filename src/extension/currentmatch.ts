'use-strict';

import * as nodecgApiContext from './util/nodecg-api-context';
const nodecg = nodecgApiContext.get();
import {CurrentInnings} from '../types/schemas/currentInnings';
import {Teams} from '../types/schemas/teams';

const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');
// const teamsRep = nodecg.Replicant<Teams[]>('teams');

nodecg.listenFor('newInnings', (data: [Teams[0], Teams[0]]) => {
	currentInningsRep.value.wickets = 0;
	currentInningsRep.value.runs = 0;
	currentInningsRep.value.over = 0;
	
	const bowlingTeam: Teams[0] = data[0];
	const battingTeam: Teams[0] = data[1];

	currentInningsRep.value.bowlingTeam = bowlingTeam.name;
	currentInningsRep.value.battingTeam = battingTeam.name;
	
	currentInningsRep.value.batters = battingTeam.players;
});

nodecg.listenFor('changeBowler', (newVal:object) => {
	console.log(newVal);

	if (currentInningsRep.value.currentBowler == ""){
		currentInningsRep.value.currentBowler = newVal;
	} else if (newVal){

	}
	// currentInningsRep.value.currentBowler;
});