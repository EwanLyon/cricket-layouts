import * as tslib_1 from "tslib";
const { customElement } = Polymer.decorators;
let ProdGraphics = class ProdGraphics extends Polymer.Element {
    ready() {
        super.ready();
    }
    showFullFrame() {
        nodecg.sendMessage('showFullFrame');
    }
    hideFullFrame() {
        nodecg.sendMessage('hideFullFrame');
    }
    showScorebug() {
        nodecg.sendMessage('showScorebug');
    }
    hideScorebug() {
        nodecg.sendMessage('hideScorebug');
    }
    showLocation() {
        nodecg.sendMessage('showLocation');
    }
    hideLocation() {
        nodecg.sendMessage('hideLocation');
    }
    showToss() {
        nodecg.sendMessage('showToss');
    }
    hideToss() {
        nodecg.sendMessage('hideToss');
    }
};
ProdGraphics = tslib_1.__decorate([
    customElement('prod-graphics')
], ProdGraphics);
export default ProdGraphics;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZC1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLEVBQUMsYUFBYSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUczQyxJQUFxQixZQUFZLEdBQWpDLE1BQXFCLFlBQWEsU0FBUSxPQUFPLENBQUMsT0FBTztJQUNyRCxLQUFLO1FBQ1AsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELGFBQWE7UUFDWixNQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxhQUFhO1FBQ1osTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsWUFBWTtRQUNYLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFlBQVk7UUFDWCxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxZQUFZO1FBQ1gsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsWUFBWTtRQUNYLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFFBQVE7UUFDUCxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxRQUFRO1FBQ1AsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0QsQ0FBQTtBQXBDb0IsWUFBWTtJQURoQyxhQUFhLENBQUMsZUFBZSxDQUFDO0dBQ1YsWUFBWSxDQW9DaEM7ZUFwQ29CLFlBQVkifQ==