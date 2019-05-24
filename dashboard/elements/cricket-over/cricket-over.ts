const {customElement, property} = Polymer.decorators;

import {Over} from 'src/types/schemas/over';
const overRep = nodecg.Replicant<Over>('over');
import {CurrentInnings} from 'src/types/schemas/currentInnings';
const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');

let overDivs: HTMLCollection;

@customElement('cricket-over')
export default class CricketOver extends Polymer.Element {

    @property({type: Number})
	overs: number;

    ready() {
        super.ready();

        overDivs = this.$.overTable.children;
        
        overRep.on('change', newVal => {
            for (let i = 0; i < newVal.over.length; i++) {
                overDivs[i].innerHTML = newVal.over[i];

                // Update current ball indicator
                overDivs[i].classList.remove('currentBall');
                if (i == newVal.over.length - 1) {
                    overDivs[i].classList.add('currentBall');
                }
            }
        });

        currentInningsRep.on('change', newVal => {
            let totalOvers: number = newVal.overs.length;
            totalOvers =+ 10 / ((overRep.value as Over).over.length + 1);

            this.overs = totalOvers;
        });
	}

	addRuns(runs: number){
        nodecg.sendMessage('addRuns', runs);
    }

    badBall(ballType: string){
        nodecg.sendMessage('addBadBall', ballType);
    }

    wide(){
        this.badBall("wide");
    }

    noBall(){
        this.badBall("noball");
    }

    addZero(){
        this.addRuns(0);
    }
    
    addOne(){
        this.addRuns(1);
    }
    
    addTwo(){
        this.addRuns(2);
    }
    
    addThree(){
        this.addRuns(3);
    }
    
    addFour(){
        this.addRuns(4);
    }
    
    addFive(){
        this.addRuns(5);
    }
    
    addSix(){
        this.addRuns(6);
    }
}