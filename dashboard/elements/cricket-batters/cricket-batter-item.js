import * as tslib_1 from "tslib";
var CricketBatterItem_1;
const { customElement, property } = Polymer.decorators;
let CricketBatterItem = CricketBatterItem_1 = class CricketBatterItem extends Polymer.Element {
    _updateBatter(newVal) {
        this.name = newVal.name;
        this.dismissal = newVal.dismissal;
        // Calc Runs
        if (newVal.batting || newVal.dismissal != "") {
            // Unfortunately since I need to show batters who haven't batted yet as "-" so the variables need to be strings
            this.balls = String(newVal.balls);
            this.totalRuns = String(newVal.runs);
            this.fours = String(newVal.fours);
            this.sixes = String(newVal.sixes);
        }
        else {
            this.totalRuns = '-';
            this.balls = '-';
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
], CricketBatterItem.prototype, "fours", void 0);
tslib_1.__decorate([
    property({ type: String })
], CricketBatterItem.prototype, "sixes", void 0);
CricketBatterItem = CricketBatterItem_1 = tslib_1.__decorate([
    customElement('cricket-batter-item')
], CricketBatterItem);
export default CricketBatterItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1iYXR0ZXItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyaWNrZXQtYmF0dGVyLWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFLckQsSUFBcUIsaUJBQWlCLHlCQUF0QyxNQUFxQixpQkFBa0IsU0FBUSxPQUFPLENBQUMsT0FBTztJQXNCN0QsYUFBYSxDQUFDLE1BQWM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUVsQyxZQUFZO1FBQ1osSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxTQUFTLElBQUksRUFBRSxFQUFFO1lBQzdDLCtHQUErRztZQUMvRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ2pCO0lBRUYsQ0FBQztDQUVELENBQUE7QUF6Q0E7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxtQkFBaUIsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFDLENBQUM7aURBQy9EO0FBR2Y7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7K0NBQ1o7QUFHYjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztnREFDWDtBQUdkO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO29EQUNQO0FBR2xCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO29EQUNQO0FBR2xCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO2dEQUNYO0FBR2Q7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7Z0RBQ1g7QUFwQk0saUJBQWlCO0lBRHJDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztHQUNoQixpQkFBaUIsQ0EyQ3JDO2VBM0NvQixpQkFBaUIifQ==