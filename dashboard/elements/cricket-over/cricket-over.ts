const {customElement, property} = Polymer.decorators;

import {Over} from 'src/types/schemas/over';
const overRep = nodecg.Replicant<Over>('over');
import {CurrentInnings} from 'src/types/schemas/currentInnings';

let overDivs: HTMLCollection;

@customElement('cricket-over')
export default class CricketOver extends Polymer.MutableData(Polymer.Element) {

    @property({type: String})
	overs: string;

    ready() {
        super.ready();

        overDivs = this.$.overTable.children;
        
        overRep.on('change', newVal => {
            // If over is longer than 6 balls
            if (newVal.over.length > 6) {
                // Create new cell
                const tableDiv = this.$.overTable;
                let newCell = document.createElement('div');
                newCell.classList.add('tableCell');
                tableDiv.appendChild(newCell);
            } else {
                // Reset over length
                while (overDivs.length > 6) {
                    overDivs[overDivs.length - 1].remove();
                }
            }

            console.log(newVal);
            for (let i = 0; i < newVal.over.length || i < 6; i++) {
                if (newVal.over[i] != undefined) {
                    overDivs[i].innerHTML = String(newVal.over[i]);
                } else {
                    overDivs[i].innerHTML = '';
                }

                // Update current ball indicator
                overDivs[i].id = "";
                if (i == newVal.over.length - 1) {
                    if (overDivs[i + 1] != undefined) {
                        overDivs[i + 1].id = "currentBall";
                    }
                }
            }

            nodecg.readReplicant<CurrentInnings>('currentInnings', currentInningsValue => {
                this.overs = currentInningsValue.overs.length + '.' + newVal.over.length;
            });
        });
	}

	addRuns(runs: number){
        nodecg.sendMessage('addRuns', runs);
    }

    badBall(ballType: "wide" | "noball" | "bye" | "legBye"){
        nodecg.sendMessage('addBadBall', ballType);
    }

    nextOver() {
        nodecg.sendMessage('nextOver');
    }
    wide(){
        this.badBall("wide");
    }

    noBall(){
        this.badBall("noball");
    }

    bye(){
        this.badBall("bye");
    }

    legBye(){
        this.badBall("legBye");
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