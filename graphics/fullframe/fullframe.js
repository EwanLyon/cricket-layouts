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
        // anime({
        // 	targets: [this.$.title, this.$.batterListParent, this.$.bottom],
        // 	opacity: 0,
        // 	duration: 0
        // });
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
            // anime({
            // 	targets: [this.$.title, this.$.batterListParent, this.$.bottom],
            // 	opacity: 1,
            // 	duration: 2000,
            // 	delay: 1000
            // });
            TweenLite.to([this.$.title, this.$.batterListParent, this.$.bottom], 1, { opacity: 1 });
        });
        nodecg.listenFor('hideFullFrame', () => {
            console.log('Hiding Full Frame');
            // anime({
            // 	targets: [this.$.title, this.$.batterListParent, this.$.bottom],
            // 	opacity: 0,
            // 	duration: 2000
            // });
            TweenLite.to([this.$.title, this.$.batterListParent, this.$.bottom], 2, { opacity: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbGZyYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnVsbGZyYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEtBQUssYUFBYSxNQUFNLGlDQUFpQyxDQUFDO0FBS2pFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxNQUFNLENBQUE7QUFFOUIsTUFBTSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBRXZELE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBaUIsZ0JBQWdCLENBQUMsQ0FBQztBQUM3RSxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFZLE9BQU8sQ0FBQyxDQUFDO0FBRTFEOzs7O0dBSUc7QUFFSCxJQUFxQixTQUFTLEdBQTlCLE1BQXFCLFNBQVUsU0FBUSxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFnQjFFLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxlQUFlO1FBQ2YsVUFBVTtRQUNWLG9FQUFvRTtRQUNwRSxlQUFlO1FBQ2YsZUFBZTtRQUNmLE1BQU07UUFDTixTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBRXRGLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7WUFFN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUU5QixNQUFNLENBQUMsYUFBYSxDQUFPLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBRTtnQkFDOUMsSUFBSSxTQUFTLElBQUksU0FBUyxFQUFFO29CQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztpQkFDdEI7cUJBQU07b0JBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztpQkFDL0Q7WUFDRixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUE7UUFFRixNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2xDLFVBQVU7WUFDVixvRUFBb0U7WUFDcEUsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsTUFBTTtZQUNOLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDdkYsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2pDLFVBQVU7WUFDVixvRUFBb0U7WUFDcEUsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixNQUFNO1lBQ04sU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUN2RixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRCxDQUFBO0FBbEVBO0lBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO2lEQUNJO0FBRy9CO0lBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO3dDQUNiO0FBR2Q7SUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7MENBQ1I7QUFHbEI7SUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7NENBQ047QUFHckI7SUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7NkNBQ1I7QUFkQyxTQUFTO0lBRDdCLGFBQWEsQ0FBQyxZQUFZLENBQUM7R0FDUCxTQUFTLENBb0U3QjtlQXBFb0IsU0FBUyJ9