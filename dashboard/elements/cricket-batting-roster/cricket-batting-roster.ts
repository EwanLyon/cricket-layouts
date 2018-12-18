const {customElement} = Polymer.decorators;

import {CurrentInnings} from '../../../src/types/schemas/currentInnings';
const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

@customElement('cricket-batting-roster')
export default class CricketBattingRoster extends Polymer.Element {

	ready(){
        super.ready();

        currentInningsRep.on('change', newVal => {
            this.$.teamName.innerHTML = newVal.battingTeam;
            var typeaheadBatters = Array.from(this.$.rosterInputs.children);

            for (let i = 0; i < typeaheadBatters.length; i++) {
                (typeaheadBatters[i] as any).items = newVal.batters;
                (typeaheadBatters[i] as any).selectedItem = newVal.batters[i];
            }
        });
    }

    UpdateBattingRoster(){
        (currentInningsRep.value as CurrentInnings).batters = [];

        var typeaheadBatters = Array.from(this.$.rosterInputs.children);

        for (let i = 0; i < typeaheadBatters.length; i++) {
            (currentInningsRep.value as CurrentInnings).batters.push((typeaheadBatters[i] as any).selectedItem);
        }
    }
}