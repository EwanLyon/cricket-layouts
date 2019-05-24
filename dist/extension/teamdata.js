"use strict";
'use-strict';
Object.defineProperty(exports, "__esModule", { value: true });
// Node
const fs = require("fs");
const path = require("path");
// NodeCG
const nodecgApiContext = require("./util/nodecg-api-context");
const nodecg = nodecgApiContext.get();
const teams = nodecg.Replicant('teamsList');
const teamAssets = nodecg.Replicant('assets:teams');
nodecg.listenFor('updateTeamFiles', () => {
    nodecg.log.info('Updating team files');
    let teamsArray = [];
    try {
        teamAssets.value.forEach((teamFile) => {
            nodecg.log.info('Adding ' + teamFile.url);
            teamsArray.push(JSON.parse(fs.readFileSync(path.join("R:/Programming/NodeCG/nodecg", teamFile.url), 'utf-8')));
        });
        teams.value = teamsArray;
    }
    catch (error) {
        nodecg.log.error("Failed loading team data: " + error);
    }
});
//# sourceMappingURL=teamdata.js.map