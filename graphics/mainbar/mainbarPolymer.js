import * as tslib_1 from "tslib";
import anime from 'animejs';
const { customElement, property } = Polymer.decorators;
const currentInningsRep = nodecg.Replicant('currentInnings');
let currentBatsmen;
let MainBar = class MainBar extends Polymer.MutableData(Polymer.Element) {
    ready() {
        super.ready();
        currentInningsRep.on('change', newVal => {
            this.currentInningsProp = newVal;
            this.batterTLA = newVal.TLAs[1];
            this.bowlerTLA = newVal.TLAs[0];
            this.score = this.formatScore(newVal);
            currentBatsmen = this.getCurrentBatsmen(newVal);
            this.batter1 = currentBatsmen[0];
            this.batter2 = currentBatsmen[1];
            this.batter1Name = this.formatName(currentBatsmen[0].name);
            this.batter2Name = this.formatName(currentBatsmen[1].name);
            const currentBowler = this.getCurrentBowler(newVal);
            this.bowlerScore = currentBowler.wickets.toString() + "-" + currentBowler.runs.toString();
            this.bowlerOver = currentBowler.overs;
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
        nodecg.listenFor('showFullFrame', () => {
            console.log('Showing');
            anime({
                targets: this.$.parent,
                translateY: 200,
                duration: 1000,
                easing: 'easeInElastic(1, 1)'
            });
        });
        nodecg.listenFor('hideFullFrame', () => {
            console.log('Hiding');
            anime({
                targets: this.$.parent,
                translateY: 0,
                duration: 1500,
                delay: 1000
            });
        });
    }
    formatName(batterName) {
        let splitName = batterName.split(" ");
        return splitName[splitName.length - 1].toUpperCase();
    }
    formatOvers(currentInnings, currentOver) {
        let totalOvers = currentInnings.overs.length;
        let ballsInOver = currentOver.ballsLeft;
        if (ballsInOver == 0) {
            ballsInOver = 10;
        }
        totalOvers += ballsInOver / 10;
        return totalOvers;
    }
    formatScore(currentInnings) {
        return currentInnings.wickets + "-" + currentInnings.runs;
    }
    getCurrentBatsmen(currentInnings) {
        let batsmenArray = currentInnings.batsmen.filter(batter => {
            return batter.batting == "BATTING";
        });
        if (currentBatsmen == undefined) {
            return batsmenArray;
        }
        // Don't switch the batsmen places when one goes out
        if (currentBatsmen[1].name == batsmenArray[0].name) {
            let tempBatter = batsmenArray[0];
            batsmenArray[0] = batsmenArray[1];
            batsmenArray[1] = tempBatter;
        }
        return batsmenArray;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbmJhclBvbHltZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluYmFyUG9seW1lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsT0FBTyxLQUFLLE1BQU0sU0FBUyxDQUFDO0FBRTVCLE1BQU0sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUV2RCxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQWlCLGdCQUFnQixDQUFDLENBQUM7QUFFN0UsSUFBSSxjQUF3QixDQUFDO0FBRzdCLElBQXFCLE9BQU8sR0FBNUIsTUFBcUIsT0FBUSxTQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQXFDeEUsS0FBSztRQUNKLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVkLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWhDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV0QyxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFD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