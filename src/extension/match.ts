'use-strict';

import * as nodecgApiContext from './util/nodecg-api-context';
const nodecg = nodecgApiContext.get();

import {Match} from '../types/schemas/match'
const matchRep = nodecg.Replicant<Match>('match');

nodecg.listenFor('updateMatch', (data: Match) => {
    matchRep.value = data;
});