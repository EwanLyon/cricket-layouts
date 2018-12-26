import {CurrentInnings} from '../../../src/types/schemas/currentInnings';
import {Batter} from '../../../src/types/schemas/batter'

const {customElement, property} = Polymer.decorators;
const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

@customElement('cricket-runs')
export default class CricketRuns extends Polymer.Element {
	@property({type: Object})
	currentInnings: CurrentInnings;

	@property({type: Object})
	batter1: Batter;

	@property({type: Object})
	batter2: Batter;

	@property({type:Number})
	b1Singles: number;

	@property({type:Number})
	b1Fours: number;

	@property({type:Number})
	b1Sixes: number;

	@property({type:Number})
	b1Total: number;

	@property({type:Number})
	b2Singles: number;

	@property({type:Number})
	b2Fours: number;

	@property({type:Number})
	b2Sixes: number;

	@property({type:Number})
	b2Total: number;

    ready() {
		super.ready();

		currentInningsRep.on('change', newVal => {
			if (newVal.battersFacing[0].name == "MISSING BATTERS NAME") {
				return;
			}
			this.currentInnings = newVal;

			this.batter1 = newVal.battersFacing[0];
			this.batter2 = newVal.battersFacing[1];

			this.b1Singles = this.batter1.runs[0];
			this.b1Fours = this.batter1.runs[1];
			this.b1Sixes = this.batter1.runs[2];
			this.b1Total = this.batter1.runs.reduce((a,b) => a+b, 0);

			this.b2Singles = this.batter2.runs[0];
			this.b2Fours = this.batter2.runs[1];
			this.b2Sixes = this.batter2.runs[2];
			this.b2Total = this.batter2.runs.reduce((a,b) => a+b, 0);
		});
	}
}