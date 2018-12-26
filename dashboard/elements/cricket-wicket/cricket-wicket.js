import * as tslib_1 from "tslib";
const { customElement, property } = Polymer.decorators;
let CricketWicket = class CricketWicket extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.batter1 = "Batter 1";
        this.batter2 = "Batter 2";
    }
};
tslib_1.__decorate([
    property({ type: String })
], CricketWicket.prototype, "batter1", void 0);
tslib_1.__decorate([
    property({ type: String })
], CricketWicket.prototype, "batter2", void 0);
CricketWicket = tslib_1.__decorate([
    customElement('cricket-wicket')
], CricketWicket);
export default CricketWicket;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpY2tldC13aWNrZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmlja2V0LXdpY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBR3JELElBQXFCLGFBQWEsR0FBbEMsTUFBcUIsYUFBYyxTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBRDFEOztRQUdJLFlBQU8sR0FBVyxVQUFVLENBQUM7UUFHN0IsWUFBTyxHQUFXLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0NBQUEsQ0FBQTtBQUpHO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzhDQUNJO0FBRzdCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzhDQUNJO0FBTFosYUFBYTtJQURqQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7R0FDWCxhQUFhLENBTWpDO2VBTm9CLGFBQWEifQ==