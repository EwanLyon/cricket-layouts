import {Teams} from 'src/types/schemas/teams';

const {customElement} = Polymer.decorators;
const teams = nodecg.Replicant<Teams[]>('teamsList');

@customElement('cricket-teams')
export default class CricketTeams extends Polymer.Element {
    ready() {
		super.ready();

		teams.on('change', newVal =>{
			(this.$.typeaheadBatter as any).items = newVal;
			(this.$.typeaheadBowlers as any).items = newVal;
		});
	}

	_updateFiles(){
		nodecg.sendMessage('updateTeamFiles');
	}

	swapTeams(){
		// https://stackoverflow.com/questions/16201656/how-to-swap-two-variables-in-javascript
		(this.$.typeaheadBowlers as any).selectedItem = [(this.$.typeaheadBatter as any).selectedItem, (this.$.typeaheadBatter as any).selectedItem = (this.$.typeaheadBowlers as any).selectedItem][0]
	}

	ConfirmTeams(){
		console.log((this.$.typeaheadBowlers as any).selectedItem)
		nodecg.sendMessage('newInnings', {bowlingTeam: (this.$.typeaheadBowlers as any).selectedItem, battingTeam: (this.$.typeaheadBatter as any).selectedItem});
	}
}