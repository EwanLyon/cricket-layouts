const {customElement, property} = Polymer.decorators;

@customElement('atom-toss')
export default class AtomToss extends Polymer.Element {
	@property({type: String})
	toss: string;
}