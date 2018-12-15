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

    @property({type: Number})
    badBalls: number[];

    @property({type: Number})
    overs: number;
}