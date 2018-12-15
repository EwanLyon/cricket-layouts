"use strict";
'use-strict';
Object.defineProperty(exports, "__esModule", { value: true });
const nodecgApiContext = require("./util/nodecg-api-context");
const nodecg = nodecgApiContext.get();
const currentInningsRep = nodecg.Replicant('currentInnings');
// const teamsRep = nodecg.Replicant<Teams[]>('teams');
nodecg.listenFor('newInnings', (data) => {
    currentInningsRep.value.wickets = 0;
    currentInningsRep.value.runs = 0;
    currentInningsRep.value.over = 0;
    nodecg.log.info(currentInningsRep.opts.defaultValue);
    const bowlingTeam = data[0];
    const battingTeam = data[1];
    currentInningsRep.value.bowlingTeam = bowlingTeam.name;
    currentInningsRep.value.battingTeam = battingTeam.name;
    currentInningsRep.value.batters = battingTeam.players;
});
nodecg.listenFor('changeBowler', (newVal) => {
    console.log(newVal);
});
//# sourceMappingURL=currentmatch.js.map