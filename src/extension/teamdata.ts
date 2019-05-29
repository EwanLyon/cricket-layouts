'use-strict';

// Node
import fs = require('fs');
import path = require('path');

// NodeCG
import * as nodecgApiContext from './util/nodecg-api-context';

// Mine
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

const teams = nodecg.Replicant<Teams[]>('teamsList');
const teamAssets = nodecg.Replicant<Asset[]>('assets:teams');

nodecg.listenFor('updateTeamFiles', () => {
	nodecg.log.info('Updating team files');
    let teamsArray: Teams[] = [];

	try {
		teamAssets.value.forEach(teamFile => {
			nodecg.log.info('Adding ' + teamFile.url);
			teamsArray.push(JSON.parse(fs.readFileSync(path.join(process.cwd(), teamFile.url)).toString()));
		});
		teams.value = teamsArray;
	} catch (error) {
        nodecg.log.error("Failed loading team data: " + error);
	}
});