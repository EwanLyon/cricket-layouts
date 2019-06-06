import * as tslib_1 from "tslib";
const { customElement, property } = Polymer.decorators;
const currentInningsRep = nodecg.Replicant('currentInnings');
let CricketRuns = class CricketRuns extends Polymer.MutableData(Polymer.Element) {
    ready() {
        super.ready();
        currentInningsRep.on('change', newVal => {
            const battersBatting = this.getCurrentBatters(newVal);
            if (battersBatting != []) {
                this.currentInnings = newVal;
                this.batter1 = battersBatting[0];
                this.batter2 = battersBatting[1];
            }
        });
    }
    getCurrentBatters(newVal) {
        return newVal.batsmen.filter(batter => {
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
CricketRuns = tslib_1.__decorate([
    customElement('cricket-runs')
], CricketRuns);
export default CricketRuns;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1ydW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JpY2tldC1ydW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBRzdFLElBQXFCLFdBQVcsR0FBaEMsTUFBcUIsV0FBWSxTQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQVUzRSxLQUFLO1FBQ0wsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsaUJBQWlCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN2QyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEQsSUFBSSxjQUFjLElBQUksRUFBRSxFQUFFO2dCQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztnQkFFN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsaUJBQWlCLENBQUMsTUFBc0I7UUFDdkMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLElBQUksU0FBUyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNELENBQUE7QUEzQkE7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7bURBQ007QUFHL0I7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7NENBQ1Q7QUFHaEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7NENBQ1Q7QUFSSSxXQUFXO0lBRC9CLGFBQWEsQ0FBQyxjQUFjLENBQUM7R0FDVCxXQUFXLENBNkIvQjtlQTdCb0IsV0FBVyJ9