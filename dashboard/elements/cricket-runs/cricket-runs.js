import * as tslib_1 from "tslib";
const { customElement, property } = Polymer.decorators;
const currentInningsRep = nodecg.Replicant('currentInnings');
let CricketRuns = class CricketRuns extends Polymer.Element {
    ready() {
        super.ready();
        currentInningsRep.on('change', newVal => {
            this.currentInnings = newVal;
        });
    }
};
tslib_1.__decorate([
    property({ type: Object })
], CricketRuns.prototype, "currentInnings", void 0);
CricketRuns = tslib_1.__decorate([
    customElement('cricket-runs')
], CricketRuns);
export default CricketRuns;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1ydW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JpY2tldC1ydW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBRzdFLElBQXFCLFdBQVcsR0FBaEMsTUFBcUIsV0FBWSxTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBSXBELEtBQUs7UUFDUCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNELENBQUE7QUFUQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzttREFDTTtBQUZYLFdBQVc7SUFEL0IsYUFBYSxDQUFDLGNBQWMsQ0FBQztHQUNULFdBQVcsQ0FXL0I7ZUFYb0IsV0FBVyJ9