import * as tslib_1 from "tslib";
const { customElement, property } = Polymer.decorators;
const teams = nodecg.Replicant('teams');
let CricketTeams = class CricketTeams extends Polymer.Element {
    ready() {
        super.ready();
        teams.on('change', newVal => {
            this.teamsLoaded = [];
            newVal.forEach((team) => {
                this.teamsLoaded.push(team.name);
            });
            this.$.typeaheadBatter.items = this.teamsLoaded;
            this.$.typeaheadFielder.items = this.teamsLoaded;
        });
    }
    _updateFiles() {
        nodecg.sendMessage('updateTeamFiles');
    }
    SwapTeams() {
        this.$.typeaheadFielder.selectedItem = [this.$.typeaheadBatter.selectedItem, this.$.typeaheadBatter.selectedItem = this.$.typeaheadFielder.selectedItem][0];
    }
};
tslib_1.__decorate([
    property({ type: Array })
], CricketTeams.prototype, "teamsLoaded", void 0);
CricketTeams = tslib_1.__decorate([
    customElement('cricket-teams')
], CricketTeams);
export default CricketTeams;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC10ZWFtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyaWNrZXQtdGVhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNyRCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFRLE9BQU8sQ0FBQyxDQUFDO0FBRy9DLElBQXFCLFlBQVksR0FBakMsTUFBcUIsWUFBYSxTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBSXJELEtBQUs7UUFDUCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBdUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN4RCxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUF3QixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFlBQVk7UUFDWCxNQUFNLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUF3QixDQUFDLFlBQVksR0FBRyxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBdUIsQ0FBQyxZQUFZLEVBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUF1QixDQUFDLFlBQVksR0FBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUF3QixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2hNLENBQUM7Q0FDRCxDQUFBO0FBdkJBO0lBREksUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO2lEQUNMO0FBRkYsWUFBWTtJQURoQyxhQUFhLENBQUMsZUFBZSxDQUFDO0dBQ1YsWUFBWSxDQXlCaEM7ZUF6Qm9CLFlBQVkifQ==