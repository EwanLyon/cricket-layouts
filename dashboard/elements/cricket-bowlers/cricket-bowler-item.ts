const {customElement, property} = Polymer.decorators;

@customElement('cricket-bowler-item')
export default class CricketBowlerItem extends Polymer.Element {
    @property({type: String})
	name: string;

    @property({type: Number})
    maidenOvers: number;

    @property({type: Number})
    runs: number;

    @property({type: Number})
    wickets: number;

    @property({type: Number, observer: CricketBowlerItem.prototype.seperateBadBalls})
    badBalls: number[];

    @property({type: Number})
    overs: number;

    @property({type: Number})
    wides: number;

    @property({type: Number})
    noBalls: number;

    seperateBadBalls() {
        this.wides = this.badBalls[0];
        this.noBalls = this.badBalls[1];

        console.log(this.maidenOvers + this.runs + this.badBalls[0] + this.badBalls[1]);
    }
}