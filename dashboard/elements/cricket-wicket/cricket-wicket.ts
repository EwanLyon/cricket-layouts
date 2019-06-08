const { customElement, property } = Polymer.decorators;

import {getCurrentBatsmen} from '../../../shared/scripts/getters';
import { CurrentInnings } from 'src/types/schemas/currentInnings';
import { Batter } from 'src/types/schemas/batter';
import { Bowler } from 'src/types/schemas/bowler';
const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

const dismissalTypes: object = {
	'Caught': 'c: ', // Both
	'Run out': 'run out: ', // Only fielder needed
	'Bowled': 'b: ', // No fielder
	'LBW': 'lbw: ', // No fielder
	'Retired': 'retired',
	'Stumped': 'stumped',
	'Hit wicket': 'hit wicket',
	'Hit ball twice': 'hit ball twice',
	'Obstructing': 'obstructing field',
	'Timed out': 'timed out'
};

let dismissalTitles: string[] = Object.keys(dismissalTypes);
let batterOut: Batter;

@customElement('cricket-wicket')
export default class CricketWicket extends Polymer.MutableData(Polymer.Element) {
	@property({ type: Object })
	batter1: Batter;

	@property({ type: Object })
	batter2: Batter;

	@property({ type: Boolean, observer: 'allowDismissal' })
	batterSelected: boolean = false;
	
	@property({ type: Boolean, observer: 'allowDismissal'  })
	dismissalSelected: boolean = false;

	@property({ type: Boolean, observer: 'allowDismissal'  })
	fielderSelected: boolean = false;

	ready() {
		super.ready();

		(this.$.dismissal as any).items = dismissalTitles;
		this.$.fielders.toggleAttribute('disabled', true);

		currentInningsRep.on('change', newVal => {
			const battersBatting = getCurrentBatsmen(newVal, [this.batter1, this.batter2]);

			this.batter1 = battersBatting[0];
			this.batter2 = battersBatting[1];

			(this.$.fielders as any).items = newVal.bowlers;
		});
	}

	batter1Selected() {
		batterOut = this.batter1;
		this.$.batter2Button.toggleAttribute('disabled');
		this.batterSelected = true;
	}

	batter2Selected() {
		batterOut = this.batter2;
		this.$.batter1Button.toggleAttribute('disabled');
		this.batterSelected = true;
	}

	checkIfFielderNeeded(newVal: any) {
		let selectedDismissal: string = newVal.detail.value;
		this.dismissalSelected = true;

		let dismissalIndex = dismissalTitles.indexOf(selectedDismissal)
		if (dismissalIndex <= 1 && dismissalIndex != -1) {
			this.fielderSelected = false;
			// Fielder is needed
			this.$.fielders.toggleAttribute('disabled', false);
		} else {
			// Fielder isnt needed
			this.fielderSelected = true;
			this.$.fielders.toggleAttribute('disabled', true);
		}
		(this.$.fielders as any).selectedItem = undefined;
	}

	setFielder(newVal: any) {
		if (newVal.detail.value != undefined) {
			this.fielderSelected = true;
		}
	}

	sendWicket() {
		let selectedDismissal: string = (this.$.dismissal as any).selectedItem;
		let dismissalText: string = (dismissalTypes as any)[selectedDismissal];

		let fielderItem: Bowler = (this.$.fielders as any).selectedItem;

		nodecg.sendMessage('newWicket', {
			dismissal: dismissalText,
			batterOut: batterOut,
			fielder: fielderItem
		});

		this.$.batter1Button.toggleAttribute('disabled', false);
		this.$.batter2Button.toggleAttribute('disabled', false);
		this.$.fielders.toggleAttribute('disabled', false);
		this.$.dismissButton.toggleAttribute('disabled', false);
		this.batterSelected = false;
		this.dismissalSelected = false;
		this.fielderSelected = false
	}

	allowDismissal() {
		// const ableToDismiss = [
		// 	this.batterSelected = false,
		// 	this.dismissalSelected = false,
		// 	this.fielderSelected = false
		// ].every(value => { return value == true })
		// console.log('Dismissal checked', [
		// 	this.batterSelected = false,
		// 	this.dismissalSelected = false,
		// 	this.fielderSelected = false
		// ]);
		// if (ableToDismiss) {
		// 	this.$.dismissButton.toggleAttribute('disabled', false);
		// }
	}
}
