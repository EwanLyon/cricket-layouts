import * as tslib_1 from "tslib";
import * as cricketFormat from '../../shared/scripts/formatters';
import * as cricketGet from '../../shared/scripts/getters';
import { TweenLite, Elastic } from 'gsap';
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
            this.score = cricketFormat.formatScore(newVal);
            currentBatsmen = cricketGet.getCurrentBatsmen(newVal, currentBatsmen);
            this.batter1 = currentBatsmen[0];
            this.batter2 = currentBatsmen[1];
            this.batter1Name = cricketFormat.formatName(currentBatsmen[0].name);
            this.batter2Name = cricketFormat.formatName(currentBatsmen[1].name);
            const currentBowler = cricketGet.getCurrentBowler(newVal);
            this.bowlerScore = currentBowler.wickets.toString() + "-" + currentBowler.runs.toString();
            this.bowlerOver = currentBowler.overs;
            this.bowlerName = cricketFormat.formatName(currentBowler.name);
            nodecg.readReplicant('over', overValue => {
                if (overValue == undefined) {
                    this.totalOvers = "0";
                }
                else {
                    this.totalOvers = cricketFormat.formatOvers(newVal, overValue);
                }
            });
        });
        nodecg.listenFor('showScorebug', () => {
            this.showScorebug();
        });
        nodecg.listenFor('hideScorebug', () => {
            this.hideScoreBug();
        });
    }
    showScorebug() {
        console.log('Showing Score bug');
        TweenLite.to(this.$.parent, 1.5, { y: 0, ease: Elastic.easeOut.config(1, 0.5) });
    }
    hideScoreBug() {
        console.log('Hiding Score bug');
        TweenLite.to(this.$.parent, 1, { y: 200, ease: Elastic.easeIn.config(1, 1) });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbmJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW5iYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sS0FBSyxhQUFhLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxLQUFLLFVBQVUsTUFBTSw4QkFBOEIsQ0FBQztBQUkzRCxPQUFPLEVBQUMsU0FBUyxFQUFFLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV4QyxNQUFNLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFFdkQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBRTdFLElBQUksY0FBd0IsQ0FBQztBQUc3QixJQUFxQixPQUFPLEdBQTVCLE1BQXFCLE9BQVEsU0FBUSxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFxQ3hFLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVoQyxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFL0MsY0FBYyxHQUFHLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FB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