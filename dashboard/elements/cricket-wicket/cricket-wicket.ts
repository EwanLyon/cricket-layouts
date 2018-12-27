const {customElement, property} = Polymer.decorators;

import {CurrentInnings} from 'src/types/schemas/currentInnings';
import {Batter} from 'src/types/schemas/batter';
import {Bowler} from 'src/types/schemas/bowler';
const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

const dismissalTypes: object = {
    "Caught": "c: ",        // Both
    "Run out": "run out: ", // Only fielder needed
    "Bowled": "b: ",        // No fielder
    "LBW": "lbw: ",         // No fielder
    "Retired": "retired",
    "Stumped": "stumped",
    "Hit wicket": "hit wicket",
    "Hit ball twice": "hit ball twice",
    "Obstructing": "obstructing field",
    "Timed out": "timed out"
};

let dismissalTitles: string[] = Object.keys(dismissalTypes);
let batterOut: Batter;

@customElement('cricket-wicket')
export default class CricketWicket extends Polymer.Element {
    @property({type: String})
    batter1: Batter;

    @property({type: String})
    batter2: Batter;

    @property({type: Array, observer: CricketWicket.prototype.allowDismissal})
    canDismiss: boolean[] = [false, false]; // [Batter selected, Dismissal selected, fielder selected]

    ready() {
        super.ready();

        (this.$.dismissal as any).items = dismissalTitles;

        currentInningsRep.on('change', newVal => {
            this.batter1 = newVal.battersFacing[0];
            this.batter2 = newVal.battersFacing[1];

            (this.$.fielders as any).items = newVal.bowlers;
        });
    }

    batter1Selected() {
        batterOut = this.batter1;
        this.$.batter2Button.toggleAttribute('disabled');
        this.canDismiss[0] = true;
    }

    batter2Selected() {
        batterOut = this.batter2;
        this.$.batter1Button.toggleAttribute('disabled');
        this.canDismiss[0] = true;
    }

    _checkIfFielderNeeded() {
        let selectedDismissal: string = (this.$.dismissal as any).selectedItem;
        this.canDismiss[1] = true;
        
        if (dismissalTitles.indexOf(selectedDismissal) > 1) {
            // Fielder is needed
            this.$.fielders.toggleAttribute('disabled', true);
        } else {
            // Fielder isnt needed
            this.$.fielders.toggleAttribute('disabled', false);
        }
    }

    sendWicket() {
        let selectedDismissal: string = (this.$.dismissal as any).selectedItem;
        let dismissalText: string = (dismissalTypes as any)[selectedDismissal];

        let fielderItem: Bowler =  (this.$.fielders as any).selectedItem;

        nodecg.sendMessage('newWicket', [dismissalText, batterOut, fielderItem]);

        this.$.batter1Button.toggleAttribute('disabled', false);
        this.$.batter1Button.toggleAttribute('disabled', false);
    }

    allowDismissal(){
        if (this.canDismiss[0] == true && this.canDismiss[1] == true){
            // this.$.dismissButton.toggleAttribute('disabled', true);
        }
    }
}