import * as tslib_1 from "tslib";
const { customElement } = Polymer.decorators;
let CricketMatch = class CricketMatch extends Polymer.Element {
    updateMatch() {
        nodecg.sendMessage('updateMatch', {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1tYXRjaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyaWNrZXQtbWF0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sRUFBQyxhQUFhLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBRzNDLElBQXFCLFlBQVksR0FBakMsTUFBcUIsWUFBYSxTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBRXhELFdBQVc7UUFDVixNQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRTtZQUNqQyxLQUFLLEVBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUErQixDQUFDLEtBQUs7WUFDcEQsU0FBUyxFQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBOEIsQ0FBQyxLQUFLO1lBQ3ZELE9BQU8sRUFBRSxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBOEIsQ0FBQyxLQUFLO2dCQUNwRCxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQThCLENBQUMsS0FBSztnQkFDM0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFnQyxDQUFDLEtBQUs7Z0JBQzdDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBNkIsQ0FBQyxLQUFLO2FBQzNDO1lBQ0QsVUFBVSxFQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBK0IsQ0FBQyxLQUFLO1lBQ3pELFlBQVksRUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQWlDLENBQUMsS0FBSztZQUM3RCxPQUFPLEVBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFpQyxDQUFDLEtBQUs7WUFDeEQsSUFBSSxFQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBOEIsQ0FBQyxLQUFLO1NBQ2xELENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRCxDQUFBO0FBakJvQixZQUFZO0lBRGhDLGFBQWEsQ0FBQyxlQUFlLENBQUM7R0FDVixZQUFZLENBaUJoQztlQWpCb0IsWUFBWSJ9