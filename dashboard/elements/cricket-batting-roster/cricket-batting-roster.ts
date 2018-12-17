const {customElement} = Polymer.decorators;

import {CurrentInnings} from '../../../src/types/schemas/currentInnings';

const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

@customElement('cricket-batting-roster')
export default class CricketBattingRoster extends Polymer.Element {

	ready(){
        super.ready();

        currentInningsRep.on('change', newVal => {
            (this.$.typeaheadBatter1 as any).items = newVal.batters;
            (this.$.typeaheadBatter2 as any).items = newVal.batters;
            (this.$.typeaheadBatter3 as any).items = newVal.batters;
            (this.$.typeaheadBatter4 as any).items = newVal.batters;
            (this.$.typeaheadBatter5 as any).items = newVal.batters;
            (this.$.typeaheadBatter6 as any).items = newVal.batters;
            (this.$.typeaheadBatter7 as any).items = newVal.batters;
            (this.$.typeaheadBatter8 as any).items = newVal.batters;
            (this.$.typeaheadBatter9 as any).items = newVal.batters;
            (this.$.typeaheadBatter10 as any).items = newVal.batters;
            (this.$.typeaheadBatter11 as any).items = newVal.batters;
        });
    }

    UpdateBattingRoster(){
        (currentInningsRep.value as CurrentInnings).batters = [];

        (currentInningsRep.value as CurrentInnings).batters = [
            (this.$.typeaheadBatter1 as any).selectedItem,
            (this.$.typeaheadBatter2 as any).selectedItem,
            (this.$.typeaheadBatter3 as any).selectedItem,
            (this.$.typeaheadBatter4 as any).selectedItem,
            (this.$.typeaheadBatter5 as any).selectedItem,
            (this.$.typeaheadBatter6 as any).selectedItem,
            (this.$.typeaheadBatter7 as any).selectedItem,
            (this.$.typeaheadBatter8 as any).selectedItem,
            (this.$.typeaheadBatter9 as any).selectedItem,
            (this.$.typeaheadBatter10 as any).selectedItem,
            (this.$.typeaheadBatter11 as any).selectedItem
        ];
    }
}