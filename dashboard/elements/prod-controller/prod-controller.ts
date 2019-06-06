const {customElement} = Polymer.decorators;

@customElement('prod-graphics')
export default class ProdGraphics extends Polymer.Element {
    ready() {
		super.ready();
	}

	showFullFrame(){
		nodecg.sendMessage('showFullFrame');
	}

	hideFullFrame(){
		nodecg.sendMessage('hideFullFrame');
	}
}