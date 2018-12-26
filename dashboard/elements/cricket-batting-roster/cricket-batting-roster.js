import * as tslib_1 from "tslib";
const { customElement } = Polymer.decorators;
const currentInningsRep = nodecg.Replicant('currentInnings');
let typeaheadBatters = [];
let CricketBattingRoster = class CricketBattingRoster extends Polymer.Element {
    ready() {
        super.ready();
        currentInningsRep.on('change', newVal => {
            // Set team name
            this.$.teamName.innerHTML = newVal.battingTeam;
            // Make all inputs into an array to iterate over
            typeaheadBatters = Array.from(this.$.rosterInputs.children);
            // Set inputs to contain batters and set the selected value as the same in the list
            for (let i = 0; i < typeaheadBatters.length; i++) {
                typeaheadBatters[i].items = newVal.batters;
                typeaheadBatters[i].selectedItem = newVal.batters[i];
            }
        });
    }
    UpdateBattingRoster() {
        // Make all inputs into an array to iterate over
        typeaheadBatters = Array.from(this.$.rosterInputs.children);
        let batterObjects = [];
        typeaheadBatters.forEach(batterInput => {
            batterObjects.push(batterInput.selectedItem);
        });
        // Send array to server code to maintain dumb terminal
        nodecg.sendMessage('updateBattingRoster', batterObjects);
    }
};
CricketBattingRoster = tslib_1.__decorate([
    customElement('cricket-batting-roster')
], CricketBattingRoster);
export default CricketBattingRoster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1iYXR0aW5nLXJvc3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyaWNrZXQtYmF0dGluZy1yb3N0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sRUFBQyxhQUFhLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBSTNDLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBaUIsZ0JBQWdCLENBQUMsQ0FBQztBQUU3RSxJQUFJLGdCQUFnQixHQUFjLEVBQUUsQ0FBQztBQUdyQyxJQUFxQixvQkFBb0IsR0FBekMsTUFBcUIsb0JBQXFCLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFFaEUsS0FBSztRQUNFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVkLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDcEMsZ0JBQWdCO1lBQ2hCLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBRS9DLGdEQUFnRDtZQUNoRCxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTVELG1GQUFtRjtZQUNuRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM3QyxnQkFBZ0IsQ0FBQyxDQUFDLENBQVMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDbkQsZ0JBQWdCLENBQUMsQ0FBQyxDQUFTLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakU7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtQkFBbUI7UUFDZixnREFBZ0Q7UUFDaEQsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU1RCxJQUFJLGFBQWEsR0FBYSxFQUFFLENBQUM7UUFFakMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ25DLGFBQWEsQ0FBQyxJQUFJLENBQUUsV0FBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztRQUVILHNEQUFzRDtRQUN0RCxNQUFNLENBQUMsV0FBVyxDQUFDLHFCQUFxQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzdELENBQUM7Q0FDSixDQUFBO0FBakNvQixvQkFBb0I7SUFEeEMsYUFBYSxDQUFDLHdCQUF3QixDQUFDO0dBQ25CLG9CQUFvQixDQWlDeEM7ZUFqQ29CLG9CQUFvQiJ9