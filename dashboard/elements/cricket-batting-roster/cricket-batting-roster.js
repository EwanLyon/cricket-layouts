import * as tslib_1 from "tslib";
const { customElement } = Polymer.decorators;
const currentInningsRep = nodecg.Replicant('currentInnings');
let CricketBattingRoster = class CricketBattingRoster extends Polymer.Element {
    ready() {
        super.ready();
        currentInningsRep.on('change', newVal => {
            this.$.teamName.innerHTML = newVal.battingTeam;
            var typeaheadBatters = Array.from(this.$.rosterInputs.children);
            for (let i = 0; i < typeaheadBatters.length; i++) {
                typeaheadBatters[i].items = newVal.batters;
                typeaheadBatters[i].selectedItem = newVal.batters[i];
            }
        });
    }
    UpdateBattingRoster() {
        currentInningsRep.value.batters = [];
        var typeaheadBatters = Array.from(this.$.rosterInputs.children);
        for (let i = 0; i < typeaheadBatters.length; i++) {
            currentInningsRep.value.batters.push(typeaheadBatters[i].selectedItem);
        }
    }
};
CricketBattingRoster = tslib_1.__decorate([
    customElement('cricket-batting-roster')
], CricketBattingRoster);
export default CricketBattingRoster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1iYXR0aW5nLXJvc3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyaWNrZXQtYmF0dGluZy1yb3N0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sRUFBQyxhQUFhLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBRzNDLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBaUIsZ0JBQWdCLENBQUMsQ0FBQztBQUc3RSxJQUFxQixvQkFBb0IsR0FBekMsTUFBcUIsb0JBQXFCLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFFaEUsS0FBSztRQUNFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVkLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDL0MsSUFBSSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWhFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzdDLGdCQUFnQixDQUFDLENBQUMsQ0FBUyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNuRCxnQkFBZ0IsQ0FBQyxDQUFDLENBQVMsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqRTtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG1CQUFtQjtRQUNkLGlCQUFpQixDQUFDLEtBQXdCLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUV6RCxJQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxpQkFBaUIsQ0FBQyxLQUF3QixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdkc7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQXpCb0Isb0JBQW9CO0lBRHhDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztHQUNuQixvQkFBb0IsQ0F5QnhDO2VBekJvQixvQkFBb0IifQ==