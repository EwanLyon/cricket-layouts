"use strict";
'use-strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const nodecgApiContext = require("./util/nodecg-api-context");
const nodecg = nodecgApiContext.get();
const teams = nodecg.Replicant('teams');
const teamAssets = nodecg.Replicant('assets:teams');
nodecg.listenFor('updateTeamFiles', () => {
    teams.value = [];
    try {
        teamAssets.value.forEach((teamFile) => {
            teams.value.push(JSON.parse(fs.readFileSync(path.join("Z:/Ewan/NodeCG/nodecg-master", teamFile.url), 'utf-8')));
        });
    }
    catch (error) {
        nodecg.log.error(error);
    }
});
//# sourceMappingURL=teamdata.js.map