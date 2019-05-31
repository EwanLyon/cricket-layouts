import * as tslib_1 from "tslib";
const { customElement, property } = Polymer.decorators;
const currentInningsRep = nodecg.Replicant('currentInnings');
let CricketRuns = class CricketRuns extends Polymer.Element {
    ready() {
        super.ready();
        currentInningsRep.on('change', newVal => {
            console.log('Runs');
            const battersBatting = this._getCurrentBatters(newVal);
            if (battersBatting[0].name == "MISSING BATTERS NAME") {
                return;
            }
            this.currentInnings = newVal;
            this.batter1 = battersBatting[0];
            this.batter2 = battersBatting[1];
            this.b1Singles = this.batter1.runs[0];
            this.b1Fours = this.batter1.runs[1];
            this.b1Sixes = this.batter1.runs[2];
            this.b2Singles = this.batter2.runs[0];
            this.b2Fours = this.batter2.runs[1];
            this.b2Sixes = this.batter2.runs[2];
        });
    }
    _getCurrentBatters(newVal) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1ydW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JpY2tldC1ydW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBRzdFLElBQXFCLFdBQVcsR0FBaEMsTUFBcUIsV0FBWSxTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBNEJwRCxLQUFLO1FBQ1AsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsaUJBQWlCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2RCxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksc0JBQXNCLEVBQUU7Z0JBQ3JELE9BQU87YUFDUDtZQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1lBRTdCLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWpDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXBDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGtCQUFrQixDQUFDLE1BQXNCO1FBQ3hDLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckMsT0FBTyxNQUFNLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FFRCxDQUFBO0FBeERBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO21EQUNNO0FBRy9CO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzRDQUNUO0FBR2hCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzRDQUNUO0FBR2hCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxDQUFDOzhDQUNOO0FBR2xCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxDQUFDOzRDQUNSO0FBR2hCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxDQUFDOzRDQUNSO0FBR2hCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxDQUFDOzhDQUNOO0FBR2xCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxDQUFDOzRDQUNSO0FBR2hCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxDQUFDOzRDQUNSO0FBMUJJLFdBQVc7SUFEL0IsYUFBYSxDQUFDLGNBQWMsQ0FBQztHQUNULFdBQVcsQ0EwRC9CO2VBMURvQixXQUFXIn0=