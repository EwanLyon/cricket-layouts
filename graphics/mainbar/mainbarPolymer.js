import * as tslib_1 from "tslib";
const { customElement, property } = Polymer.decorators;
const currentInningsRep = nodecg.Replicant('currentInnings');
let MainBar = class MainBar extends Polymer.Element {
    ready() {
        super.ready();
        currentInningsRep.on('change', newVal => {
            this.currentInningsProp = newVal;
            this.batterTLA = newVal.TLAs[1];
            this.bowlerTLA = newVal.TLAs[0];
            this.score = this.formatScore(newVal);
            const currentBatters = this.getCurrentBatters(newVal);
            this.batter1 = currentBatters[0];
            this.batter2 = currentBatters[1];
            this.batter1Name = this.formatName(currentBatters[0].name);
            this.batter2Name = this.formatName(currentBatters[1].name);
            const currentBowler = this.getCurrentBowler(newVal);
            this.bowlerScore = currentBowler.wickets.toString() + "-" + currentBowler.runs.toString();
            this.bowlerOver = currentBowler.overs.toFixed(1);
            this.bowlerName = this.formatName(currentBowler.name);
            nodecg.readReplicant('over', overValue => {
                if (overValue == undefined) {
                    this.totalOvers = "0";
                }
                else {
                    this.totalOvers = this.formatOvers(newVal, overValue).toString();
                }
            });
        });
    }
    formatName(batterName) {
        let splitName = batterName.split(" ");
        return splitName[splitName.length - 1].toUpperCase();
    }
    formatOvers(currentInnings, currentOver) {
        let totalOvers = currentInnings.overs.length;
        totalOvers += (currentOver.over.length) / 10;
        return totalOvers;
    }
    formatScore(currentInnings) {
        return currentInnings.wickets + "-" + currentInnings.runs;
    }
    getCurrentBatters(currentInnings) {
        return currentInnings.batsmen.filter(batter => {
            return batter.batting == "BATTING";
        });
    }
    getCurrentBowler(currentInnings) {
        return currentInnings.bowlers[currentInnings.bowlers.findIndex(bowler => {
            return bowler.bowling;
        })];
    }
};
tslib_1.__decorate([
    property({ type: Object })
], MainBar.prototype, "currentInningsProp", void 0);
tslib_1.__decorate([
    property({ type: String })
], MainBar.prototype, "batterTLA", void 0);
tslib_1.__decorate([
    property({ type: String })
], MainBar.prototype, "bowlerTLA", void 0);
tslib_1.__decorate([
    property({ type: String })
], MainBar.prototype, "score", void 0);
tslib_1.__decorate([
    property({ type: Object })
], MainBar.prototype, "batter1", void 0);
tslib_1.__decorate([
    property({ type: Object })
], MainBar.prototype, "batter2", void 0);
tslib_1.__decorate([
    property({ type: String })
], MainBar.prototype, "batter1Name", void 0);
tslib_1.__decorate([
    property({ type: String })
], MainBar.prototype, "batter2Name", void 0);
tslib_1.__decorate([
    property({ type: String })
], MainBar.prototype, "bowlerScore", void 0);
tslib_1.__decorate([
    property({ type: String })
], MainBar.prototype, "bowlerOver", void 0);
tslib_1.__decorate([
    property({ type: String })
], MainBar.prototype, "totalOvers", void 0);
tslib_1.__decorate([
    property({ type: String })
], MainBar.prototype, "bowlerName", void 0);
MainBar = tslib_1.__decorate([
    customElement('main-bar')
], MainBar);
export default MainBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbmJhclBvbHltZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluYmFyUG9seW1lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsTUFBTSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBRXZELE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBaUIsZ0JBQWdCLENBQUMsQ0FBQztBQUc3RSxJQUFxQixPQUFPLEdBQTVCLE1BQXFCLE9BQVEsU0FBUSxPQUFPLENBQUMsT0FBTztJQXFDbkQsS0FBSztRQUNKLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVkLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWhDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV0QyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxD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