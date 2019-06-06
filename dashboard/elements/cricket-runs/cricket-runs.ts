import {CurrentInnings} from 'src/types/schemas/currentInnings';
import {Batter} from 'src/types/schemas/batter';

const {customElement, property} = Polymer.decorators;
const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

@customElement('cricket-runs')
export default class CricketRuns extends Polymer.MutableData(Polymer.Element) {
	@property({type: Object})
	currentInnings: CurrentInnings;

	@property({type: Object})
	batter1: Batter;

	@property({type: Object})
	batter2: Batter;

  ready() {
		super.ready();

		currentInningsRep.on('change', newVal => {
			const battersBatting = this.getCurrentBatters(newVal);
			if (battersBatting != []) {
				this.currentInnings = newVal;

				this.batter1 = battersBatting[0];
				this.batter2 = battersBatting[1];
			}
		});
	}

	getCurrentBatters(newVal: CurrentInnings) {
		return newVal.batsmen.filter(batter => {
			return batter.batting == "BATTING";
		});
	}
}