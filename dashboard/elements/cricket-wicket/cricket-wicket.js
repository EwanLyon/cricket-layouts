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
let CricketWicket = class CricketWicket extends Polymer.MutableData(Polymer.Element) {
    constructor() {
        super(...arguments);
        this.batterSelected = false;
        this.dismissalSelected = false;
        this.fielderSelected = false;
    }
    ready() {
        super.ready();
        this.$.dismissal.items = dismissalTitles;
        this.$.fielders.toggleAttribute('disabled', true);
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
        this.batterSelected = true;
    }
    batter2Selected() {
        batterOut = this.batter2;
        this.$.batter1Button.toggleAttribute('disabled');
        this.batterSelected = true;
    }
    checkIfFielderNeeded(newVal) {
        let selectedDismissal = newVal.detail.value;
        this.dismissalSelected = true;
        let dismissalIndex = dismissalTitles.indexOf(selectedDismissal);
        if (dismissalIndex <= 1 && dismissalIndex != -1) {
            this.fielderSelected = false;
            // Fielder is needed
            this.$.fielders.toggleAttribute('disabled', false);
        }
        else {
            // Fielder isnt needed
            this.fielderSelected = true;
            this.$.fielders.toggleAttribute('disabled', true);
        }
        this.$.fielders.selectedItem = undefined;
    }
    setFielder(newVal) {
        if (newVal.detail.value != undefined) {
            this.fielderSelected = true;
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
        this.$.fielders.toggleAttribute('disabled', false);
        this.$.dismissButton.toggleAttribute('disabled', false);
        this.batterSelected = false;
        this.dismissalSelected = false;
        this.fielderSelected = false;
    }
    allowDismissal() {
        // const ableToDismiss = [
        // 	this.batterSelected = false,
        // 	this.dismissalSelected = false,
        // 	this.fielderSelected = false
        // ].every(value => { return value == true })
        // console.log('Dismissal checked', [
        // 	this.batterSelected = false,
        // 	this.dismissalSelected = false,
        // 	this.fielderSelected = false
        // ]);
        // if (ableToDismiss) {
        // 	this.$.dismissButton.toggleAttribute('disabled', false);
        // }
    }
};
tslib_1.__decorate([
    property({ type: Object })
], CricketWicket.prototype, "batter1", void 0);
tslib_1.__decorate([
    property({ type: Object })
], CricketWicket.prototype, "batter2", void 0);
tslib_1.__decorate([
    property({ type: Boolean, observer: 'allowDismissal' })
], CricketWicket.prototype, "batterSelected", void 0);
tslib_1.__decorate([
    property({ type: Boolean, observer: 'allowDismissal' })
], CricketWicket.prototype, "dismissalSelected", void 0);
tslib_1.__decorate([
    property({ type: Boolean, observer: 'allowDismissal' })
], CricketWicket.prototype, "fielderSelected", void 0);
CricketWicket = tslib_1.__decorate([
    customElement('cricket-wicket')
], CricketWicket);
export default CricketWicket;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC13aWNrZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmlja2V0LXdpY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBRXZELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBSWxFLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBaUIsZ0JBQWdCLENBQUMsQ0FBQztBQUU3RSxNQUFNLGNBQWMsR0FBVztJQUM5QixRQUFRLEVBQUUsS0FBSztJQUNmLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsS0FBSyxFQUFFLE9BQU87SUFDZCxTQUFTLEVBQUUsU0FBUztJQUNwQixTQUFTLEVBQUUsU0FBUztJQUNwQixZQUFZLEVBQUUsWUFBWTtJQUMxQixnQkFBZ0IsRUFBRSxnQkFBZ0I7SUFDbEMsYUFBYSxFQUFFLG1CQUFtQjtJQUNsQyxXQUFXLEVBQUUsV0FBVztDQUN4QixDQUFDO0FBRUYsSUFBSSxlQUFlLEdBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUM1RCxJQUFJLFNBQWlCLENBQUM7QUFHdEIsSUFBcUIsYUFBYSxHQUFsQyxNQUFxQixhQUFjLFNBQVEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBRC9FOztRQVNDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBR2hDLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUduQyxvQkFBZSxHQUFZLEtBQUssQ0FBQztJQXlGbEMsQ0FBQztJQXZGQSxLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWIsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFpQixDQUFDLEtBQUssR0FBRyxlQUFlLENBQUM7UUFDbEQsSUFBSSxDQUFDLENBQUMsQ0FB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