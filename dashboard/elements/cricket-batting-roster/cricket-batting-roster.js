import * as tslib_1 from "tslib";
const { customElement } = Polymer.decorators;
const currentInningsRep = nodecg.Replicant('currentInnings');
let typeaheadBatters = [];
let CricketBattingRoster = class CricketBattingRoster extends Polymer.MutableData(Polymer.Element) {
    ready() {
        super.ready();
        currentInningsRep.on('change', newVal => {
            // Set team name
            this.$.teamName.innerHTML = newVal.battingTeam;
            // Make all inputs into an array to iterate over
            typeaheadBatters = Array.from(this.$.rosterInputs.children);
            // Set inputs to contain batters and set the selected value as the same in the list
            for (let i = 0; i < typeaheadBatters.length; i++) {
                typeaheadBatters[i].items = newVal.batsmen;
                typeaheadBatters[i].selectedItem = newVal.batsmen[i];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1iYXR0aW5nLXJvc3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyaWNrZXQtYmF0dGluZy1yb3N0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sRUFBQyxhQUFhLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBSTNDLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBaUIsZ0JBQWdCLENBQUMsQ0FBQztBQUU3RSxJQUFJLGdCQUFnQixHQUFjLEVBQUUsQ0FBQztBQUdyQyxJQUFxQixvQkFBb0IsR0FBekMsTUFBcUIsb0JBQXFCLFNBQVEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBRXJGLEtBQUs7UUFDRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3BDLGdCQUFnQjtZQUNoQixJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUUvQyxnREFBZ0Q7WUFDaEQsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUU1RCxtRkFBbUY7WUFDbkYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDN0MsZ0JBQWdCLENBQUMsQ0FBQyxDQUFTLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ25ELGdCQUFnQixDQUFDLENBQUMsQ0FBUyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pFO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2YsZ0RBQWdEO1FBQ2hELGdCQUFnQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFNUQsSUFBSSxhQUFhLEdBQWEsRUFBRSxDQUFDO1FBRWpDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNuQyxhQUFhLENBQUMsSUFBSSxDQUFFLFdBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7UUFFSCxzREFBc0Q7UUFDdEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0osQ0FBQTtBQWpDb0Isb0JBQW9CO0lBRHhDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztHQUNuQixvQkFBb0IsQ0FpQ3hDO2VBakNvQixvQkFBb0IifQ==