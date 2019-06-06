import * as tslib_1 from "tslib";
import anime from 'animejs';
const { customElement, property } = Polymer.decorators;
const currentInningsRep = nodecg.Replicant('currentInnings');
const matchInfoRep = nodecg.Replicant('match');
/**
 * @customElement
 * @polymer
 * @appliesMixin Polymer.MutableData
 */
let FullFrame = class FullFrame extends Polymer.MutableData(Polymer.Element) {
    ready() {
        super.ready();
        // Start hidden
        anime({
            targets: [this.$.title, this.$.batterListParent, this.$.bottom],
            opacity: 0,
            duration: 0
        });
        currentInningsRep.on('change', newVal => {
            this.currentInnings = newVal;
            this.score = this.formatScore(newVal);
            this.batsmen = [];
            this.batsmen = newVal.batsmen;
            nodecg.readReplicant('over', overValue => {
                if (overValue == undefined) {
                    this.totalOvers = "0";
                }
                else {
                    this.totalOvers = this.formatOvers(newVal, overValue).toString();
                }
            });
        });
        matchInfoRep.on('change', newVal => {
            this.matchInfo = newVal;
        });
        nodecg.listenFor('showFullFrame', () => {
            console.log('Showing');
            anime({
                targets: [this.$.title, this.$.batterListParent, this.$.bottom],
                opacity: 1,
                duration: 2000,
                delay: 1000
            });
        });
        nodecg.listenFor('hideFullFrame', () => {
            console.log('Hiding');
            anime({
                targets: [this.$.title, this.$.batterListParent, this.$.bottom],
                opacity: 0,
                duration: 2000
            });
        });
    }
    formatName(batterName) {
        let splitName = batterName.split(" ");
        return splitName[splitName.length - 1].toUpperCase();
    }
    formatOvers(currentInnings, currentOver) {
        return currentInnings.overs.length.toString() + '.' + currentOver.ballsLeft.toString();
    }
    formatScore(currentInnings) {
        return currentInnings.wickets + "-" + currentInnings.runs;
    }
};
tslib_1.__decorate([
    property({ type: Object })
], FullFrame.prototype, "currentInnings", void 0);
tslib_1.__decorate([
    property({ type: String })
], FullFrame.prototype, "score", void 0);
tslib_1.__decorate([
    property({ type: Array })
], FullFrame.prototype, "batsmen", void 0);
tslib_1.__decorate([
    property({ type: Object })
], FullFrame.prototype, "matchInfo", void 0);
tslib_1.__decorate([
    property({ type: String })
], FullFrame.prototype, "totalOvers", void 0);
FullFrame = tslib_1.__decorate([
    customElement('full-frame')
], FullFrame);
export default FullFrame;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbGZyYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnVsbGZyYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQSxPQUFPLEtBQUssTUFBTSxTQUFTLENBQUM7QUFFNUIsTUFBTSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBRXZELE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBaUIsZ0JBQWdCLENBQUMsQ0FBQztBQUM3RSxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFZLE9BQU8sQ0FBQyxDQUFDO0FBRTFEOzs7O0dBSUc7QUFFSCxJQUFxQixTQUFTLEdBQTlCLE1BQXFCLFNBQVUsU0FBUSxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFnQjFFLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxlQUFlO1FBQ2YsS0FBSyxDQUFDO1lBQ0wsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUMvRCxPQUFPLEVBQUUsQ0FBQztZQUNWLFFBQVEsRUFBRSxDQUFDO1NBQ1gsQ0FBQyxDQUFDO1FBRUgsaUJBQWlCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztZQUU3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBRTlCLE1BQU0sQ0FBQyxhQUFhLENBQU8sTUFBTSxF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