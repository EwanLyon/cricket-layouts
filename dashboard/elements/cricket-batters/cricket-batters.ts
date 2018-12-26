const {customElement, property} = Polymer.decorators;

import {CurrentInnings} from '../../../src/types/schemas/currentInnings';
const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

import {Batter} from '../../../src/types/schemas/batter';

@customElement('cricket-batters')
export default class CricketBatters extends Polymer.MutableData(Polymer.Element) {
	@property({type: Object})
	currentBatters: Batter[];

    ready() {
		super.ready();

		currentInningsRep.on('change', newVal => {
			this.currentBatters = newVal.batters;
			this.notifyPath('currentBatters');
		});
	}
}