import * as tslib_1 from "tslib";
const { customElement } = Polymer.decorators;
const teams = nodecg.Replicant('teamsList');
let CricketTeams = class CricketTeams extends Polymer.Element {
    ready() {
        super.ready();
        teams.on('change', newVal => {
            this.$.typeaheadBatter.items = newVal;
            this.$.typeaheadBowlers.items = newVal;
        });
    }
    _updateFiles() {
        nodecg.sendMessage('updateTeamFiles');
    }
    SwapTeams() {
        // https://stackoverflow.com/questions/16201656/how-to-swap-two-variables-in-javascript
        this.$.typeaheadBowlers.selectedItem = [this.$.typeaheadBatter.selectedItem, this.$.typeaheadBatter.selectedItem = this.$.typeaheadBowlers.selectedItem][0];
    }
    ConfirmTeams() {
        nodecg.sendMessage('newInnings', [this.$.typeaheadBowlers.selectedItem, this.$.typeaheadBatter.selectedItem]);
    }
};
CricketTeams = tslib_1.__decorate([
    customElement('cricket-teams')
], CricketTeams);
export default CricketTeams;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC10ZWFtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyaWNrZXQtdGVhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE1BQU0sRUFBQyxhQUFhLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQzNDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQVUsV0FBVyxDQUFDLENBQUM7QUFHckQsSUFBcUIsWUFBWSxHQUFqQyxNQUFxQixZQUFhLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFDckQsS0FBSztRQUNQLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVkLEtBQUssQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBdUIsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQzlDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQXdCLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxZQUFZO1FBQ1gsTUFBTSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxTQUFTO1FBQ1IsdUZBQXVGO1FBQ3RGLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQXdCLENBQUMsWUFBWSxHQUFHLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUF1QixDQUFDLFlBQVksRUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQXVCLENBQUMsWUFBWSxHQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQXdCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDaE0sQ0FBQztJQUVELFlBQVk7UUFDWCxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQXdCLENBQUMsWUFBWSxFQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBdUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ2pJLENBQUM7Q0FDRCxDQUFBO0FBdEJvQixZQUFZO0lBRGhDLGFBQWEsQ0FBQyxlQUFlLENBQUM7R0FDVixZQUFZLENBc0JoQztlQXRCb0IsWUFBWSJ9