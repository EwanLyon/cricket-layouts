const {customElement, property} = Polymer.decorators;

@customElement('cricket-fielders')
export default class CricketFielders extends Polymer.Element {
	@property({type: String})
	name: string;

	@property({type: String})
	role: string;

	@property({type: String})
	bowlingStyle: string;

    ready() {
		super.ready();
	}
}