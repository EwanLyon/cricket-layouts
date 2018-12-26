const {customElement, property} = Polymer.decorators;

import {CurrentInnings} from '../../../src/types/schemas/currentInnings'
const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

@customElement('cricket-wicket')
export default class CricketWicket extends Polymer.Element {
    @property({type: String})
    batter1: string = "Batter 1";

    @property({type: String})
    batter2: string = "Batter 2";

    ready() {
        super.ready();

        currentInningsRep.on('change', newVal => {
            this.batter1 = newVal.battersFacing[0].name;
            this.batter2 = newVal.battersFacing[1].name;
        });
    }
}