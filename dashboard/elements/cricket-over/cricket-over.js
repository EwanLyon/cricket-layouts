import * as tslib_1 from "tslib";
const { customElement, property } = Polymer.decorators;
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
            nodecg.readReplicant('currentInnings', value => {
                let totalOvers = value.overs.length;
                totalOvers += (newVal.over.length) / 10;
                this.overs = totalOvers;
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
    property({ type: Number })
], CricketOver.prototype, "overs", void 0);
CricketOver = tslib_1.__decorate([
    customElement('cricket-over')
], CricketOver);
export default CricketOver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC1vdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JpY2tldC1vdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFHckQsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBTyxNQUFNLENBQUMsQ0FBQztBQUcvQyxJQUFJLFFBQXdCLENBQUM7QUFHN0IsSUFBcUIsV0FBVyxHQUFoQyxNQUFxQixXQUFZLFNBQVEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBS3pFLEtBQUs7UUFDRCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBRXJDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQzFCLGlDQUFpQztZQUNqQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDeEIsa0JBQWtCO2dCQUNsQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDbEMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ25DLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakM7aUJBQU07Z0JBQ0gsb0JBQW9CO2dCQUNwQixPQUFPLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN4QixRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDMUM7YUFDSjtZ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