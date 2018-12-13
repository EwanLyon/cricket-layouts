"use strict";
'use-strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const util = require("util");
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
nodecg.listenFor('updateBatting', (data) => {
    nodecg.log.info("Batting team is: " + util.inspect(data));
});
nodecg.listenFor('updateFielding', (data) => {
    nodecg.log.info("Fielding team is: " + data.name);
});
//# sourceMappingURL=teamdata.js.map