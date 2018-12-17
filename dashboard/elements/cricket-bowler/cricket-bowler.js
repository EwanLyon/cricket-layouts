import * as tslib_1 from "tslib";
var CricketBowler_1;
const { customElement, property } = Polymer.decorators;
// const teamsRep = nodecg.Replicant<Teams>('teams');
const currentInningsRep = nodecg.Replicant('currentInnings');
let CricketBowler = CricketBowler_1 = class CricketBowler extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.cbName = "No Bowler";
    }
    ready() {
        super.ready();
        currentInningsRep.on('change', newVal => {
            console.log(newVal);
            this.$.typeaheadBowler.items = newVal.bowlers;
        });
    }
    UpdateBowler() {
        nodecg.sendMessage('changeBowler', this.$.typeaheadBowler.selectedItem);
        this.curBowler = this.$.typeaheadBowler.selectedItem;
    }
    _updateBadBalls() {
        this.cbName = this.curBowler.name;
        this.cbWides = this.curBowler.badBalls[0];
        this.cbNoBalls = this.curBowler.badBalls[1];
    }
};
tslib_1.__decorate([
    property({ type: Object, observer: CricketBowler_1.prototype._updateBadBalls })
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
CricketBowler = CricketBowler_1 = tslib_1.__decorate([
    customElement('cricket-bowler')
], CricketBowler);
export default CricketBowler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1ib3dsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmlja2V0LWJvd2xlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNyRCxxREFBcUQ7QUFDckQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBRzdFLElBQXFCLGFBQWEscUJBQWxDLE1BQXFCLGFBQWMsU0FBUSxPQUFPLENBQUMsT0FBTztJQUQxRDs7UUFNQyxXQUFNLEdBQVcsV0FBVyxDQUFDO0lBMkI5QixDQUFDO0lBbkJJLEtBQUs7UUFDUixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUF1QixDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFlBQVk7UUFDWCxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQXVCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLFNBQVMsR0FBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQXVCLENBQUMsWUFBWSxDQUFDO0lBQy9ELENBQUM7SUFFRCxlQUFlO1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNELENBQUE7QUE5QkE7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxlQUFhLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBQyxDQUFDO2dEQUMxRDtBQUdsQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzs2Q0FDSTtBQUc3QjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzs4Q0FDVDtBQUdoQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztnREFDUDtBQVhFLGFBQWE7SUFEakMsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0dBQ1gsYUFBYSxDQWdDakM7ZUFoQ29CLGFBQWEifQ==