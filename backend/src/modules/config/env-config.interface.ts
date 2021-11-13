import * as Joi from '@hapi/joi';
import DEFAULTS from './env-defaults';

type EnvDefaults = typeof DEFAULTS;

// only supports primitives at the moment
export type EnvConfig = {
	[P in keyof EnvDefaults]: EnvDefaults[P] extends Joi.NumberSchema
		? number
		: EnvDefaults[P] extends Joi.StringSchema
		? string
		: any;
};
