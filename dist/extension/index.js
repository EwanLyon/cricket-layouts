'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const nodecgApiContext = require("./util/nodecg-api-context");
module.exports = (nodecg) => {
    // Store a reference to this nodecg API context in a place where other libs can easily access it.
    // This must be done before any other files are `require`d.
    nodecgApiContext.set(nodecg);
    init().then(() => {
        nodecg.log.info('Initialization successful.');
    }).catch(error => {
        nodecg.log.error('Failed to initialize:', error);
    });
};
async function init() {
    require('./teamdata');
    require('./matchsetup');
    require('./currentmatch');
    require('./debug');
}
//# sourceMappingURL=index.js.map