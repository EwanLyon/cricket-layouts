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
};
ProdGraphics = tslib_1.__decorate([
    customElement('prod-graphics')
], ProdGraphics);
export default ProdGraphics;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZC1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLEVBQUMsYUFBYSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUczQyxJQUFxQixZQUFZLEdBQWpDLE1BQXFCLFlBQWEsU0FBUSxPQUFPLENBQUMsT0FBTztJQUNyRCxLQUFLO1FBQ1AsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELGFBQWE7UUFDWixNQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxhQUFhO1FBQ1osTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQ0QsQ0FBQTtBQVpvQixZQUFZO0lBRGhDLGFBQWEsQ0FBQyxlQUFlLENBQUM7R0FDVixZQUFZLENBWWhDO2VBWm9CLFlBQVkifQ==