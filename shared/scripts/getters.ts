import { CurrentInnings } from '../../src/types/schemas/currentInnings';
import { Batter } from '../../src/types/schemas/batter';

export function getCurrentBatsmen(currentInnings: CurrentInnings, oldValue: Batter[]) {
	let batsmenArray = currentInnings.batsmen.filter(batter => {
		return batter.batting == "BATTING";
	});
	
	if (oldValue == undefined || oldValue[0] == undefined) {
		return batsmenArray;
	}
	
	// Don't switch the batsmen places when one goes out
	if (oldValue[1].name == batsmenArray[0].name) {
		let tempBatter = batsmenArray[0];
		batsmenArray[0] = batsmenArray[1];
		batsmenArray[1] = tempBatter;
	}
	return batsmenArray;
}

export function getCurrentBowler(currentInnings: CurrentInnings) {
	return currentInnings.bowlers[currentInnings.bowlers.findIndex(bowler => {
		return bowler.bowling;
	})];
}

export function getPlayedBowlers(innings: CurrentInnings) {
	return innings.bowlers.filter(bowler => {
		return bowler.overs != '0';
	})
}