'use strict';

import {NodeCG} from '../../../../../types/server';

let context: NodeCG;

export function get() {
	return context;
}

export function set(ctx: NodeCG) {
	context = ctx;
}
