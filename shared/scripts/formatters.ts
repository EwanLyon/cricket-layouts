import { CurrentInnings } from 'src/types/schemas/currentInnings';
import { Over } from 'src/types/schemas/over';

export function formatOvers(currentInnings: CurrentInnings, currentOver: Over) {
	let totalOvers = currentInnings.overs.length;
	let ballsInOver = currentOver.over.length;
	return `${totalOvers}.${ballsInOver}`;
}

export function formatName(batterName: string) {
	let splitName = batterName.split(" ");
	return splitName[splitName.length - 1].toUpperCase();
}

export function formatScore(currentInnings: CurrentInnings) {
	return currentInnings.wickets + "-" + currentInnings.runs
}