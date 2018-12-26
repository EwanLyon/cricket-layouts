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
            this.curBowler = newVal.currentBowler;
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1ib3dsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmlja2V0LWJvd2xlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNyRCxxREFBcUQ7QUFDckQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBRzdFLElBQXFCLGFBQWEscUJBQWxDLE1BQXFCLGFBQWMsU0FBUSxPQUFPLENBQUMsT0FBTztJQUQxRDs7UUFNQyxXQUFNLEdBQVcsV0FBVyxDQUFDO0lBMEI5QixDQUFDO0lBbEJHLEtBQUs7UUFDUCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBdUIsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsWUFBWTtRQUNYLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBdUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQsZUFBZTtRQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDRCxDQUFBO0FBN0JBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsZUFBYSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUMsQ0FBQztnREFDMUQ7QUFHbEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7NkNBQ0k7QUFHN0I7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7OENBQ1Q7QUFHaEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7Z0RBQ1A7QUFYRSxhQUFhO0lBRGpDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztHQUNYLGFBQWEsQ0ErQmpDO2VBL0JvQixhQUFhIn0=