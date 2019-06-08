import * as cricketFormat from '../../shared/scripts/formatters';
import { CurrentInnings } from 'src/types/schemas/currentInnings';
import { Over } from 'src/types/schemas/over';
import { Batter } from 'src/types/schemas/batter';
import { MatchInfo } from 'src/types/schemas/matchInfo';
import {TweenLite} from 'gsap'

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
		TweenLite.to([this.$.title, this.$.batterListParent, this.$.bottom], 0, {opacity: 0});

		currentInningsRep.on('change', newVal => {
			this.currentInnings = newVal;

			this.score = cricketFormat.formatScore(newVal);
			this.batsmen = [];
			this.batsmen = newVal.batsmen;

			nodecg.readReplicant<Over>('over', overValue => {
				if (overValue == undefined) {
					this.totalOvers = "0";
				} else {
					this.totalOvers = cricketFormat.formatOvers(newVal, overValue);
				}
			});
		});

		matchInfoRep.on('change', newVal => {
			this.matchInfo = newVal;
		})

		nodecg.listenFor('showFullFrame', () => {
			console.log('Showing Full Frame');
			TweenLite.to([this.$.title, this.$.batterListParent, this.$.bottom], 1, {opacity: 1});
		});

		nodecg.listenFor('hideFullFrame', () => {
			console.log('Hiding Full Frame');
			TweenLite.to([this.$.title, this.$.batterListParent, this.$.bottom], 1, {opacity: 0});
		});
	}
}