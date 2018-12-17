import * as tslib_1 from "tslib";
const { customElement, property } = Polymer.decorators;
const currentInningsRep = nodecg.Replicant('currentInnings');
let CricketBowlers = class CricketBowlers extends Polymer.Element {
    ready() {
        super.ready();
        currentInningsRep.on('change', newVal => {
            this.currentInnings = newVal;
        });
    }
};
tslib_1.__decorate([
    property({ type: Object })
], CricketBowlers.prototype, "currentInnings", void 0);
CricketBowlers = tslib_1.__decorate([
    customElement('cricket-bowlers')
], CricketBowlers);
export default CricketBowlers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1ib3dsZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JpY2tldC1ib3dsZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBRzdFLElBQXFCLGNBQWMsR0FBbkMsTUFBcUIsY0FBZSxTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBSXZELEtBQUs7UUFDUCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNELENBQUE7QUFUQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztzREFDTTtBQUZYLGNBQWM7SUFEbEMsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0dBQ1osY0FBYyxDQVdsQztlQVhvQixjQUFjIn0=