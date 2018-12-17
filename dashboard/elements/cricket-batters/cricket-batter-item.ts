const {customElement, property} = Polymer.decorators;

@customElement('cricket-batter-item')
export default class CricketBatterItem extends Polymer.Element {
	@property({type: String})
	name: string;

	@property({type: Number, observer: CricketBatterItem.prototype.calcRuns})
	runs: number[];

	@property({type: Number})
	wickets: number;

	@property({type: Number})
	balls: number;

	@property({type: String})
	dismissal: string;

	@property({type: Number})
	totalRuns: number;

	@property({type: Number})
	singles: number;

	@property({type: Number})
	fours: number;

	@property({type: Number})
	sixes: number;
	
	calcRuns(){
		this.totalRuns = this.runs.reduce((a,b) => a+b, 0);
		this.singles = this.runs[0];
		this.fours = this.runs[1];
		this.sixes = this.runs[2];
	}
	
}