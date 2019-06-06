import * as tslib_1 from "tslib";
const { customElement, property } = Polymer.decorators;
const currentInningsRep = nodecg.Replicant('currentInnings');
let CricketBowlers = class CricketBowlers extends Polymer.MutableData(Polymer.Element) {
    ready() {
        super.ready();
        currentInningsRep.on('change', newVal => {
            this.playedBowlers = [];
            this.playedBowlers = this.getPlayedBowlers(newVal);
        });
    }
    getPlayedBowlers(innings) {
        return innings.bowlers.filter(bowler => {
            return bowler.overs != '0';
        });
    }
};
tslib_1.__decorate([
    property({ type: Array })
], CricketBowlers.prototype, "playedBowlers", void 0);
CricketBowlers = tslib_1.__decorate([
    customElement('cricket-bowlers')
], CricketBowlers);
export default CricketBowlers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1ib3dsZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JpY2tldC1ib3dsZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBRzdFLElBQXFCLGNBQWMsR0FBbkMsTUFBcUIsY0FBZSxTQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUs1RSxLQUFLO1FBQ1AsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsaUJBQWlCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxPQUF1QjtRQUN2QyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sTUFBTSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0NBQ0QsQ0FBQTtBQWhCQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQztxREFDQTtBQUhKLGNBQWM7SUFEbEMsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0dBQ1osY0FBYyxDQW1CbEM7ZUFuQm9CLGNBQWMifQ==