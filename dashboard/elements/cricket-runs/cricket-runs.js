import * as tslib_1 from "tslib";
const { customElement, property } = Polymer.decorators;
const currentInningsRep = nodecg.Replicant('currentInnings');
let CricketRuns = class CricketRuns extends Polymer.Element {
    ready() {
        super.ready();
        currentInningsRep.on('change', newVal => {
            const battersBatting = this._getCurrentBatters(newVal);
            if (battersBatting[0].name == "MISSING BATTERS NAME") {
                return;
            }
            this.currentInnings = newVal;
            this.batter1 = battersBatting[0];
            this.batter2 = battersBatting[1];
            if (this.batter1.facing) {
                this.batter1.name += '*';
            }
            else {
                this.batter2.name += '*';
            }
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
            batter.batting == "BATTING";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1ydW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JpY2tldC1ydW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBRzdFLElBQXFCLFdBQVcsR0FBaEMsTUFBcUIsV0FBWSxTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBNEJwRCxLQUFLO1FBQ1AsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsaUJBQWlCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN2QyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkQsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLHNCQUFzQixFQUFFO2dCQUNyRCxPQUFPO2FBQ1A7WUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztZQUU3QixJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVqQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUM7YUFDekI7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDO2FBQ3pCO1lBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsa0JBQWtCLENBQUMsTUFBc0I7UUFDeEMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQyxNQUFNLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRCxDQUFBO0FBNURBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO21EQUNNO0FBRy9CO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzRDQUNUO0FBR2hCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzRDQUNUO0FBR2hCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxDQUFDOzhDQUNOO0FBR2xCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxDQUFDOzRDQUNSO0FBR2hCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxDQUFDOzRDQUNSO0FBR2hCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxDQUFDOzhDQUNOO0FBR2xCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxDQUFDOzRDQUNSO0FBR2hCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxDQUFDOzRDQUNSO0FBMUJJLFdBQVc7SUFEL0IsYUFBYSxDQUFDLGNBQWMsQ0FBQztHQUNULFdBQVcsQ0E4RC9CO2VBOURvQixXQUFXIn0=