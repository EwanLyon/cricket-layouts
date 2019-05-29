// import {Teams} from 'src/types/schemas/teams';
import {CurrentInnings} from 'src/types/schemas/currentInnings';
import {Bowler} from 'src/types/schemas/bowler';

const {customElement, property} = Polymer.decorators;
// const teamsRep = nodecg.Replicant<Teams>('teams');
const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

@customElement('cricket-bowler')
export default class CricketBowler extends Polymer.Element {
	@property({type: Object, observer: CricketBowler.prototype._updateBadBalls})
	curBowler: Bowler;

	@property({type: String})
	cbName: string = "No Bowler";

	@property({type: Number})
	cbWides: number;

	@property({type: Number})
	cbNoBalls: number;

    ready() {
		super.ready();

		currentInningsRep.on('change', newVal =>{
			(this.$.typeaheadBowler as any).items = newVal.bowlers;

			this.curBowler = this._getCurrentBowler()!;
		});
	}

	_getCurrentBowler() {
		if (currentInningsRep.value) {
			return currentInningsRep.value.bowlers[currentInningsRep.value.bowlers.findIndex(bowler => {
					return bowler.bowling;
			})];
		}
		return;
	}

	UpdateBowler() {
		nodecg.sendMessage('changeBowler', (this.$.typeaheadBowler as any).selectedItem);
	}

	_updateBadBalls(){
		this.cbName = this.curBowler.name;
		this.cbWides = this.curBowler.badBalls[0];
		this.cbNoBalls = this.curBowler.badBalls[1];
	}
}