import { MatchInfo } from 'src/types/schemas/matchInfo';

const {customElement, property} = Polymer.decorators;
const matchRep = nodecg.Replicant<MatchInfo>('match');

@customElement('cricket-match')
export default class CricketMatch extends Polymer.Element {

	@property({type: Object})
	matchInfo: MatchInfo

	@property({type: String})
	umpire1: string
	
	@property({type: String})
	umpire2: string
	
	@property({type: String})
	thirdUmpire: string
	
	@property({type: String})
	referee: string

	ready() {
		super.ready();

		matchRep.on('change', newVal => {
			this.matchInfo = newVal;
			this.umpire1 = newVal.umpires[0];
			this.umpire2 = newVal.umpires[0];
			this.thirdUmpire = newVal.umpires[0];
			this.referee = newVal.umpires[0];
		});
	}

	updateMatch() {
		nodecg.sendMessage('updateMatch', {
			event: (this.$.EventInput as IronInputElement).value,
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