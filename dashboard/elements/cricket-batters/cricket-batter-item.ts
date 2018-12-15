const {customElement, property} = Polymer.decorators;

@customElement('cricket-batter-item')
export default class CricketBatterItem extends Polymer.Element {
	@property({type: String})
	name: string;

	@property({type: Number, observer: CricketBatterItem.prototype.calcTotalRuns})
	runs: number[];

	@property({type: Number})
	wickets: number;

	@property({type: Number})
	balls: number;

	@property({type: String})
	dismissal: string;

	@property({type: Number})
	totalRuns: number;
	
	calcTotalRuns(){
		this.totalRuns = this.runs.reduce((a,b) => a+b, 0);
	}
	
}