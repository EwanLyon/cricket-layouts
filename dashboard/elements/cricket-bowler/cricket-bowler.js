import * as tslib_1 from "tslib";
const { customElement } = Polymer.decorators;
// const teamsRep = nodecg.Replicant<Teams>('teams');
const currentInningsRep = nodecg.Replicant('currentInnings');
let CricketBowler = class CricketBowler extends Polymer.Element {
    ready() {
        super.ready();
        currentInningsRep.on('change', newVal => {
            console.log(newVal);
            this.$.typeaheadBowler.items = newVal.bowlers;
        });
    }
    UpdateBowler() {
        nodecg.sendMessage('changeBowler', this.$.typeaheadBowler.selectedItem);
    }
};
CricketBowler = tslib_1.__decorate([
    customElement('cricket-bowler')
], CricketBowler);
export default CricketBowler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1ib3dsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmlja2V0LWJvd2xlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsTUFBTSxFQUFDLGFBQWEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDM0MscURBQXFEO0FBQ3JELE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBaUIsZ0JBQWdCLENBQUMsQ0FBQztBQUc3RSxJQUFxQixhQUFhLEdBQWxDLE1BQXFCLGFBQWMsU0FBUSxPQUFPLENBQUMsT0FBTztJQUVyRCxLQUFLO1FBQ1IsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsaUJBQWlCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBdUIsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxZQUFZO1FBQ1gsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUF1QixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Q0FDRCxDQUFBO0FBZG9CLGFBQWE7SUFEakMsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0dBQ1gsYUFBYSxDQWNqQztlQWRvQixhQUFhIn0=