import * as tslib_1 from "tslib";
var CricketWicket_1;
const { customElement, property } = Polymer.decorators;
const currentInningsRep = nodecg.Replicant('currentInnings');
const dismissalTypes = {
    Caught: 'c: ',
    'Run out': 'run out: ',
    Bowled: 'b: ',
    LBW: 'lbw: ',
    Retired: 'retired',
    Stumped: 'stumped',
    'Hit wicket': 'hit wicket',
    'Hit ball twice': 'hit ball twice',
    Obstructing: 'obstructing field',
    'Timed out': 'timed out'
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
        return newVal.batsmen.filter(batter => {
            return batter.batting == 'BATTING';
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
        nodecg.sendMessage('newWicket', {
            dismissal: dismissalText,
            batterOut: batterOut,
            batterIndex: batterIndex,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC13aWNrZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmlja2V0LXdpY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUt2RCxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQWlCLGdCQUFnQixDQUFDLENBQUM7QUFFN0UsTUFBTSxjQUFjLEdBQVc7SUFDOUIsTUFBTSxFQUFFLEtBQUs7SUFDYixTQUFTLEVBQUUsV0FBVztJQUN0QixNQUFNLEVBQUUsS0FBSztJQUNiLEdBQUcsRUFBRSxPQUFPO0lBQ1osT0FBTyxFQUFFLFNBQVM7SUFDbEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsWUFBWSxFQUFFLFlBQVk7SUFDMUIsZ0JBQWdCLEVBQUUsZ0JBQWdCO0lBQ2xDLFdBQVcsRUFBRSxtQkFBbUI7SUFDaEMsV0FBVyxFQUFFLFdBQVc7Q0FDeEIsQ0FBQztBQUVGLElBQUksZUFBZSxHQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDNUQsSUFBSSxTQUFpQixDQUFDO0FBQ3RCLElBQUksV0FBbUIsQ0FBQztBQUd4QixJQUFxQixhQUFhLHFCQUFsQyxNQUFxQixhQUFjLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFEMUQ7O1FBU0MsZUFBVSxHQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsMERBQTBEO0lBeUVuRyxDQUFDO0lBdkVBLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFYixJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQWlCLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQztRQUVsRCxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZDLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FB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