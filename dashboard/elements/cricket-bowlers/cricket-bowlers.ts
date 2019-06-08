import {getPlayedBowlers} from '../../../shared/scripts/getters';
import {CurrentInnings} from 'src/types/schemas/currentInnings';
import { Bowler } from 'src/types/schemas/bowler';

const {customElement, property} = Polymer.decorators;
const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

@customElement('cricket-bowlers')
export default class CricketBowlers extends Polymer.MutableData(Polymer.Element) {

	@property({type: Array})
	playedBowlers: Bowler[];

    ready() {
		super.ready();

		currentInningsRep.on('change', newVal => {
			this.playedBowlers = [];
			this.playedBowlers = getPlayedBowlers(newVal);
		});
	}
}