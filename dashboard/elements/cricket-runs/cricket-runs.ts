import {getCurrentBatsmen} from '../../../shared/scripts/getters';
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
			const batsmenBatting = getCurrentBatsmen(newVal, [this.batter1, this.batter2]);
			if (batsmenBatting != []) {
				this.currentInnings = newVal;

				this.batter1 = batsmenBatting[0];
				this.batter2 = batsmenBatting[1];
			}
		});
	}
}