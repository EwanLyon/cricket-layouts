const {customElement} = Polymer.decorators;

import {CurrentInnings} from 'src/types/schemas/currentInnings';
import { Batter } from 'src/types/schemas/batter';
const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

let typeaheadBatters: Element[] = [];

@customElement('cricket-batting-roster')
export default class CricketBattingRoster extends Polymer.Element {

	ready(){
        super.ready();

        currentInningsRep.on('change', newVal => {
            // Set team name
            this.$.teamName.innerHTML = newVal.battingTeam;

            // Make all inputs into an array to iterate over
            typeaheadBatters = Array.from(this.$.rosterInputs.children);

            // Set inputs to contain batters and set the selected value as the same in the list
            for (let i = 0; i < typeaheadBatters.length; i++) {
                (typeaheadBatters[i] as any).items = newVal.batters;
                (typeaheadBatters[i] as any).selectedItem = newVal.batters[i];
            }
        });
    }

    UpdateBattingRoster(){
        // Make all inputs into an array to iterate over
        typeaheadBatters = Array.from(this.$.rosterInputs.children);

        let batterObjects: Batter[] = [];

        typeaheadBatters.forEach(batterInput => {
            batterObjects.push((batterInput as any).selectedItem);
        });

        // Send array to server code to maintain dumb terminal
        nodecg.sendMessage('updateBattingRoster', batterObjects);
    }
}