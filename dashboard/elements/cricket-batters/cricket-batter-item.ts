const {customElement, property} = Polymer.decorators;

import {Batter} from '../../../src/types/schemas/batter';

@customElement('cricket-batter-item')
export default class CricketBatterItem extends Polymer.Element {
	@property({type: Object, observer: CricketBatterItem.prototype._updateBatter})
	batter: Batter;
	
	@property({type: String})
	name: string;

	@property({type: String})
	balls: string;

	@property({type: String})
	dismissal: string;

	@property({type: String})
	totalRuns: string;

	@property({type: String})
	singles: string;

	@property({type: String})
	fours: string;

	@property({type: String})
	sixes: string;
	
	_updateBatter(newVal: Batter){
		this.name = newVal.name;
		this.dismissal = newVal.dismissal;

		// Calc Runs
		if (newVal.batting || newVal.dismissal != "") {
			// Unfortunately since I need to show batters who haven't batted yet as "-" so the variables need to be strings
			this.balls = String(newVal.balls);

			this.totalRuns = String(newVal.runs.reduce((a,b) => a+b, 0));
			this.singles = String(newVal.runs[0]);
			this.fours = String(newVal.runs[1]);
			this.sixes = String(newVal.runs[2]);
		} else {
			this.totalRuns = '-';
			this.balls = '-';
			this.singles = '-';
			this.fours = '-';
			this.sixes = '-';
		}
		
	}
	
}