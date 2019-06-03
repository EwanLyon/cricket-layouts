import * as tslib_1 from "tslib";
const { customElement } = Polymer.decorators;
let DebugPanel = class DebugPanel extends Polymer.Element {
    ready() {
        super.ready();
    }
    debugTeams() {
        nodecg.sendMessage('debugTeams');
    }
    debugBatters() {
        nodecg.sendMessage('debugBatters');
    }
    debugBowlers() {
        nodecg.sendMessage('debugBowlers');
    }
    debugCurrentInnings() {
        nodecg.sendMessage('debugCurrentInnings');
    }
    debugMatchData() {
        nodecg.sendMessage('debugMatchData');
    }
    debugOver() {
        nodecg.sendMessage('debugOver');
    }
};
DebugPanel = tslib_1.__decorate([
    customElement('debug-panel')
], DebugPanel);
export default DebugPanel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVidWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZWJ1Zy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxFQUFDLGFBQWEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFHM0MsSUFBcUIsVUFBVSxHQUEvQixNQUFxQixVQUFXLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFDbkQsS0FBSztRQUNQLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxVQUFVO1FBQ1QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsWUFBWTtRQUNYLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFlBQVk7UUFDWCxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxtQkFBbUI7UUFDbEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxjQUFjO1FBQ2IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxTQUFTO1FBQ1IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQ0QsQ0FBQTtBQTVCb0IsVUFBVTtJQUQ5QixhQUFhLENBQUMsYUFBYSxDQUFDO0dBQ1IsVUFBVSxDQTRCOUI7ZUE1Qm9CLFVBQVUifQ==