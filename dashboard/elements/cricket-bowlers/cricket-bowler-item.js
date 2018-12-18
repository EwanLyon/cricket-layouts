import * as tslib_1 from "tslib";
var CricketBowlerItem_1;
const { customElement, property } = Polymer.decorators;
let CricketBowlerItem = CricketBowlerItem_1 = class CricketBowlerItem extends Polymer.Element {
    seperateBadBalls() {
        this.wides = this.badBalls[0];
        this.noBalls = this.badBalls[1];
        console.log(this.maidenOvers + this.runs + this.badBalls[0] + this.badBalls[1]);
    }
};
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
    property({ type: Number, observer: CricketBowlerItem_1.prototype.seperateBadBalls })
], CricketBowlerItem.prototype, "badBalls", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1ib3dsZXItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyaWNrZXQtYm93bGVyLWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFHckQsSUFBcUIsaUJBQWlCLHlCQUF0QyxNQUFxQixpQkFBa0IsU0FBUSxPQUFPLENBQUMsT0FBTztJQXlCMUQsZ0JBQWdCO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDO0NBQ0osQ0FBQTtBQTdCQTtJQURJLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzsrQ0FDZjtBQUdWO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO3NEQUNMO0FBR3BCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOytDQUNaO0FBR2I7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7a0RBQ1Q7QUFHaEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxtQkFBaUIsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUMsQ0FBQzttREFDOUQ7QUFHbkI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7Z0RBQ1g7QUFHZDtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztnREFDWDtBQUdkO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO2tEQUNUO0FBdkJDLGlCQUFpQjtJQURyQyxhQUFhLENBQUMscUJBQXFCLENBQUM7R0FDaEIsaUJBQWlCLENBK0JyQztlQS9Cb0IsaUJBQWlCIn0=