import * as tslib_1 from "tslib";
const { customElement } = Polymer.decorators;
let CricketMatch = class CricketMatch extends Polymer.Element {
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
CricketMatch = tslib_1.__decorate([
    customElement('cricket-match')
], CricketMatch);
export default CricketMatch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1tYXRjaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyaWNrZXQtbWF0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sRUFBQyxhQUFhLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBRzNDLElBQXFCLFlBQVksR0FBakMsTUFBcUIsWUFBYSxTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBRXhELFdBQVc7UUFDVixNQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRTtZQUNqQyxLQUFLLEVBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUErQixDQUFDLEtBQUs7WUFDcEQsS0FBSyxFQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBK0IsQ0FBQyxLQUFLO1lBQ3BELFNBQVMsRUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQThCLENBQUMsS0FBSztZQUN2RCxPQUFPLEVBQUUsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQThCLENBQUMsS0FBSztnQkFDcEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUE4QixDQUFDLEtBQUs7Z0JBQzNDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBZ0MsQ0FBQyxLQUFLO2dCQUM3QyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQTZCLENBQUMsS0FBSzthQUMzQztZQUNELFVBQVUsRUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQStCLENBQUMsS0FBSztZQUN6RCxZQUFZLEVBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFpQyxDQUFDLEtBQUs7WUFDN0QsT0FBTyxFQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBaUMsQ0FBQyxLQUFLO1lBQ3hELElBQUksRUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQThCLENBQUMsS0FBSztTQUNsRCxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0QsQ0FBQTtBQWxCb0IsWUFBWTtJQURoQyxhQUFhLENBQUMsZUFBZSxDQUFDO0dBQ1YsWUFBWSxDQWtCaEM7ZUFsQm9CLFlBQVkifQ==