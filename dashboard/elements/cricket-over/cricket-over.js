import * as tslib_1 from "tslib";
const { customElement, property } = Polymer.decorators;
const overRep = nodecg.Replicant('over');
const currentInningsRep = nodecg.Replicant('currentInnings');
let overDivs;
let CricketOver = class CricketOver extends Polymer.Element {
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
            console.log(newVal);
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
                    overDivs[i + 1].id = "currentBall";
                }
            }
        });
        currentInningsRep.on('change', newVal => {
            let totalOvers = newVal.overs.length;
            totalOvers += (overRep.value.over.length + 1) / 10;
            this.overs = totalOvers;
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
    property({ type: Number })
], CricketOver.prototype, "overs", void 0);
CricketOver = tslib_1.__decorate([
    customElement('cricket-over')
], CricketOver);
export default CricketOver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1vdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JpY2tldC1vdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFHckQsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBTyxNQUFNLENBQUMsQ0FBQztBQUUvQyxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQWlCLGdCQUFnQixDQUFDLENBQUM7QUFFN0UsSUFBSSxRQUF3QixDQUFDO0FBRzdCLElBQXFCLFdBQVcsR0FBaEMsTUFBcUIsV0FBWSxTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBS3BELEtBQUs7UUFDRCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBRXJDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQzFCLGlDQUFpQztZQUNqQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDeEIsa0JBQWtCO2dCQUNsQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDbEMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ25DLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakM7aUJBQU07Z0JBQ0gsb0JBQW9CO2dCQUNwQixPQUFPLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN4QixRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENB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