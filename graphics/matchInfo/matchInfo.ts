import { MatchInfo } from 'src/types/schemas/matchInfo';
import { TweenLite } from 'gsap';

const {customElement, property} = Polymer.decorators;

const matchInfoRep = nodecg.Replicant<MatchInfo>('match');

@customElement('match-info')
export default class MatchInfoPanel extends Polymer.Element {
	@property({type: Object})
	info: MatchInfo;
	
	ready() {
		super.ready();

		matchInfoRep.on('change', newVal => {
			this.info = newVal;
		});

		nodecg.listenFor('showLocation', () => {
			console.log('Showing location');
			this.showLocation();
		});

		nodecg.listenFor('hideLocation', () => {
			console.log('Hiding location');
			this.hideLocation();
		});

		nodecg.listenFor('showToss', () => {
			console.log('Showing toss');
			this.showToss();
		});

		nodecg.listenFor('hideToss', () => {
			console.log('Hiding toss');
			this.hideToss();
		});
	}

	showLocation() {
		TweenLite.to(this.$.location, 0.9, {
			"--title-width": '218px',
			"--location-width": '414px',
			"--text-padding": '15px'
		});
	}

	hideLocation() {
		TweenLite.to(this.$.location, 0.9, {
			"--title-width": '0px',
			"--location-width": '0px',
			"--text-padding": '0px'
		});
	}

	showToss() {
		TweenLite.to(this.$.toss, 0.9, {'--toss-height': '50px'});
	}

	hideToss() {
		TweenLite.to(this.$.toss, 0.9, {'--toss-height': '0px'});
	}
}