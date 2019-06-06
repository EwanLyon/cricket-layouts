import { CurrentInnings } from 'src/types/schemas/currentInnings';
import { Over } from 'src/types/schemas/over';
import { Batter } from 'src/types/schemas/batter';
import anime from 'animejs';

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

			this.score = this.formatScore(newVal);

			currentBatsmen = this.getCurrentBatsmen(newVal);
			this.batter1 = currentBatsmen[0];
			this.batter2 = currentBatsmen[1];
			this.batter1Name = this.formatName(currentBatsmen[0].name);
			this.batter2Name = this.formatName(currentBatsmen[1].name);

			const currentBowler = this.getCurrentBowler(newVal);
			this.bowlerScore = currentBowler.wickets.toString() + "-" + currentBowler.runs.toString();
			this.bowlerOver = currentBowler.overs;
			this.bowlerName = this.formatName(currentBowler.name);

			nodecg.readReplicant<Over>('over', overValue => {
				if (overValue == undefined) {
					this.totalOvers = "0";
				} else {
					this.totalOvers = this.formatOvers(newVal, overValue).toString();
				}
			});
		});

		nodecg.listenFor('showFullFrame', () => {
			console.log('Showing');
			anime({
				targets: this.$.parent,
				translateY: 200,
				duration: 1000,
				easing: 'easeInElastic(1, 1)'
			});
		});

		nodecg.listenFor('hideFullFrame', () => {
			console.log('Hiding');
			anime({
				targets: this.$.parent,
				translateY: 0,
				duration: 1500,
				delay: 1000
			});
		});
	}

	formatName(batterName: string) {
		let splitName = batterName.split(" ");
		return splitName[splitName.length - 1].toUpperCase();
	}

	formatOvers(currentInnings: CurrentInnings, currentOver: Over) {
		let totalOvers = currentInnings.overs.length;
		let ballsInOver = currentOver.ballsLeft;
		if (ballsInOver == 0) {
			ballsInOver = 10;
		}
		totalOvers += ballsInOver / 10;
		return totalOvers;
	}

	formatScore(currentInnings: CurrentInnings) {
		return currentInnings.wickets + "-" + currentInnings.runs
	}

	getCurrentBatsmen(currentInnings: CurrentInnings) {
		let batsmenArray = currentInnings.batsmen.filter(batter => {
			return batter.batting == "BATTING";
		});
		
		if (currentBatsmen == undefined) {
			return batsmenArray;
		}
		// Don't switch the batsmen places when one goes out
		if (currentBatsmen[1].name == batsmenArray[0].name) {
			let tempBatter = batsmenArray[0];
			batsmenArray[0] = batsmenArray[1];
			batsmenArray[1] = tempBatter;
		}
		return batsmenArray;
	}

	getCurrentBowler(currentInnings: CurrentInnings) {
		return currentInnings.bowlers[currentInnings.bowlers.findIndex(bowler => {
			return bowler.bowling;
		})];
	}
}