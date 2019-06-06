import * as tslib_1 from "tslib";
var CricketBowler_1;
const { customElement, property } = Polymer.decorators;
const currentInningsRep = nodecg.Replicant('currentInnings');
let CricketBowler = CricketBowler_1 = class CricketBowler extends Polymer.MutableData(Polymer.Element) {
    constructor() {
        super(...arguments);
        this.cbName = "No Bowler";
    }
    ready() {
        super.ready();
        currentInningsRep.on('change', newVal => {
            this.$.typeaheadBowler.items = newVal.bowlers;
            this.curBowler = this.getCurrentBowler();
        });
    }
    getCurrentBowler() {
        if (currentInningsRep.value) {
            return currentInningsRep.value.bowlers[currentInningsRep.value.bowlers.findIndex(bowler => {
                return bowler.bowling;
            })];
        }
        return;
    }
    updateBowler() {
        if (this.$.typeaheadBowler.selectedItem != undefined) {
            nodecg.sendMessage('changeBowler', this.$.typeaheadBowler.selectedItem);
        }
    }
    updateBadBalls() {
        this.cbName = this.curBowler.name;
        this.cbWides = this.curBowler.badBalls[0];
        this.cbNoBalls = this.curBowler.badBalls[1];
        this.cbOvers = this.curBowler.overs.toFixed(1);
    }
};
tslib_1.__decorate([
    property({ type: Object, observer: CricketBowler_1.prototype.updateBadBalls })
], CricketBowler.prototype, "curBowler", void 0);
tslib_1.__decorate([
    property({ type: String })
], CricketBowler.prototype, "cbName", void 0);
tslib_1.__decorate([
    property({ type: Number })
], CricketBowler.prototype, "cbWides", void 0);
tslib_1.__decorate([
    property({ type: Number })
], CricketBowler.prototype, "cbNoBalls", void 0);
tslib_1.__decorate([
    property({ type: String })
], CricketBowler.prototype, "cbOvers", void 0);
CricketBowler = CricketBowler_1 = tslib_1.__decorate([
    customElement('cricket-bowler')
], CricketBowler);
export default CricketBowler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1ib3dsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmlja2V0LWJvd2xlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNyRCxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQWlCLGdCQUFnQixDQUFDLENBQUM7QUFHN0UsSUFBcUIsYUFBYSxxQkFBbEMsTUFBcUIsYUFBYyxTQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUQvRTs7UUFNQyxXQUFNLEdBQVcsV0FBVyxDQUFDO0lBMEM5QixDQUFDO0lBL0JDLEtBQUs7UUFDTCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBdUIsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUV2RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGdCQUFnQjtRQUNmLElBQUksaUJBQWlCLENBQUMsS0FBSyxFQUFFO1lBQzVCLE9BQU8saUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDekYsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU87SUFDUixDQUFDO0lBRUQsWUFBWTtRQUNYLElBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUF1QixDQUFDLFlBQVksSUFBSSxTQUFTLEVBQUU7WUFDOUQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUF1QixDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2pGO0lBQ0YsQ0FBQztJQUVELGNBQWM7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0QsQ0FBQTtBQTdDQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGVBQWEsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFDLENBQUM7Z0RBQ3pEO0FBR2xCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzZDQUNJO0FBRzdCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzhDQUNUO0FBR2hCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO2dEQUNQO0FBR2xCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzhDQUNUO0FBZEksYUFBYTtJQURqQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7R0FDWCxhQUFhLENBK0NqQztlQS9Db0IsYUFBYSJ9