import {CurrentInnings} from '../../../src/types/schemas/currentInnings';

const {customElement, property} = Polymer.decorators;
const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

@customElement('cricket-bowlers')
export default class CricketBowlers extends Polymer.MutableData(Polymer.Element) {
	@property({type: Object})
	currentInnings: CurrentInnings;

    ready() {
		super.ready();

		currentInningsRep.on('change', newVal => {
			console.log(newVal.playedBowlers);
			this.currentInnings = newVal;
			this.notifyPath('BowlersList');
		});
	}
}