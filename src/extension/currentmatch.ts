'use-strict';

import * as nodecgApiContext from './util/nodecg-api-context';
const nodecg = nodecgApiContext.get();
import {CurrentInnings} from '../types/schemas/currentInnings';
// import {Teams} from '../types/schemas/teams';
import {Batter} from '../types/schemas/batter';
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

// Data: [dismissalText, batterOut, batterIndex, fielderItem]
nodecg.listenFor('newWicket', (data: Array<any>) => {
	
	if (currentInningsRep.value.wickets == 10){
		// All batters are out!
		return;
	}

	// Add one to wickets
	currentInningsRep.value.wickets++;
	// Add one to bowler
	currentInningsRep.value.currentBowler.wickets++;

	let dismissedBatter: Batter = currentInningsRep.value.battersFacing[data[2]];

	// Get dismissal message
	let dismissalText: string = "Error";
	if (data[0] == "c: ") {
		// Caught therefore needs both fielder and bowler
		dismissalText = "c: " + (data[3] as Bowler).name + " b: " + currentInningsRep.value.currentBowler.name;
	} else if (data[0] == "b: " || data[0] == "lbw: "){
		// Bowled only needs bowler
		dismissalText = data[0] + currentInningsRep.value.currentBowler.name;
	} else if (data[3]) {
		// Else add fielder to end of dismissal text given
		dismissalText = data[0] + (data[3] as Bowler).name;
	} else {
		// Else extra data must not be needed
		dismissalText = data[0];
	}

	// Get next batter
	let nextBatter: Batter = {} as Batter;
	
	for (let batter of currentInningsRep.value.batters) {
		if (batter.dismissal == '' && !batter.batting) {
			// Batter hasn't been dismissed and isn't batting
			nextBatter = batter;
			nextBatter.batting = true;	// Set batter to be facing
			nextBatter.facing = dismissedBatter.facing;	// If batter was facing set this batter to be facing
			break;
		}
	};

	// Update dismissed batter
	currentInningsRep.value.battersFacing[data[2]] = {
		name: dismissedBatter.name,
		runs: dismissedBatter.runs,
		balls: dismissedBatter.balls,
		dismissal: dismissalText,
		batting: false,
		facing: false
	}

	let batterOriginalIndex: number = currentInningsRep.value.batters.findIndex(x => x.name == dismissedBatter.name);
	currentInningsRep.value.batters[batterOriginalIndex] = currentInningsRep.value.battersFacing[data[2]];

	// Set next batter as the batter facing
	currentInningsRep.value.battersFacing[data[2]] = nextBatter;
});