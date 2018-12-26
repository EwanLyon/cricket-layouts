'use-strict';

import * as nodecgApiContext from './util/nodecg-api-context';
const nodecg = nodecgApiContext.get();
import {CurrentInnings} from '../types/schemas/currentInnings';
// import {Teams} from '../types/schemas/teams';
// import {Batter} from '../types/schemas/batter';
import {Bowler} from '../types/schemas/bowler';

const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings', {persistent: false});

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