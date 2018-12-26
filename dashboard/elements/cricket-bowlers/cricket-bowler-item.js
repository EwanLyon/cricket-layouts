import * as tslib_1 from "tslib";
var CricketBowlerItem_1;
const { customElement, property } = Polymer.decorators;
let CricketBowlerItem = CricketBowlerItem_1 = class CricketBowlerItem extends Polymer.Element {
    _updateBowler(newVal) {
        if (this.currentBowler) {
            this.name = newVal.name + '*';
        }
        else {
            this.name = newVal.name;
        }
        this.overs = newVal.overs;
        this.maidenOvers = newVal.maidenOvers;
        this.runs = newVal.runs;
        this.wickets = newVal.wickets;
        this.wides = newVal.badBalls[0];
        this.noBalls = newVal.badBalls[1];
    }
};
tslib_1.__decorate([
    property({ type: Object, observer: CricketBowlerItem_1.prototype._updateBowler })
], CricketBowlerItem.prototype, "bowler", void 0);
tslib_1.__decorate([
    property({ type: Boolean, notify: true })
], CricketBowlerItem.prototype, "currentBowler", void 0);
tslib_1.__decorate([
    property({ type: String })
], CricketBowlerItem.prototype, "name", void 0);
tslib_1.__decorate([
    property({ type: Number })
], CricketBowlerItem.prototype, "maidenOvers", void 0);
tslib_1.__decorate([
    property({ type: Number })
], CricketBowlerItem.prototype, "runs", void 0);
tslib_1.__decorate([
    property({ type: Number })
], CricketBowlerItem.prototype, "wickets", void 0);
tslib_1.__decorate([
    property({ type: Number })
], CricketBowlerItem.prototype, "overs", void 0);
tslib_1.__decorate([
    property({ type: Number })
], CricketBowlerItem.prototype, "wides", void 0);
tslib_1.__decorate([
    property({ type: Number })
], CricketBowlerItem.prototype, "noBalls", void 0);
CricketBowlerItem = CricketBowlerItem_1 = tslib_1.__decorate([
    customElement('cricket-bowler-item')
], CricketBowlerItem);
export default CricketBowlerItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1ib3dsZXItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyaWNrZXQtYm93bGVyLWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFLckQsSUFBcUIsaUJBQWlCLHlCQUF0QyxNQUFxQixpQkFBa0IsU0FBUSxPQUFPLENBQUMsT0FBTztJQTRCMUQsYUFBYSxDQUFDLE1BQWM7UUFDeEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7U0FDakM7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztTQUMzQjtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUU5QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDSixDQUFBO0FBekNHO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsbUJBQWlCLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBQyxDQUFDO2lEQUMvRDtBQUdmO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7d0RBQ2pCO0FBRzFCO0lBREksUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOytDQUNmO0FBR1Y7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7c0RBQ0w7QUFHcEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7K0NBQ1o7QUFHYjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztrREFDVDtBQUdoQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztnREFDWDtBQUdkO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO2dEQUNYO0FBR2Q7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7a0RBQ1Q7QUExQkMsaUJBQWlCO0lBRHJDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztHQUNoQixpQkFBaUIsQ0EyQ3JDO2VBM0NvQixpQkFBaUIifQ==