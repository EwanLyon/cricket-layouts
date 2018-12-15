// import {Teams} from '../../../src/types/schemas/teams';
import {CurrentInnings} from '../../../src/types/schemas/currentInnings';

const {customElement} = Polymer.decorators;
// const teamsRep = nodecg.Replicant<Teams>('teams');
const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

@customElement('cricket-bowler')
export default class CricketBowler extends Polymer.Element {

    	ready() {
		super.ready();

		currentInningsRep.on('change', newVal =>{
			console.log(newVal);
			(this.$.typeaheadBowler as any).items = newVal.bowlers;
		});
	}

	UpdateBowler() {
		nodecg.sendMessage('changeBowler', (this.$.typeaheadBowler as any).selectedItem);
	}
}