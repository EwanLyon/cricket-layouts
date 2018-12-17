import {CurrentInnings} from '../../../src/types/schemas/currentInnings';

const {customElement, property} = Polymer.decorators;
const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

@customElement('cricket-bowlers')
export default class CricketBowlers extends Polymer.Element {
	@property({type: Object})
	currentInnings: CurrentInnings;

    ready() {
		super.ready();

		currentInningsRep.on('change', newVal => {
			this.currentInnings = newVal;
		});
	}
}