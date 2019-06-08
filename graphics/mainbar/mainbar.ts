import * as cricketFormat from '../../shared/scripts/formatters';
import * as cricketGet from '../../shared/scripts/getters';
import { CurrentInnings } from 'src/types/schemas/currentInnings';
import { Over } from 'src/types/schemas/over';
import { Batter } from 'src/types/schemas/batter';
import {TweenLite, Elastic} from 'gsap';

const { customElement, property } = Polymer.decorators;

const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

let currentBatsmen: Batter[];

@customElement('main-bar')
export default class MainBar extends Polymer.MutableData(Polymer.Element) {
	@property({ type: Object })
	currentInningsProp: CurrentInnings;

	@property({ type: String })
	batterTLA: string;

	@property({ type: String })
	bowlerTLA: string;

	@property({ type: String })
	score: string;

	@property({ type: Object })
	batter1: Batter;

	@property({ type: Object })
	batter2: Batter;

	@property({ type: String })
	batter1Name: string;

	@property({ type: String })
	batter2Name: string;

	@property({ type: String })
	bowlerScore: string;

	@property({ type: String })
	bowlerOver: string;

	@property({ type: String })
	totalOvers: string;

	@property({ type: String })
	bowlerName: string;

	ready() {
		super.ready();

		currentInningsRep.on('change', newVal => {
			this.currentInningsProp = newVal;
			this.batterTLA = newVal.TLAs[1];
			this.bowlerTLA = newVal.TLAs[0];

			this.score = cricketFormat.formatScore(newVal);

			currentBatsmen = cricketGet.getCurrentBatsmen(newVal, currentBatsmen);
			this.batter1 = currentBatsmen[0];
			this.batter2 = currentBatsmen[1];
			this.batter1Name = cricketFormat.formatName(currentBatsmen[0].name);
			this.batter2Name = cricketFormat.formatName(currentBatsmen[1].name);

			const currentBowler = cricketGet.getCurrentBowler(newVal);
			this.bowlerScore = currentBowler.wickets.toString() + "-" + currentBowler.runs.toString();
			this.bowlerOver = currentBowler.overs;
			this.bowlerName = cricketFormat.formatName(currentBowler.name);

			nodecg.readReplicant<Over>('over', overValue => {
				if (overValue == undefined) {
					this.totalOvers = "0";
				} else {
					this.totalOvers = cricketFormat.formatOvers(newVal, overValue);
				}
			});
		});

		nodecg.listenFor('showScorebug', () => {
			this.showScorebug();
		});
		
		nodecg.listenFor('hideScorebug', () => {
			this.hideScoreBug();
		});
	}
	showScorebug() {
		console.log('Showing Score bug');
		TweenLite.to(this.$.parent, 1.5, {y: 0, ease: Elastic.easeOut.config(1, 0.5)});
	}

	hideScoreBug() {
		console.log('Hiding Score bug');
		TweenLite.to(this.$.parent, 1, {y: 200, ease: Elastic.easeIn.config(1, 1)});
	}
}