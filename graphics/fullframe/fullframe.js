import * as tslib_1 from "tslib";
import * as cricketFormat from '../../shared/scripts/formatters';
import { TweenLite } from 'gsap';
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
        TweenLite.to([this.$.title, this.$.batterListParent, this.$.bottom], 0, { opacity: 0 });
        currentInningsRep.on('change', newVal => {
            this.currentInnings = newVal;
            this.score = cricketFormat.formatScore(newVal);
            this.batsmen = [];
            this.batsmen = newVal.batsmen;
            nodecg.readReplicant('over', overValue => {
                if (overValue == undefined) {
                    this.totalOvers = "0";
                }
                else {
                    this.totalOvers = cricketFormat.formatOvers(newVal, overValue);
                }
            });
        });
        matchInfoRep.on('change', newVal => {
            this.matchInfo = newVal;
        });
        nodecg.listenFor('showFullFrame', () => {
            console.log('Showing Full Frame');
            TweenLite.to([this.$.title, this.$.batterListParent, this.$.bottom], 1, { opacity: 1 });
        });
        nodecg.listenFor('hideFullFrame', () => {
            console.log('Hiding Full Frame');
            TweenLite.to([this.$.title, this.$.batterListParent, this.$.bottom], 1, { opacity: 0 });
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbGZyYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnVsbGZyYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEtBQUssYUFBYSxNQUFNLGlDQUFpQyxDQUFDO0FBS2pFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxNQUFNLENBQUE7QUFFOUIsTUFBTSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBRXZELE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBaUIsZ0JBQWdCLENBQUMsQ0FBQztBQUM3RSxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFZLE9BQU8sQ0FBQyxDQUFDO0FBRTFEOzs7O0dBSUc7QUFFSCxJQUFxQixTQUFTLEdBQTlCLE1BQXFCLFNBQVUsU0FBUSxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFnQjFFLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxlQUFlO1FBQ2YsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUV0RixpQkFBaUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1lBRTdCLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFFOUIsTUFBTSxDQUFDLGFBQWEsQ0FBTyxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQUU7Z0JBQzlDLElBQUksU0FBUyxJQUFJLFNBQVMsRUFBRTtvQkFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7aUJBQ3RCO3FCQUFNO29CQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7aUJBQy9EO1lBQ0YsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFBO1FBRUYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNsQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZGLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNqQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNELENBQUE7QUFsREE7SUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7aURBQ0k7QUFHL0I7SUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7d0NBQ2I7QUFHZDtJQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQzswQ0FDUjtBQUdsQjtJQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs0Q0FDTjtBQUdyQjtJQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs2Q0FDUjtBQWRDLFNBQVM7SUFEN0IsYUFBYSxDQUFDLFlBQVksQ0FBQztHQUNQLFNBQVMsQ0FvRDdCO2VBcERvQixTQUFTIn0=