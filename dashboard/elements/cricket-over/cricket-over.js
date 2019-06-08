import * as tslib_1 from "tslib";
const { customElement, property } = Polymer.decorators;
import { formatOvers } from '../../../shared/scripts/formatters';
const overRep = nodecg.Replicant('over');
let overDivs;
let CricketOver = class CricketOver extends Polymer.MutableData(Polymer.Element) {
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
            }
            else {
                // Reset over length
                while (overDivs.length > 6) {
                    overDivs[overDivs.length - 1].remove();
                }
            }
            for (let i = 0; i < newVal.over.length || i < 6; i++) {
                if (newVal.over[i] != undefined) {
                    overDivs[i].innerHTML = String(newVal.over[i]);
                }
                else {
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
            nodecg.readReplicant('currentInnings', currentInningsValue => {
                this.overs = formatOvers(currentInningsValue, newVal);
            });
        });
    }
    addRuns(runs) {
        nodecg.sendMessage('addRuns', runs);
    }
    badBall(ballType) {
        nodecg.sendMessage('addBadBall', ballType);
    }
    nextOver() {
        nodecg.sendMessage('nextOver');
    }
    wide() {
        this.badBall("wide");
    }
    noBall() {
        this.badBall("noball");
    }
    bye() {
        this.badBall("bye");
    }
    legBye() {
        this.badBall("legBye");
    }
    addZero() {
        this.addRuns(0);
    }
    addOne() {
        this.addRuns(1);
    }
    addTwo() {
        this.addRuns(2);
    }
    addThree() {
        this.addRuns(3);
    }
    addFour() {
        this.addRuns(4);
    }
    addFive() {
        this.addRuns(5);
    }
    addSix() {
        this.addRuns(6);
    }
};
tslib_1.__decorate([
    property({ type: String })
], CricketOver.prototype, "overs", void 0);
CricketOver = tslib_1.__decorate([
    customElement('cricket-over')
], CricketOver);
export default CricketOver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1vdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JpY2tldC1vdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFFckQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBRy9ELE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQU8sTUFBTSxDQUFDLENBQUM7QUFFL0MsSUFBSSxRQUF3QixDQUFDO0FBRzdCLElBQXFCLFdBQVcsR0FBaEMsTUFBcUIsV0FBWSxTQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUt6RSxLQUFLO1FBQ0QsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUVyQyxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUMxQixpQ0FBaUM7WUFDakMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3hCLGtCQUFrQjtnQkFDbEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQ2xDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNuQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2pDO2lCQUFNO2dCQUNILG9CQUFvQjtnQkFDcEIsT0FBTyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDeEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQzFDO2FBQ0o7WUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbEQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsRUFBRTtvQkFDN0IsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNsRDtxQkFBTTtvQkFDSCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztpQkFDOUI7Z0JBRUQsZ0NBQWdDO2dCQUNoQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUM3QixJQUFJLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksU0FBUyxFQUFFO3dCQUM5QixRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxhQUFhLENBQUM7cUJBQ3RDO2lCQUNKO2FBQ0o7WUFFRCxNQUFNLENBQUMsYUFBYSxDQUFpQixnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQyxFQUFFO2dCQUN6RSxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMxRCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFZO1FBQ2IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxRQUE4QztRQUNsRCxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsUUFBUTtRQUNKLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQUk7UUFDQSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsR0FBRztRQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELE9BQU87UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDO0NBQ0osQ0FBQTtBQWxHQTtJQURJLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzswQ0FDZDtBQUhNLFdBQVc7SUFEL0IsYUFBYSxDQUFDLGNBQWMsQ0FBQztHQUNULFdBQVcsQ0FxRy9CO2VBckdvQixXQUFXIn0=