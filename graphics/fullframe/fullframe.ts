import { CurrentInnings } from 'src/types/schemas/currentInnings';
import { Over } from 'src/types/schemas/over';
import { Batter } from 'src/types/schemas/batter';
import { MatchInfo } from 'src/types/schemas/matchInfo';
import {} from 'animejs'
import anime from 'animejs';

const { customElement, property } = Polymer.decorators;

const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');
const matchInfoRep = nodecg.Replicant<MatchInfo>('match');

/**
 * @customElement
 * @polymer
 * @appliesMixin Polymer.MutableData
 */
@customElement('full-frame')
export default class FullFrame extends Polymer.MutableData(Polymer.Element) {
	@property({ type: Object })
	currentInnings: CurrentInnings;

	@property({ type: String })
	score: string;

	@property({ type: Array })
	batsmen: Batter[];

	@property({ type: Object })
	matchInfo: MatchInfo;

	@property({ type: String })
	totalOvers: string;

	ready() {
		super.ready();

		// Start hidden
		anime({
			targets: [this.$.title, this.$.batterListParent, this.$.bottom],
			opacity: 0,
			duration: 0
		});

		currentInningsRep.on('change', newVal => {
			this.currentInnings = newVal;

			this.score = this.formatScore(newVal);
			this.batsmen = [];
			this.batsmen = newVal.batsmen;

			nodecg.readReplicant<Over>('over', overValue => {
				if (overValue == undefined) {
					this.totalOvers = "0";
				} else {
					this.totalOvers = this.formatOvers(newVal, overValue).toString();
				}
			});
		});

		matchInfoRep.on('change', newVal => {
			this.matchInfo = newVal;
		})

		nodecg.listenFor('showFullFrame', () => {
			console.log('Showing');
			anime({
				targets: [this.$.title, this.$.batterListParent, this.$.bottom],
				opacity: 1,
				duration: 2000,
				delay: 1000
			});
		});

		nodecg.listenFor('hideFullFrame', () => {
			console.log('Hiding');
			anime({
				targets: [this.$.title, this.$.batterListParent, this.$.bottom],
				opacity: 0,
				duration: 2000
			});
		});
	}

	formatName(batterName: string) {
		let splitName = batterName.split(" ");
		return splitName[splitName.length - 1].toUpperCase();
	}

	formatOvers(currentInnings: CurrentInnings, currentOver: Over) {
		return currentInnings.overs.length.toString() + '.' + currentOver.ballsLeft.toString();
	}

	formatScore(currentInnings: CurrentInnings) {
		return currentInnings.wickets + "-" + currentInnings.runs
	}
}