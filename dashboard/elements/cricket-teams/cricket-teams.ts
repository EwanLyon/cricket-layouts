const {customElement, property} = Polymer.decorators;
const teams = nodecg.Replicant<Asset[]>('assets:teams');

interface Asset {
	base: string;
	bundleName: string;
	category: string;
	ext: string;
	name: string;
	sum: string;
	url: string;
}

@customElement('cricket-teams')
export default class CricketTeams extends Polymer.Element {
    @property({type: Array})
	teamsLoaded: string[];

    ready() {
		super.ready();

		teams.on('change', newVal =>{
			this.teamsLoaded = [];
			newVal.forEach(teamFile => {
				this.teamsLoaded.push(teamFile.name);
			});

			(this.$.typeaheadBatter as any).items = this.teamsLoaded;
			(this.$.typeaheadFielder as any).items = this.teamsLoaded;
		});
	}
}