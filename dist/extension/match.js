"use strict";
'use-strict';
Object.defineProperty(exports, "__esModule", { value: true });
const nodecgApiContext = require("./util/nodecg-api-context");
const nodecg = nodecgApiContext.get();
const matchRep = nodecg.Replicant('match');
nodecg.listenFor('updateMatch', (data) => {
    matchRep.value = data;
});
//# sourceMappingURL=match.js.map