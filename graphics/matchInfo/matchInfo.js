import * as tslib_1 from "tslib";
import { TweenLite } from 'gsap';
const { customElement, property } = Polymer.decorators;
const matchInfoRep = nodecg.Replicant('match');
let MatchInfoPanel = class MatchInfoPanel extends Polymer.Element {
    ready() {
        super.ready();
        matchInfoRep.on('change', newVal => {
            this.info = newVal;
        });
        nodecg.listenFor('showLocation', () => {
            console.log('Showing location');
            this.showLocation();
        });
        nodecg.listenFor('hideLocation', () => {
            console.log('Hiding location');
            this.hideLocation();
        });
        nodecg.listenFor('showToss', () => {
            console.log('Showing toss');
            this.showToss();
        });
        nodecg.listenFor('hideToss', () => {
            console.log('Hiding toss');
            this.hideToss();
        });
    }
    showLocation() {
        TweenLite.to(this.$.location, 0.9, {
            "--title-width": '218px',
            "--location-width": '414px',
            "--text-padding": '15px'
        });
    }
    hideLocation() {
        TweenLite.to(this.$.location, 0.9, {
            "--title-width": '0px',
            "--location-width": '0px',
            "--text-padding": '0px'
        });
    }
    showToss() {
        TweenLite.to(this.$.toss, 0.9, { '--toss-height': '50px' });
    }
    hideToss() {
        TweenLite.to(this.$.toss, 0.9, { '--toss-height': '0px' });
    }
};
tslib_1.__decorate([
    property({ type: Object })
], MatchInfoPanel.prototype, "info", void 0);
MatchInfoPanel = tslib_1.__decorate([
    customElement('match-info')
], MatchInfoPanel);
export default MatchInfoPanel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2hJbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWF0Y2hJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWpDLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUVyRCxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFZLE9BQU8sQ0FBQyxDQUFDO0FBRzFELElBQXFCLGNBQWMsR0FBbkMsTUFBcUIsY0FBZSxTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBSTFELEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRTtZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsWUFBWTtRQUNYLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQ2xDLGVBQWUsRUFBRSxPQUFPO1lBQ3hCLGtCQUFrQixFQUFFLE9BQU87WUFDM0IsZ0JBQWdCLEVBQUUsTUFBTTtTQUN4QixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsWUFBWTtRQUNYLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQ2xDLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLGtCQUFrQixFQUFFLEtBQUs7WUFDekIsZ0JBQWdCLEVBQUUsS0FBSztTQUN2QixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNQLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUMsZUFBZSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELFFBQVE7UUFDUCxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7Q0FDRCxDQUFBO0FBckRBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzRDQUNUO0FBRkksY0FBYztJQURsQyxhQUFhLENBQUMsWUFBWSxDQUFDO0dBQ1AsY0FBYyxDQXVEbEM7ZUF2RG9CLGNBQWMifQ==