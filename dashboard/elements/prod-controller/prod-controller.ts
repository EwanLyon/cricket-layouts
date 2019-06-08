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

	showScorebug(){
		nodecg.sendMessage('showScorebug');
	}

	hideScorebug(){
		nodecg.sendMessage('hideScorebug');
	}

	showLocation(){
		nodecg.sendMessage('showLocation');
	}

	hideLocation(){
		nodecg.sendMessage('hideLocation');
	}

	showToss(){
		nodecg.sendMessage('showToss');
	}

	hideToss(){
		nodecg.sendMessage('hideToss');
	}
}