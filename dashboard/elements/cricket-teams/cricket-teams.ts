import {Teams} from '../../../src/types/schemas/teams';

const {customElement, property} = Polymer.decorators;
const teams = nodecg.Replicant<Teams>('teams');

@customElement('cricket-teams')
export default class CricketTeams extends Polymer.Element {
    @property({type: Array})
	teamsLoaded: string[];

    ready() {
		super.ready();

		teams.on('change', newVal =>{
			this.teamsLoaded = [];
			newVal.forEach((team: any) => {
				this.teamsLoaded.push(team.name);
			});

			(this.$.typeaheadBatter as any).items = this.teamsLoaded;
			(this.$.typeaheadFielder as any).items = this.teamsLoaded;
		});
	}

	_updateFiles(){
		nodecg.sendMessage('updateTeamFiles');
	}

	SwapTeams(){
		// https://stackoverflow.com/questions/16201656/how-to-swap-two-variables-in-javascript
		(this.$.typeaheadFielder as any).selectedItem = [(this.$.typeaheadBatter as any).selectedItem, (this.$.typeaheadBatter as any).selectedItem = (this.$.typeaheadFielder as any).selectedItem][0]
	}
}