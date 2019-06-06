import { CurrentInnings } from 'src/types/schemas/currentInnings';
import { Bowler } from 'src/types/schemas/bowler';

const { customElement, property } = Polymer.decorators;
const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

@customElement('cricket-bowler')
export default class CricketBowler extends Polymer.MutableData(Polymer.Element) {
	@property({ type: Object, observer: CricketBowler.prototype.updateBadBalls })
	curBowler: Bowler;

	@property({ type: String })
	cbName: string = "No Bowler";

	@property({ type: Number })
	cbWides: number;

	@property({ type: Number })
	cbNoBalls: number;

	@property({ type: String })
	cbOvers: string;

	ready() {
		super.ready();

		currentInningsRep.on('change', newVal => {
			(this.$.typeaheadBowler as any).items = newVal.bowlers;

			this.curBowler = this.getCurrentBowler()!;
		});
	}

	getCurrentBowler() {
		if (currentInningsRep.value) {
			return currentInningsRep.value.bowlers[currentInningsRep.value.bowlers.findIndex(bowler => {
				return bowler.bowling;
			})];
		}
		return;
	}

	updateBowler() {
		if ((this.$.typeaheadBowler as any).selectedItem != undefined) {
			nodecg.sendMessage('changeBowler', (this.$.typeaheadBowler as any).selectedItem);
		}
	}

	updateBadBalls() {
		this.cbName = this.curBowler.name;
		this.cbWides = this.curBowler.badBalls[0];
		this.cbNoBalls = this.curBowler.badBalls[1];
		this.cbOvers = this.curBowler.overs;
	}
}