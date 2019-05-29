const {customElement} = Polymer.decorators;

@customElement('debug-panel')
export default class DebugPanel extends Polymer.Element {
    ready() {
		super.ready();
	}

	debugTeams(){
		nodecg.sendMessage('debugTeams');
	}
	
	debugBatters(){
		nodecg.sendMessage('debugBatters');
	}
	
	debugBowlers(){
		nodecg.sendMessage('debugBowlers');
	}

	debugCurrentInnings(){
		nodecg.sendMessage('debugCurrentInnings');
	}
	
	debugMatchData(){
		nodecg.sendMessage('debugMatchData');
	}	
}