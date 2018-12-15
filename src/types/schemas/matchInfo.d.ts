/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface MatchInfo {
	/**
	 * Location of game as {Stadium/Ground Name, City}
	 */
	venue?: string;
	/**
	 * Who won the toss and what they started as '{Team} won and chose, elected to {bat/bowl}'
	 */
	toss?: string;
	/**
	 * Date when the match began
	 */
	startDate?: string;
	/**
	 * First two are fielding umpires, 3rd is the 3rd umpire, 4th is referee
	 */
	umpires?: string[];
	/**
	 * CUrrent state of pitch, e.g. Rough or Flat
	 */
	pitchState?: string;
	/**
	 * Current fielding ground state, e.g. Slow
	 */
	surfaceState?: string;
	/**
	 * Current weather conditions, e.g. Fine
	 */
	weather?: string;
	[k: string]: any;
}