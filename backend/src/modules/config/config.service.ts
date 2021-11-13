import Joi from '@hapi/joi';
import * as dotenv from 'dotenv';
// eslint-disable-next-line import/order
import * as fs from 'fs';
import { EnvConfig } from './env-config.interface';
import DEFAULTS from './env-defaults';

export class ConfigService {
	private readonly envConfig: EnvConfig;

	constructor() {
		if (process.env.NODE_ENV === 'production') {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			this.envConfig = process.env;
		} else {
			const config = dotenv.parse(fs.readFileSync('.env'));
			this.envConfig = this.validateInput(config);
		}
	}

	private validateInput(envConfig: dotenv.DotenvParseOutput): EnvConfig {
		const envVarsSchema: Joi.ObjectSchema = Joi.object(DEFAULTS);
		const { error, value: validatedEnvConfig } = envVarsSchema.validate(envConfig);
		if (error) {
			throw new Error(`Config validation error: ${error.details[0].message}`);
		}
		return validatedEnvConfig;
	}

	get<K extends keyof EnvConfig>(key: K) {
		return this.envConfig[key];
	}
}
