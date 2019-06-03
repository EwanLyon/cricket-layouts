import * as tslib_1 from "tslib";
const { customElement, property } = Polymer.decorators;
const currentInningsRep = nodecg.Replicant('currentInnings');
let CricketRuns = class CricketRuns extends Polymer.Element {
    ready() {
        super.ready();
        currentInningsRep.on('change', newVal => {
            const battersBatting = this.getCurrentBatters(newVal);
            if (battersBatting != []) {
                this.currentInnings = newVal;
                this.batter1 = battersBatting[0];
                this.batter2 = battersBatting[1];
                this.b1Singles = this.batter1.runs[0];
                this.b1Fours = this.batter1.runs[1];
                this.b1Sixes = this.batter1.runs[2];
                this.b2Singles = this.batter2.runs[0];
                this.b2Fours = this.batter2.runs[1];
                this.b2Sixes = this.batter2.runs[2];
            }
        });
    }
    getCurrentBatters(newVal) {
        return newVal.batters.filter(batter => {
            return batter.batting == "BATTING";
        });
    }
};
tslib_1.__decorate([
    property({ type: Object })
], CricketRuns.prototype, "currentInnings", void 0);
tslib_1.__decorate([
    property({ type: Object })
], CricketRuns.prototype, "batter1", void 0);
tslib_1.__decorate([
    property({ type: Object })
], CricketRuns.prototype, "batter2", void 0);
tslib_1.__decorate([
    property({ type: Number })
], CricketRuns.prototype, "b1Singles", void 0);
tslib_1.__decorate([
    property({ type: Number })
], CricketRuns.prototype, "b1Fours", void 0);
tslib_1.__decorate([
    property({ type: Number })
], CricketRuns.prototype, "b1Sixes", void 0);
tslib_1.__decorate([
    property({ type: Number })
], CricketRuns.prototype, "b2Singles", void 0);
tslib_1.__decorate([
    property({ type: Number })
], CricketRuns.prototype, "b2Fours", void 0);
tslib_1.__decorate([
    property({ type: Number })
], CricketRuns.prototype, "b2Sixes", void 0);
CricketRuns = tslib_1.__decorate([
    customElement('cricket-runs')
], CricketRuns);
export default CricketRuns;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1ydW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JpY2tldC1ydW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBRzdFLElBQXFCLFdBQVcsR0FBaEMsTUFBcUIsV0FBWSxTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBNEJ0RCxLQUFLO1FBQ0wsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsaUJBQWlCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN2QyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEQsSUFBSSxjQUFjLElBQUksRUFBRSxFQUFFO2dCQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztnQkFFN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVqQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVwQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsaUJBQWlCLENBQUMsTUFBc0I7UUFDdkMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLElBQUksU0FBUyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNELENBQUE7QUFyREE7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7bURBQ007QUFHL0I7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7NENBQ1Q7QUFHaEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7NENBQ1Q7QUFHaEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLENBQUM7OENBQ047QUFHbEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLENBQUM7NENBQ1I7QUFHaEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLENBQUM7NENBQ1I7QUFHaEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLENBQUM7OENBQ047QUFHbEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLENBQUM7NENBQ1I7QUFHaEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLENBQUM7NENBQ1I7QUExQkksV0FBVztJQUQvQixhQUFhLENBQUMsY0FBYyxDQUFDO0dBQ1QsV0FBVyxDQXVEL0I7ZUF2RG9CLFdBQVcifQ==