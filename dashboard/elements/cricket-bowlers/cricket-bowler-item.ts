const {customElement, property} = Polymer.decorators;

import {Bowler} from '../../../src/types/schemas/bowler'

@customElement('cricket-bowler-item')
export default class CricketBowlerItem extends Polymer.Element {
    @property({type: Object, observer: CricketBowlerItem.prototype._updateBowler})
    bowler: Bowler;
    
    @property({type: Boolean, notify: true})
    currentBowler: boolean;

    @property({type: String})
	name: string;

    @property({type: Number})
    maidenOvers: number;

    @property({type: Number})
    runs: number;

    @property({type: Number})
    wickets: number;

    @property({type: Number})
    overs: number;

    @property({type: Number})
    wides: number;

    @property({type: Number})
    noBalls: number;

    _updateBowler(newVal: Bowler) {
        if (this.currentBowler) {
            this.name = newVal.name + '*';
        } else {
            this.name = newVal.name;
        }
        
        this.overs = newVal.overs;
        this.maidenOvers = newVal.maidenOvers;
        this.runs = newVal.runs;
        this.wickets = newVal.wickets;

        this.wides = newVal.badBalls[0];
        this.noBalls = newVal.badBalls[1];
    }
}