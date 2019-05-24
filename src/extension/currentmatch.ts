'use-strict';

import * as nodecgApiContext from './util/nodecg-api-context';
const nodecg = nodecgApiContext.get();
import {CurrentInnings} from '../types/schemas/currentInnings';
// import {Teams} from '../types/schemas/teams';
import {Batter} from '../types/schemas/batter';
import {Bowler} from '../types/schemas/bowler';
import {Over} from '../types/schemas/over';
import {Wickets} from '../types/schemas/wickets';

const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings', {persistent: false});
const overRep = nodecg.Replicant<Over>('over', {persistent: false});

let badBallInOver: boolean = false;

function findCurrentBowlerIndex() {
	return currentInningsRep.value.bowlers.findIndex(bowler => {
		return bowler.bowling;
	});
}

nodecg.listenFor('changeBowler', (newVal: Bowler) => {
	currentInningsRep.value.bowlers[findCurrentBowlerIndex()].bowling = false;
	const newBowlerIndex = currentInningsRep.value.bowlers.indexOf(newVal);
	currentInningsRep.value.bowlers[newBowlerIndex].bowling = true;
});

nodecg.listenFor('newWicket', (data:{dismissal: string, batterOut: Batter, batterIndex: number, fielder: Bowler}) => {
	const currentBowler = currentInningsRep.value.bowlers[findCurrentBowlerIndex()];

	if (currentInningsRep.value.wickets == 10){
		// All batters are out!
		return;
	}

	// Add one to wickets
	currentInningsRep.value.wickets++;
	// Add one to bowler
	currentBowler.wickets++;

	// Get dismissal message
	let dismissalText: string = "Error";
	switch (data.dismissal) {
		case "c: ":
			dismissalText = "c: " + data.fielder.name + " b: " + currentBowler.name;
			break;
	
		case "b: ":
		case "lbw: ":
			dismissalText = data.dismissal + currentBowler.name;
			break;

		default:
			if (data.fielder) {
				dismissalText = data.dismissal + data.fielder.name;
			} else {
				dismissalText = data.dismissal;
			}
			break;
	}

	// Get next batter
	let nextBatter: Batter;

	for (let batter of currentInningsRep.value.batters) {
		if (batter.dismissal == '' && batter.batting == "WAITING") {
			// Batter hasn't been dismissed and isn't batting
			nextBatter = batter;
			nextBatter.batting = "BATTING";	// Set batter to be facing
			nextBatter.facing = data.batterOut.facing;	// If batter was facing set this batter to be facing
			break;
		}
	};
	
	data.batterOut.batting = "OUT";
	data.batterOut.dismissal = dismissalText;

	// Update dismissed batter
	currentInningsRep.value.batters[data.batterIndex] = data.batterOut;
});

nodecg.listenFor('addRuns', (runs: number) => {
	const currentBatterFacingIndex = currentInningsRep.value.batters.findIndex(batter => {
		return batter.facing == true && batter.batting == "BATTING";
	})
	const currentBatterFacing = currentInningsRep.value.batters[currentBatterFacingIndex];

	// Add runs to total score
	currentInningsRep.value.runs =+ runs;

	// Add runs to over
	overRep.value.over.push(runs);

	// Add runs to batter
	currentBatterFacing.runs[0] =+ runs;

	// Add stats to type of run scored
	if (runs == 4) {
		// Add one to four stat
		currentBatterFacing.runs[1] =+ 1;
	} else if (runs == 6) {
		// Add one to six stat
		currentBatterFacing.runs[2] =+ 1;
	}

	// Add runs to bowler
	currentInningsRep.value.bowlers[findCurrentBowlerIndex()].runs =+ runs;

	// Switch current facing status
	if ((runs % 2) == 1) {
		currentInningsRep.value.battersFacing[0].facing = !currentInningsRep.value.battersFacing[0].facing;
		currentInningsRep.value.battersFacing[1].facing = !currentInningsRep.value.battersFacing[1].facing;
	}

	// Add balls to players
	currentInningsRep.value.battersFacing[batterFacingIndex].balls =+ 1;

	_NextBall();
});

function swapBatters() {
	const currentBatters = 
}

function _NextBall() {
	// Add ball to over
	if (currentInningsRep.value.overs.length != 5) {
		// Still in over
		currentInningsRep.value.currentBowler.overs =+ 0.1;
	} else {
		// Next over
		// Push current over to list of overs
		currentInningsRep.value.overs.push(overRep.value);

		// Check if maiden
		if (overRep.value.over.every(x => x == 0) && badBallInOver == false) {
			currentInningsRep.value.currentBowler.maidenOvers++;
		}

		// Start new over
		overRep.value.over = [];

		// Add over to bowler (add 0.5 to complete the whole number)
		currentInningsRep.value.currentBowler.overs =+ 0.5;

		// Switch batter status
		currentInningsRep.value.battersFacing[0].facing = !currentInningsRep.value.battersFacing[0].facing;
		currentInningsRep.value.battersFacing[1].facing = !currentInningsRep.value.battersFacing[1].facing;

		// Reset local badball status
		badBallInOver = false;
	}
}

nodecg.listenFor('addBadBall', (ballType: string) => {
	badBallInOver = true;

	if (ballType == "wide") {
		// Add wide to bowler
		currentInningsRep.value.currentBowler.badBalls[0]++;

		// Add run against bowler: http://atca.sa.cricket.com.au/files/38/files/General%20Scoring%20Tips.pdf

		// Add single run to score
		// TODO: Byes and Leg byes
		currentInningsRep.value.runs++;
	} else {
		// Must be no ball
		// Add no ball to bowler
		currentInningsRep.value.currentBowler.badBalls[1]++;

		// Add single run to score
		currentInningsRep.value.runs++;
	}

	_NextBall();
});