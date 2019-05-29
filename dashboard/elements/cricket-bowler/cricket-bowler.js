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
            this.$.typeaheadBowler.items = newVal.bowlers;
            this.curBowler = this._getCurrentBowler();
        });
    }
    _getCurrentBowler() {
        if (currentInningsRep.value) {
            return currentInningsRep.value.bowlers[currentInningsRep.value.bowlers.findIndex(bowler => {
                return bowler.bowling;
            })];
        }
        return;
    }
    UpdateBowler() {
        nodecg.sendMessage('changeBowler', this.$.typeaheadBowler.selectedItem);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1ib3dsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmlja2V0LWJvd2xlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNyRCxxREFBcUQ7QUFDckQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBRzdFLElBQXFCLGFBQWEscUJBQWxDLE1BQXFCLGFBQWMsU0FBUSxPQUFPLENBQUMsT0FBTztJQUQxRDs7UUFNQyxXQUFNLEdBQVcsV0FBVyxDQUFDO0lBb0M5QixDQUFDO0lBNUJHLEtBQUs7UUFDUCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBdUIsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUV2RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGlCQUFpQjtRQUNoQixJQUFJLGlCQUFpQixDQUFDLEtBQUssRUFBRTtZQUM1QixPQUFPLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3hGLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPO0lBQ1IsQ0FBQztJQUVELFlBQVk7UUFDWCxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQXVCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELGVBQWU7UUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0QsQ0FBQTtBQXZDQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGVBQWEsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFDLENBQUM7Z0RBQzFEO0FBR2xCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzZDQUNJO0FBRzdCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzhDQUNUO0FBR2hCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO2dEQUNQO0FBWEUsYUFBYTtJQURqQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7R0FDWCxhQUFhLENBeUNqQztlQXpDb0IsYUFBYSJ9