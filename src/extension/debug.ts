'use-strict';

import * as nodecgApiContext from './util/nodecg-api-context';
const nodecg = nodecgApiContext.get();
import {inspect} from 'util';
import { Teams } from '../types/schemas/teams';
import { CurrentInnings } from '../types/schemas/currentInnings';
import { MatchInfo } from '../types/schemas/matchInfo';
import { Over } from '../types/schemas/over';

const teamsRep = nodecg.Replicant<Teams>('teamsList');
const currentInningsRep = nodecg.Replicant<CurrentInnings>('currentInnings');
const matchRep = nodecg.Replicant<MatchInfo>('match');
const overRep = nodecg.Replicant<Over>('over');

nodecg.listenFor('debugTeams', () => {
	nodecg.log.info('Debugging Teams');
	nodecg.log.info(inspect(teamsRep.value, false, null, true));
});

nodecg.listenFor('debugBatters', () => {
	nodecg.log.info('Debugging Batters');
	nodecg.log.info(inspect(currentInningsRep.value.batters, false, null, true));
});

nodecg.listenFor('debugBowlers', () => {
	nodecg.log.info('Debugging Bowlers');
	nodecg.log.info(inspect(currentInningsRep.value.bowlers, false, null, true));
});

nodecg.listenFor('debugCurrentInnings', () => {
	nodecg.log.info('Debugging Current Innings');
	let {batters, battingTeam, bowlers, bowlingTeam, ...matchData} = currentInningsRep.value;
	nodecg.log.info(inspect(matchData, false, null, true));
});

nodecg.listenFor('debugMatchData', () => {
	nodecg.log.info('Debugging Match Data');
	nodecg.log.info(inspect(matchRep.value, false, null, true));
});

nodecg.listenFor('debugOver', () => {
	nodecg.log.info('Debugging Over');
	nodecg.log.info(inspect(overRep.value, false, null, true));
});
