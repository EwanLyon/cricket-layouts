import * as tslib_1 from "tslib";
const { customElement } = Polymer.decorators;
const currentInningsRep = nodecg.Replicant('currentInnings');
let CricketBattingRoster = class CricketBattingRoster extends Polymer.Element {
    ready() {
        super.ready();
        currentInningsRep.on('change', newVal => {
            // Set team name
            this.$.teamName.innerHTML = newVal.battingTeam;
            // Make all inputs into an array to iterate over
            var typeaheadBatters = Array.from(this.$.rosterInputs.children);
            // Set inputs to contain batters and set the selected value as the same in the list
            for (let i = 0; i < typeaheadBatters.length; i++) {
                typeaheadBatters[i].items = newVal.batters;
                typeaheadBatters[i].selectedItem = newVal.batters[i];
            }
        });
    }
    UpdateBattingRoster() {
        // Reset batting roster
        currentInningsRep.value.batters = [];
        // Make all inputs into an array to iterate over
        var typeaheadBatters = Array.from(this.$.rosterInputs.children);
        // Push each value into the batting roster
        for (let i = 0; i < typeaheadBatters.length; i++) {
            currentInningsRep.value.batters.push(typeaheadBatters[i].selectedItem);
        }
    }
};
CricketBattingRoster = tslib_1.__decorate([
    customElement('cricket-batting-roster')
], CricketBattingRoster);
export default CricketBattingRoster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1iYXR0aW5nLXJvc3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyaWNrZXQtYmF0dGluZy1yb3N0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sRUFBQyxhQUFhLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBRzNDLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBaUIsZ0JBQWdCLENBQUMsQ0FBQztBQUc3RSxJQUFxQixvQkFBb0IsR0FBekMsTUFBcUIsb0JBQXFCLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFFaEUsS0FBSztRQUNFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVkLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDcEMsZ0JBQWdCO1lBQ2hCLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBRS9DLGdEQUFnRDtZQUNoRCxJQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFaEUsbUZBQW1GO1lBQ25GLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzdDLGdCQUFnQixDQUFDLENBQUMsQ0FBUyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNuRCxnQkFBZ0IsQ0FBQyxDQUFDLENBQVMsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqRTtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG1CQUFtQjtRQUNmLHVCQUF1QjtRQUN0QixpQkFBaUIsQ0FBQyxLQUF3QixDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFekQsZ0RBQWdEO1FBQ2hELElBQUksZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVoRSwwQ0FBMEM7UUFDMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxpQkFBaUIsQ0FBQyxLQUF3QixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdkc7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQWhDb0Isb0JBQW9CO0lBRHhDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztHQUNuQixvQkFBb0IsQ0FnQ3hDO2VBaENvQixvQkFBb0IifQ==