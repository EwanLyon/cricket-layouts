var CricketWicket_1;
import * as tslib_1 from "tslib";
const { customElement, property } = Polymer.decorators;
import { getCurrentBatsmen } from '../../../shared/scripts/getters';
const currentInningsRep = nodecg.Replicant('currentInnings');
const dismissalTypes = {
    'Caught': 'c: ',
    'Run out': 'run out: ',
    'Bowled': 'b: ',
    'LBW': 'lbw: ',
    'Retired': 'retired',
    'Stumped': 'stumped',
    'Hit wicket': 'hit wicket',
    'Hit ball twice': 'hit ball twice',
    'Obstructing': 'obstructing field',
    'Timed out': 'timed out'
};
let dismissalTitles = Object.keys(dismissalTypes);
let batterOut;
let CricketWicket = CricketWicket_1 = class CricketWicket extends Polymer.MutableData(Polymer.Element) {
    constructor() {
        super(...arguments);
        this.canDismiss = [false, false]; // [Batter selected, Dismissal selected, fielder selected]
    }
    ready() {
        super.ready();
        this.$.dismissal.items = dismissalTitles;
        currentInningsRep.on('change', newVal => {
            const battersBatting = getCurrentBatsmen(newVal, [this.batter1, this.batter2]);
            this.batter1 = battersBatting[0];
            this.batter2 = battersBatting[1];
            this.$.fielders.items = newVal.bowlers;
        });
    }
    batter1Selected() {
        batterOut = this.batter1;
        this.$.batter2Button.toggleAttribute('disabled');
        this.canDismiss[0] = true;
    }
    batter2Selected() {
        batterOut = this.batter2;
        this.$.batter1Button.toggleAttribute('disabled');
        this.canDismiss[0] = true;
    }
    checkIfFielderNeeded() {
        let selectedDismissal = this.$.dismissal.selectedItem;
        this.canDismiss[1] = true;
        if (dismissalTitles.indexOf(selectedDismissal) > 1) {
            // Fielder is needed
            this.$.fielders.toggleAttribute('disabled', true);
        }
        else {
            // Fielder isnt needed
            this.$.fielders.toggleAttribute('disabled', false);
            this.$.fielders.selectedItem = undefined;
        }
    }
    sendWicket() {
        let selectedDismissal = this.$.dismissal.selectedItem;
        let dismissalText = dismissalTypes[selectedDismissal];
        let fielderItem = this.$.fielders.selectedItem;
        nodecg.sendMessage('newWicket', {
            dismissal: dismissalText,
            batterOut: batterOut,
            fielder: fielderItem
        });
        this.$.batter1Button.toggleAttribute('disabled', false);
        this.$.batter2Button.toggleAttribute('disabled', false);
    }
    allowDismissal() {
        if (this.canDismiss[0] == true && this.canDismiss[1] == true) {
            // this.$.dismissButton.toggleAttribute('disabled', true);
        }
    }
};
tslib_1.__decorate([
    property({ type: String })
], CricketWicket.prototype, "batter1", void 0);
tslib_1.__decorate([
    property({ type: String })
], CricketWicket.prototype, "batter2", void 0);
tslib_1.__decorate([
    property({ type: Array, observer: CricketWicket_1.prototype.allowDismissal })
], CricketWicket.prototype, "canDismiss", void 0);
CricketWicket = CricketWicket_1 = tslib_1.__decorate([
    customElement('cricket-wicket')
], CricketWicket);
export default CricketWicket;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC13aWNrZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmlja2V0LXdpY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUV2RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUlsRSxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQWlCLGdCQUFnQixDQUFDLENBQUM7QUFFN0UsTUFBTSxjQUFjLEdBQVc7SUFDOUIsUUFBUSxFQUFFLEtBQUs7SUFDZixTQUFTLEVBQUUsV0FBVztJQUN0QixRQUFRLEVBQUUsS0FBSztJQUNmLEtBQUssRUFBRSxPQUFPO0lBQ2QsU0FBUyxFQUFFLFNBQVM7SUFDcEIsU0FBUyxFQUFFLFNBQVM7SUFDcEIsWUFBWSxFQUFFLFlBQVk7SUFDMUIsZ0JBQWdCLEVBQUUsZ0JBQWdCO0lBQ2xDLGFBQWEsRUFBRSxtQkFBbUI7SUFDbEMsV0FBVyxFQUFFLFdBQVc7Q0FDeEIsQ0FBQztBQUVGLElBQUksZUFBZSxHQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDNUQsSUFBSSxTQUFpQixDQUFDO0FBR3RCLElBQXFCLGFBQWEscUJBQWxDLE1BQXFCLGFBQWMsU0FBUSxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFEL0U7O1FBU0MsZUFBVSxHQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsMERBQTBEO0lBZ0VuRyxDQUFDO0lBOURBLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFYixJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQWlCLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQztRQUVsRCxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FB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