const {customElement, property} = Polymer.decorators;

@customElement('cricket-wicket')
export default class CricketWicket extends Polymer.Element {
    @property({type: String})
    batter1: string = "Batter 1";

    @property({type: String})
    batter2: string = "Batter 2";
}