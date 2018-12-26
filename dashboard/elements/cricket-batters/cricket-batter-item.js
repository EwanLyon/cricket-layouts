import * as tslib_1 from "tslib";
var CricketBatterItem_1;
const { customElement, property } = Polymer.decorators;
let CricketBatterItem = CricketBatterItem_1 = class CricketBatterItem extends Polymer.Element {
    _updateBatter(newVal) {
        this.name = newVal.name;
        this.dismissal = newVal.dismissal;
        // Calc Runs
        if (newVal.batting) {
            this.balls = String(newVal.balls);
            this.totalRuns = String(newVal.runs.reduce((a, b) => a + b, 0));
            this.singles = String(newVal.runs[0]);
            this.fours = String(newVal.runs[1]);
            this.sixes = String(newVal.runs[2]);
        }
        else {
            this.totalRuns = '-';
            this.balls = '-';
            this.singles = '-';
            this.fours = '-';
            this.sixes = '-';
        }
    }
};
tslib_1.__decorate([
    property({ type: Object, observer: CricketBatterItem_1.prototype._updateBatter })
], CricketBatterItem.prototype, "batter", void 0);
tslib_1.__decorate([
    property({ type: String })
], CricketBatterItem.prototype, "name", void 0);
tslib_1.__decorate([
    property({ type: String })
], CricketBatterItem.prototype, "balls", void 0);
tslib_1.__decorate([
    property({ type: String })
], CricketBatterItem.prototype, "dismissal", void 0);
tslib_1.__decorate([
    property({ type: String })
], CricketBatterItem.prototype, "totalRuns", void 0);
tslib_1.__decorate([
    property({ type: String })
], CricketBatterItem.prototype, "singles", void 0);
tslib_1.__decorate([
    property({ type: String })
], CricketBatterItem.prototype, "fours", void 0);
tslib_1.__decorate([
    property({ type: String })
], CricketBatterItem.prototype, "sixes", void 0);
CricketBatterItem = CricketBatterItem_1 = tslib_1.__decorate([
    customElement('cricket-batter-item')
], CricketBatterItem);
export default CricketBatterItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1iYXR0ZXItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyaWNrZXQtYmF0dGVyLWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFLckQsSUFBcUIsaUJBQWlCLHlCQUF0QyxNQUFxQixpQkFBa0IsU0FBUSxPQUFPLENBQUMsT0FBTztJQXlCN0QsYUFBYSxDQUFDLE1BQWM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUVsQyxZQUFZO1FBQ1osSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVsQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7U0FDakI7SUFFRixDQUFDO0NBRUQsQ0FBQTtBQTdDQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLG1CQUFpQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUMsQ0FBQztpREFDL0Q7QUFHZjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzsrQ0FDWjtBQUdiO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO2dEQUNYO0FBR2Q7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7b0RBQ1A7QUFHbEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7b0RBQ1A7QUFHbEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7a0RBQ1Q7QUFHaEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7Z0RBQ1g7QUFHZDtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztnREFDWDtBQXZCTSxpQkFBaUI7SUFEckMsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0dBQ2hCLGlCQUFpQixDQStDckM7ZUEvQ29CLGlCQUFpQiJ9