import * as tslib_1 from "tslib";
var CricketWicket_1;
const { customElement, property } = Polymer.decorators;
const currentInningsRep = nodecg.Replicant('currentInnings');
const dismissalTypes = {
    "Caught": "c: ",
    "Run out": "run out: ",
    "Bowled": "b: ",
    "LBW": "lbw: ",
    "Retired": "retired",
    "Stumped": "stumped",
    "Hit wicket": "hit wicket",
    "Hit ball twice": "hit ball twice",
    "Obstructing": "obstructing field",
    "Timed out": "timed out"
};
let dismissalTitles = Object.keys(dismissalTypes);
let batterOut;
let batterIndex;
let CricketWicket = CricketWicket_1 = class CricketWicket extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.canDismiss = [false, false]; // [Batter selected, Dismissal selected, fielder selected]
    }
    ready() {
        super.ready();
        this.$.dismissal.items = dismissalTitles;
        currentInningsRep.on('change', newVal => {
            const battersBatting = this._getCurrentBatters(newVal);
            this.batter1 = battersBatting[0];
            this.batter2 = battersBatting[1];
            this.$.fielders.items = newVal.bowlers;
        });
    }
    batter1Selected() {
        batterOut = this.batter1;
        batterIndex = 0;
        this.$.batter2Button.toggleAttribute('disabled');
        this.canDismiss[0] = true;
    }
    batter2Selected() {
        batterOut = this.batter2;
        batterIndex = 1;
        this.$.batter1Button.toggleAttribute('disabled');
        this.canDismiss[0] = true;
    }
    _getCurrentBatters(newVal) {
        return newVal.batters.filter(batter => {
            return batter.batting == "BATTING";
        });
    }
    _checkIfFielderNeeded() {
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
        nodecg.sendMessage('newWicket', [dismissalText, batterOut, batterIndex, fielderItem]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC13aWNrZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmlja2V0LXdpY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUtyRCxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQWlCLGdCQUFnQixDQUFDLENBQUM7QUFFN0UsTUFBTSxjQUFjLEdBQVc7SUFDM0IsUUFBUSxFQUFFLEtBQUs7SUFDZixTQUFTLEVBQUUsV0FBVztJQUN0QixRQUFRLEVBQUUsS0FBSztJQUNmLEtBQUssRUFBRSxPQUFPO0lBQ2QsU0FBUyxFQUFFLFNBQVM7SUFDcEIsU0FBUyxFQUFFLFNBQVM7SUFDcEIsWUFBWSxFQUFFLFlBQVk7SUFDMUIsZ0JBQWdCLEVBQUUsZ0JBQWdCO0lBQ2xDLGFBQWEsRUFBRSxtQkFBbUI7SUFDbEMsV0FBVyxFQUFFLFdBQVc7Q0FDM0IsQ0FBQztBQUVGLElBQUksZUFBZSxHQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDNUQsSUFBSSxTQUFpQixDQUFDO0FBQ3RCLElBQUksV0FBbUIsQ0FBQztBQUd4QixJQUFxQixhQUFhLHFCQUFsQyxNQUFxQixhQUFjLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFEMUQ7O1FBU0ksZUFBVSxHQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsMERBQTBEO0lBb0V0RyxDQUFDO0lBbEVHLEtBQUs7UUFDRCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFYixJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQWlCLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQztRQUVsRCxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3BDLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FB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