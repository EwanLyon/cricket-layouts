import * as tslib_1 from "tslib";
var CricketBatterItem_1;
const { customElement, property } = Polymer.decorators;
let CricketBatterItem = CricketBatterItem_1 = class CricketBatterItem extends Polymer.Element {
    calcRuns() {
        this.totalRuns = this.runs.reduce((a, b) => a + b, 0);
        this.singles = this.runs[0];
        this.fours = this.runs[1];
        this.sixes = this.runs[2];
    }
};
tslib_1.__decorate([
    property({ type: String })
], CricketBatterItem.prototype, "name", void 0);
tslib_1.__decorate([
    property({ type: Number, observer: CricketBatterItem_1.prototype.calcRuns })
], CricketBatterItem.prototype, "runs", void 0);
tslib_1.__decorate([
    property({ type: Number })
], CricketBatterItem.prototype, "wickets", void 0);
tslib_1.__decorate([
    property({ type: Number })
], CricketBatterItem.prototype, "balls", void 0);
tslib_1.__decorate([
    property({ type: String })
], CricketBatterItem.prototype, "dismissal", void 0);
tslib_1.__decorate([
    property({ type: Number })
], CricketBatterItem.prototype, "totalRuns", void 0);
tslib_1.__decorate([
    property({ type: Number })
], CricketBatterItem.prototype, "singles", void 0);
tslib_1.__decorate([
    property({ type: Number })
], CricketBatterItem.prototype, "fours", void 0);
tslib_1.__decorate([
    property({ type: Number })
], CricketBatterItem.prototype, "sixes", void 0);
CricketBatterItem = CricketBatterItem_1 = tslib_1.__decorate([
    customElement('cricket-batter-item')
], CricketBatterItem);
export default CricketBatterItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1iYXR0ZXItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyaWNrZXQtYmF0dGVyLWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFHckQsSUFBcUIsaUJBQWlCLHlCQUF0QyxNQUFxQixpQkFBa0IsU0FBUSxPQUFPLENBQUMsT0FBTztJQTRCN0QsUUFBUTtRQUNQLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FFRCxDQUFBO0FBakNBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOytDQUNaO0FBR2I7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxtQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFDLENBQUM7K0NBQzFEO0FBR2Y7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7a0RBQ1Q7QUFHaEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7Z0RBQ1g7QUFHZDtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztvREFDUDtBQUdsQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztvREFDUDtBQUdsQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztrREFDVDtBQUdoQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztnREFDWDtBQUdkO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO2dEQUNYO0FBMUJNLGlCQUFpQjtJQURyQyxhQUFhLENBQUMscUJBQXFCLENBQUM7R0FDaEIsaUJBQWlCLENBbUNyQztlQW5Db0IsaUJBQWlCIn0=