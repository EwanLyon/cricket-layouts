'use-strict';

import fs = require('fs');
import path = require('path');

import * as nodecgApiContext from './util/nodecg-api-context';
import {Teams} from '../types/schemas/teams';

interface Asset {
	base: string;
	bundleName: string;
	category: string;
	ext: string;
	name: string;
	sum: string;
	url: string;
}

const nodecg = nodecgApiContext.get();

const teams = nodecg.Replicant<Teams>('teams');
const teamAssets = nodecg.Replicant<Asset[]>('assets:teams');

nodecg.listenFor('updateTeamFiles', () => {

    teams.value = [];

	try {
		teamAssets.value.forEach((teamFile: Asset) => {
			teams.value.push(JSON.parse(fs.readFileSync(path.join("Z:/Ewan/NodeCG/nodecg-master", teamFile.url), 'utf-8')));
		});
		
	} catch (error) {
        nodecg.log.error(error);
	}

});