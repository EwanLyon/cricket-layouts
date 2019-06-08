const {customElement, property} = Polymer.decorators;

import {formatName} from '../../shared/scripts/formatters';
import {Batter} from 'src/types/schemas/batter';

@customElement('batter-item')
export default class BatterItem extends Polymer.MutableData(Polymer.Element) {
	@property({type: Object, observer: BatterItem.prototype._updateBatter})
	batter: Batter;
	
	@property({type: String})
	name: string;

	@property({type: String})
	balls: string;

	@property({type: String})
	dismissal: string;

	@property({type: String})
	totalRuns: string;
	
	@property({type: String})
	batting: string;
	
	_updateBatter(newVal: Batter){
		this.name = formatName(newVal.name);
		this.dismissal = newVal.dismissal;

		if (newVal.batting == "BATTING") {
			this.$.batterItemBody.classList.add('batting');
		} else {
			this.$.batterItemBody.classList.remove('batting');
		}

		// Unfortunately since I need to show batters who haven't batted yet as "-" so the variables need to be strings
		if (newVal.batting || newVal.dismissal != "") {
			this.balls = String(newVal.balls);
			this.totalRuns = String(newVal.runs);
		} else {
			this.totalRuns = '-';
			this.balls = '-';
		}
		
	}
	
}