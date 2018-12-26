const {customElement} = Polymer.decorators;

import {CurrentInnings} from '../../../src/types/schemas/currentInnings';
const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

@customElement('cricket-batting-roster')
export default class CricketBattingRoster extends Polymer.Element {

	ready(){
        super.ready();

        currentInningsRep.on('change', newVal => {
            // Set team name
            this.$.teamName.innerHTML = newVal.battingTeam;

            // Make all inputs into an array to iterate over
            var typeaheadBatters = Array.from(this.$.rosterInputs.children);

            // Set inputs to contain batters and set the selected value as the same in the list
            for (let i = 0; i < typeaheadBatters.length; i++) {
                (typeaheadBatters[i] as any).items = newVal.batters;
                (typeaheadBatters[i] as any).selectedItem = newVal.batters[i];
            }
        });
    }

    UpdateBattingRoster(){
        // Reset batting roster
        (currentInningsRep.value as CurrentInnings).batters = [];

        // Make all inputs into an array to iterate over
        var typeaheadBatters = Array.from(this.$.rosterInputs.children);

        // Push each value into the batting roster
        for (let i = 0; i < typeaheadBatters.length; i++) {
            (currentInningsRep.value as CurrentInnings).batters.push((typeaheadBatters[i] as any).selectedItem);
        }
    }
}