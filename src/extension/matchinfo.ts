'use-strict';

import * as nodecgApiContext from './util/nodecg-api-context';
const nodecg = nodecgApiContext.get();

import {MatchInfo} from '../types/schemas/matchInfo'
const matchRep = nodecg.Replicant<MatchInfo>('match');

nodecg.listenFor('updateMatch', (data: MatchInfo) => {
    matchRep.value = data;
});