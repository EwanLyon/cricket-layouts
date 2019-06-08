const {customElement, property} = Polymer.decorators;

@customElement('atom-location')
export default class AtomLocation extends Polymer.Element {
	@property({type: String})
	location: string;
}