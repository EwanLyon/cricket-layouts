'use-strict';

import * as nodecgApiContext from './util/nodecg-api-context';
const nodecg = nodecgApiContext.get();
import {CurrentInnings} from '../types/schemas/currentInnings';
import {Batter} from '../types/schemas/batter';
import {Bowler} from '../types/schemas/bowler';
import {Over} from '../types/schemas/over';

const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings', {persistent: false});
const overRep = nodecg.Replicant<Over>('over', {persistent: false});

let badBallInOver: boolean = false;

function findCurrentBowlerIndex() {
	return currentInningsRep.value.bowlers.findIndex(bowler => {
		return bowler.bowling;
	});
}

function findBowlerIndex(searchBowler: Bowler) {
	let index = currentInningsRep.value.bowlers.map((bowler, i) => {
		if (bowler.name == searchBowler.name) {
			return i;
		}
		return undefined;
	});
	return index.filter(item => item != undefined)[0];
}

nodecg.listenFor('changeBowler', (newVal: Bowler) => {
	if (findCurrentBowlerIndex() > -1) {
		currentInningsRep.value.bowlers[findCurrentBowlerIndex()].bowling = false;
	}
	const newBowlerIndex = findBowlerIndex(newVal);
	if (newBowlerIndex != undefined) {
		currentInningsRep.value.bowlers[newBowlerIndex].bowling = true;
	}
});

nodecg.listenFor('newWicket', (data:{dismissal: string, batterOut: Batter, batterIndex: number, fielder: Bowler}) => {
	const currentBowler = getCurrentBowler();

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
	currentInningsRep.value.runs += runs;

	// Add runs to over
	overRep.value.over.push(runs);

	// Add runs to batter
	currentBatterFacing.runs[0] += runs;
	currentBatterFacing.balls++;

	// Add stats to type of run scored
	if (runs == 4) {
		// Add one to four stat
		currentBatterFacing.runs[1] += 1;
	} else if (runs == 6) {
		// Add one to six stat
		currentBatterFacing.runs[2] += 1;
	}

	// Add runs to bowler
	currentInningsRep.value.bowlers[findCurrentBowlerIndex()].runs += runs;

	// Switch current facing status
	if ((runs % 2) == 1) {
		swapBatters();
	}
	
	currentInningsRep.value.batters[currentBatterFacingIndex] = currentBatterFacing;

	nextBall();
});

function swapBatters() {
	const currentBatters = currentInningsRep.value.batters.filter(batter => {
		return batter.batting == "BATTING";
	});

	if (currentBatters.length != 2) {
		nodecg.log.error('There aren\'t two batters: ' + currentBatters.length);
		process.exit(0);
	}

	// Switching asterisk
	currentBatters.map(batter => {
		if (batter.facing) {
			batter.name = batter.name.slice(0, -1);
		} else {
			batter.name += '*';
		}
	});

	currentBatters[0].facing = !currentBatters[0].facing;
	currentBatters[1].facing = !currentBatters[1].facing;

	// Set the batter objects back
	currentInningsRep.value.batters.map(batter => {
		if (batter.name == currentBatters[0].name) {
			batter = currentBatters[0];
		} else if (batter.name == currentBatters[1].name) {
			batter = currentBatters[1];
		}
	});
}

function nextBall() {
	const currentBowler = getCurrentBowler();
	// Add ball to over
	if (overRep.value.over.length < 6) {
		// Still in over
		currentBowler.overs += 0.1;
	} else {
		nextOver(currentBowler);		
	}
}

nodecg.listenFor('nextOver', () => {
	nextOver(getCurrentBowler());
});

function nextOver(curBowler: Bowler) {
	// NEXT OVER
	let currentOver = JSON.parse(JSON.stringify(overRep.value));	// Fixes NodeCG assert single owner error

	// Start new over
	overRep.value = {
		over: []
	};
	
	// Push current over to list of overs
	currentInningsRep.value.overs.push(currentOver);

	// Check if maiden
	if (overRep.value.over.every(x => x == 0) && badBallInOver == false) {
		curBowler.maidenOvers++;
	}

	// Add over to bowler (add 0.5 to complete the whole number)
	curBowler.overs += 0.5;

	// Switch batter status
	swapBatters();

	// Reset local badball status
	badBallInOver = false;

	currentInningsRep.value.bowlers[findCurrentBowlerIndex()] = curBowler;
}

nodecg.listenFor('addBadBall', (ballType: string) => {
	badBallInOver = true;
	const currentBowler = getCurrentBowler();

	if (ballType == "wide") {
		// Add wide to bowler
		currentBowler.badBalls[0]++;

		// Add run against bowler: http://atca.sa.cricket.com.au/files/38/files/General%20Scoring%20Tips.pdf

		// Add single run to score
		// TODO: Byes and Leg byes
		currentInningsRep.value.runs++;
	} else {
		// Must be no ball
		// Add no ball to bowler
		currentBowler.badBalls[1]++;

		// Add single run to score
		currentInningsRep.value.runs++;
	}

	currentInningsRep.value.bowlers[findCurrentBowlerIndex()] = currentBowler;

	nextBall();
});

function getCurrentBowler(): Bowler {
	return currentInningsRep.value.bowlers[findCurrentBowlerIndex()];
}