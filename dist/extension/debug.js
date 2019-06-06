"use strict";
'use-strict';
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const nodecgApiContext = require("./util/nodecg-api-context");
const nodecg = nodecgApiContext.get();
const util_1 = require("util");
const teamsRep = nodecg.Replicant('teamsList');
const currentInningsRep = nodecg.Replicant('currentInnings');
const matchRep = nodecg.Replicant('match');
const overRep = nodecg.Replicant('over');
nodecg.listenFor('debugTeams', () => {
    nodecg.log.info('Debugging Teams');
    nodecg.log.info(util_1.inspect(teamsRep.value, false, null, true));
});
nodecg.listenFor('debugBatters', () => {
    nodecg.log.info('Debugging Batters');
    nodecg.log.info(util_1.inspect(currentInningsRep.value.batsmen, false, null, true));
});
nodecg.listenFor('debugBowlers', () => {
    nodecg.log.info('Debugging Bowlers');
    nodecg.log.info(util_1.inspect(currentInningsRep.value.bowlers, false, null, true));
});
nodecg.listenFor('debugCurrentInnings', () => {
    nodecg.log.info('Debugging Current Innings');
    let _a = currentInningsRep.value, { batsmen, battingTeam, bowlers, bowlingTeam } = _a, matchData = tslib_1.__rest(_a, ["batsmen", "battingTeam", "bowlers", "bowlingTeam"]);
    nodecg.log.info(util_1.inspect(matchData, false, null, true));
});
nodecg.listenFor('debugMatchData', () => {
    nodecg.log.info('Debugging Match Data');
    nodecg.log.info(util_1.inspect(matchRep.value, false, null, true));
});
nodecg.listenFor('debugOver', () => {
    nodecg.log.info('Debugging Over');
    nodecg.log.info(util_1.inspect(overRep.value, false, null, true));
});
//# sourceMappingURL=debug.js.map