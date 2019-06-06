import { CurrentInnings } from 'src/types/schemas/currentInnings';
import { Over } from 'src/types/schemas/over';
import { Batter } from 'src/types/schemas/batter';

const { customElement, property } = Polymer.decorators;

const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

@customElement('main-bar')
export default class MainBar extends Polymer.Element {
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

			const currentBatters = this.getCurrentBatters(newVal);
			this.batter1 = currentBatters[0];
			this.batter2 = currentBatters[1];
			this.batter1Name = this.formatName(currentBatters[0].name);
			this.batter2Name = this.formatName(currentBatters[1].name);

			const currentBowler = this.getCurrentBowler(newVal);
			this.bowlerScore = currentBowler.wickets.toString() + "-" + currentBowler.runs.toString();
			this.bowlerOver = currentBowler.overs.toFixed(1);
			this.bowlerName = this.formatName(currentBowler.name);

			nodecg.readReplicant<Over>('over', overValue => {
				if (overValue == undefined) {
					this.totalOvers = "0";
				} else {
					this.totalOvers = this.formatOvers(newVal, overValue).toString();
				}
			});
		});
	}

	formatName(batterName: string) {
		let splitName = batterName.split(" ");
		return splitName[splitName.length - 1].toUpperCase();
	}

	formatOvers(currentInnings: CurrentInnings, currentOver: Over) {
		let totalOvers = currentInnings.overs.length;
		totalOvers += (currentOver.over.length) / 10;
		return totalOvers;
	}

	formatScore(currentInnings: CurrentInnings) {
		return currentInnings.wickets + "-" + currentInnings.runs
	}

	getCurrentBatters(currentInnings: CurrentInnings) {
		return currentInnings.batsmen.filter(batter => {
			return batter.batting == "BATTING";
		});
	}

	getCurrentBowler(currentInnings: CurrentInnings) {
		return currentInnings.bowlers[currentInnings.bowlers.findIndex(bowler => {
			return bowler.bowling;
		})];
	}
}