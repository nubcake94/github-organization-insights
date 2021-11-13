import Joi from '@hapi/joi';

const envDefaults = {
	NODE_ENV: Joi.string().default('development'),
	PORT: Joi.number().default(5000),
	REACT_APP_CLIENT_SECRET: Joi.string().required(),
	RATE_LIMITER_WINDOWS_MS: Joi.number(),
	RATE_LIMITER_MAX_REQUESTS_PER_WINDOW: Joi.number(),
} as const;

export default envDefaults;
