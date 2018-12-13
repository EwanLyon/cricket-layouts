const {customElement} = Polymer.decorators;

@customElement('cricket-match')
export default class CricketMatch extends Polymer.Element {

	updateMatch() {
		nodecg.sendMessage('updateMatch', {
			venue: (this.$.VenueInput as IronInputElement).value,
			startDate: (this.$.DateInput as IronInputElement).value,
			umpires: [(this.$.Ump1Input as IronInputElement).value,
				(this.$.Ump2Input as IronInputElement).value,
				(this.$.TrdUmpInput as IronInputElement).value,
				(this.$.RefInput as IronInputElement).value
			],
			pitchState: (this.$.PitchInput as IronInputElement).value,
			surfaceState: (this.$.SurfaceInput as IronInputElement).value,
			weather: (this.$.WeatherInput as IronInputElement).value,
			toss: (this.$.TossInput as IronInputElement).value
		});
	}
}