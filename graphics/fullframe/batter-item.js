var BatterItem_1;
import * as tslib_1 from "tslib";
const { customElement, property } = Polymer.decorators;
let BatterItem = BatterItem_1 = class BatterItem extends Polymer.MutableData(Polymer.Element) {
    _updateBatter(newVal) {
        this.name = this.formatName(newVal.name);
        this.dismissal = newVal.dismissal;
        if (newVal.batting == "BATTING") {
            this.$.batterItemBody.classList.add('batting');
        }
        else {
            this.$.batterItemBody.classList.remove('batting');
        }
        // Unfortunately since I need to show batters who haven't batted yet as "-" so the variables need to be strings
        if (newVal.batting || newVal.dismissal != "") {
            this.balls = String(newVal.balls);
            this.totalRuns = String(newVal.runs);
        }
        else {
            this.totalRuns = '-';
            this.balls = '-';
        }
    }
    formatName(batterName) {
        let splitName = batterName.split(" ");
        return splitName[splitName.length - 1].toUpperCase();
    }
};
tslib_1.__decorate([
    property({ type: Object, observer: BatterItem_1.prototype._updateBatter })
], BatterItem.prototype, "batter", void 0);
tslib_1.__decorate([
    property({ type: String })
], BatterItem.prototype, "name", void 0);
tslib_1.__decorate([
    property({ type: String })
], BatterItem.prototype, "balls", void 0);
tslib_1.__decorate([
    property({ type: String })
], BatterItem.prototype, "dismissal", void 0);
tslib_1.__decorate([
    property({ type: String })
], BatterItem.prototype, "totalRuns", void 0);
tslib_1.__decorate([
    property({ type: String })
], BatterItem.prototype, "batting", void 0);
BatterItem = BatterItem_1 = tslib_1.__decorate([
    customElement('batter-item')
], BatterItem);
export default BatterItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0dGVyLWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXR0ZXItaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUtyRCxJQUFxQixVQUFVLGtCQUEvQixNQUFxQixVQUFXLFNBQVEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBbUIzRSxhQUFhLENBQUMsTUFBYztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUVsQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDL0M7YUFBTTtZQUNOLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEQ7UUFFRCwrR0FBK0c7UUFDL0csSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxTQUFTLElBQUksRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ2pCO0lBRUYsQ0FBQztJQUVELFVBQVUsQ0FBQyxVQUFrQjtRQUM1QixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEQsQ0FBQztDQUVELENBQUE7QUEzQ0E7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxZQUFVLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBQyxDQUFDOzBDQUN4RDtBQUdmO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO3dDQUNaO0FBR2I7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7eUNBQ1g7QUFHZDtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzs2Q0FDUDtBQUdsQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzs2Q0FDUDtBQUdsQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzsyQ0FDVDtBQWpCSSxVQUFVO0lBRDlCLGFBQWEsQ0FBQyxhQUFhLENBQUM7R0FDUixVQUFVLENBNkM5QjtlQTdDb0IsVUFBVSJ9