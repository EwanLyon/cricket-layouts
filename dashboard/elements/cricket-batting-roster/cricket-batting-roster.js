import * as tslib_1 from "tslib";
const { customElement } = Polymer.decorators;
const currentInningsRep = nodecg.Replicant('currentInnings');
let CricketBattingRoster = class CricketBattingRoster extends Polymer.Element {
    ready() {
        super.ready();
        currentInningsRep.on('change', newVal => {
            this.$.typeaheadBatter1.items = newVal.batters;
            this.$.typeaheadBatter2.items = newVal.batters;
            this.$.typeaheadBatter3.items = newVal.batters;
            this.$.typeaheadBatter4.items = newVal.batters;
            this.$.typeaheadBatter5.items = newVal.batters;
            this.$.typeaheadBatter6.items = newVal.batters;
            this.$.typeaheadBatter7.items = newVal.batters;
            this.$.typeaheadBatter8.items = newVal.batters;
            this.$.typeaheadBatter9.items = newVal.batters;
            this.$.typeaheadBatter10.items = newVal.batters;
            this.$.typeaheadBatter11.items = newVal.batters;
        });
    }
    UpdateBattingRoster() {
        currentInningsRep.value.batters = [];
        currentInningsRep.value.batters = [
            this.$.typeaheadBatter1.selectedItem,
            this.$.typeaheadBatter2.selectedItem,
            this.$.typeaheadBatter3.selectedItem,
            this.$.typeaheadBatter4.selectedItem,
            this.$.typeaheadBatter5.selectedItem,
            this.$.typeaheadBatter6.selectedItem,
            this.$.typeaheadBatter7.selectedItem,
            this.$.typeaheadBatter8.selectedItem,
            this.$.typeaheadBatter9.selectedItem,
            this.$.typeaheadBatter10.selectedItem,
            this.$.typeaheadBatter11.selectedItem
        ];
    }
};
CricketBattingRoster = tslib_1.__decorate([
    customElement('cricket-batting-roster')
], CricketBattingRoster);
export default CricketBattingRoster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1iYXR0aW5nLXJvc3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyaWNrZXQtYmF0dGluZy1yb3N0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sRUFBQyxhQUFhLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBSTNDLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBaUIsZ0JBQWdCLENBQUMsQ0FBQztBQUc3RSxJQUFxQixvQkFBb0IsR0FBekMsTUFBcUIsb0JBQXFCLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFFaEUsS0FBSztRQUNFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVkLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBd0IsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUN2RCxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUF3QixDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQXdCLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDdkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBd0IsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUN2RCxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUF3QixDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQXdCLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDdkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBd0IsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUN2RCxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUF3QixDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQXdCLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDdkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBeUIsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUN4RCxJQUFJLENBQUMsQ0FBQyxDQUFDLGlCQUF5QixDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG1CQUFtQjtRQUNkLGlCQUFpQixDQUFDLEtBQXdCLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUV4RCxpQkFBaUIsQ0FBQyxLQUF3QixDQUFDLE9BQU8sR0FBRztZQUNqRCxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUF3QixDQUFDLFlBQVk7WUFDNUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBd0IsQ0FBQyxZQUFZO1lBQzVDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQXdCLENBQUMsWUFBWTtZQUM1QyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUF3QixDQUFDLFlBQVk7WUFDNUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBd0IsQ0FBQyxZQUFZO1lBQzVDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQXdCLENBQUMsWUFBWTtZQUM1QyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUF3QixDQUFDLFlBQVk7WUFDNUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBd0IsQ0FBQyxZQUFZO1lBQzVDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQXdCLENBQUMsWUFBWTtZQUM1QyxJQUFJLENBQUMsQ0FBQyxDQUFDLGlCQUF5QixDQUFDLFlBQVk7WUFDN0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBeUIsQ0FBQyxZQUFZO1NBQ2pELENBQUM7SUFDTixDQUFDO0NBQ0osQ0FBQTtBQXJDb0Isb0JBQW9CO0lBRHhDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztHQUNuQixvQkFBb0IsQ0FxQ3hDO2VBckNvQixvQkFBb0IifQ==