import * as tslib_1 from "tslib";
const { customElement, property } = Polymer.decorators;
const currentInningsRep = nodecg.Replicant('currentInnings');
let CricketBatters = class CricketBatters extends Polymer.MutableData(Polymer.Element) {
    ready() {
        super.ready();
        currentInningsRep.on('change', newVal => {
            console.log("newVal array length: " + newVal.batters.length);
            nodecg.readReplicant('currentInnings', 'cricket-layouts', (value) => {
                console.log("readReplicant (correct) array length: " + value.batters.length);
            });
            this.currentBatters = newVal.batters;
            this.notifyPath('currentBatters');
        });
    }
};
tslib_1.__decorate([
    property({ type: Object })
], CricketBatters.prototype, "currentBatters", void 0);
CricketBatters = tslib_1.__decorate([
    customElement('cricket-batters')
], CricketBatters);
export default CricketBatters;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1iYXR0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JpY2tldC1iYXR0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFHckQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBSzdFLElBQXFCLGNBQWMsR0FBbkMsTUFBcUIsY0FBZSxTQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUk1RSxLQUFLO1FBQ1AsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsaUJBQWlCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFO2dCQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUUsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNELENBQUE7QUFkQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztzREFDQTtBQUZMLGNBQWM7SUFEbEMsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0dBQ1osY0FBYyxDQWdCbEM7ZUFoQm9CLGNBQWMifQ==