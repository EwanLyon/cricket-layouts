import * as tslib_1 from "tslib";
const { customElement, property } = Polymer.decorators;
const teams = nodecg.Replicant('assets:teams');
let CricketTeams = class CricketTeams extends Polymer.Element {
    ready() {
        super.ready();
        console.log(teams.value);
    }
};
tslib_1.__decorate([
    property({ type: String })
], CricketTeams.prototype, "teamName", void 0);
CricketTeams = tslib_1.__decorate([
    customElement('cricket-teams')
], CricketTeams);
export default CricketTeams;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC10ZWFtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyaWNrZXQtdGVhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNyRCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFVLGNBQWMsQ0FBQyxDQUFDO0FBYXhELElBQXFCLFlBQVksR0FBakMsTUFBcUIsWUFBYSxTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBSXJELEtBQUs7UUFDUCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0NBQ0osQ0FBQTtBQU5HO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzhDQUNSO0FBRkEsWUFBWTtJQURoQyxhQUFhLENBQUMsZUFBZSxDQUFDO0dBQ1YsWUFBWSxDQVFoQztlQVJvQixZQUFZIn0=