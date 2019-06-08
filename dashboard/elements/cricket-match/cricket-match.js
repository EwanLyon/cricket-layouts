import * as tslib_1 from "tslib";
const { customElement, property } = Polymer.decorators;
const matchRep = nodecg.Replicant('match');
let CricketMatch = class CricketMatch extends Polymer.Element {
    ready() {
        super.ready();
        matchRep.on('change', newVal => {
            this.matchInfo = newVal;
            this.umpire1 = newVal.umpires[0];
            this.umpire2 = newVal.umpires[0];
            this.thirdUmpire = newVal.umpires[0];
            this.referee = newVal.umpires[0];
        });
    }
    updateMatch() {
        nodecg.sendMessage('updateMatch', {
            event: this.$.EventInput.value,
            venue: this.$.VenueInput.value,
            startDate: this.$.DateInput.value,
            umpires: [this.$.Ump1Input.value,
                this.$.Ump2Input.value,
                this.$.TrdUmpInput.value,
                this.$.RefInput.value
            ],
            pitchState: this.$.PitchInput.value,
            surfaceState: this.$.SurfaceInput.value,
            weather: this.$.WeatherInput.value,
            toss: this.$.TossInput.value
        });
    }
};
tslib_1.__decorate([
    property({ type: Object })
], CricketMatch.prototype, "matchInfo", void 0);
tslib_1.__decorate([
    property({ type: String })
], CricketMatch.prototype, "umpire1", void 0);
tslib_1.__decorate([
    property({ type: String })
], CricketMatch.prototype, "umpire2", void 0);
tslib_1.__decorate([
    property({ type: String })
], CricketMatch.prototype, "thirdUmpire", void 0);
tslib_1.__decorate([
    property({ type: String })
], CricketMatch.prototype, "referee", void 0);
CricketMatch = tslib_1.__decorate([
    customElement('cricket-match')
], CricketMatch);
export default CricketMatch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1tYXRjaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyaWNrZXQtbWF0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNyRCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFZLE9BQU8sQ0FBQyxDQUFDO0FBR3RELElBQXFCLFlBQVksR0FBakMsTUFBcUIsWUFBYSxTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBaUJ4RCxLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVixNQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRTtZQUNqQyxLQUFLLEVBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUErQixDQUFDLEtBQUs7WUFDcEQsS0FBSyxFQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBK0IsQ0FBQyxLQUFLO1lBQ3BELFNBQVMsRUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQThCLENBQUMsS0FBSztZQUN2RCxPQUFPLEVBQUUsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQThCLENBQUMsS0FBSztnQkFDcEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUE4QixDQUFDLEtBQUs7Z0JBQzNDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBZ0MsQ0FBQyxLQUFLO2dCQUM3QyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQTZCLENBQUMsS0FBSzthQUMzQztZQUNELFVBQVUsRUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQStCLENBQUMsS0FBSztZQUN6RCxZQUFZLEVBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFpQyxDQUFDLEtBQUs7WUFDN0QsT0FBTyxFQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBaUMsQ0FBQyxLQUFLO1lBQ3hELElBQUksRUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQThCLENBQUMsS0FBSztTQUNsRCxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0QsQ0FBQTtBQTFDQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzsrQ0FDTDtBQUdwQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzs2Q0FDVjtBQUdmO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzZDQUNWO0FBR2Y7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7aURBQ047QUFHbkI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7NkNBQ1Y7QUFmSyxZQUFZO0lBRGhDLGFBQWEsQ0FBQyxlQUFlLENBQUM7R0FDVixZQUFZLENBNkNoQztlQTdDb0IsWUFBWSJ9