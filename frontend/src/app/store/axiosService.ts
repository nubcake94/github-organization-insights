/* eslint-disable no-param-reassign */
import axios, { AxiosInstance } from 'axios';

export const API_DOMAIN = '/api';

type tokenType = {
	// eslint-disable-next-line camelcase
	access_token: string;
	scope: string;
	// eslint-disable-next-line camelcase
	token_type: string;
};

class Axios {
	instance: AxiosInstance;

	constructor() {
		this.instance = axios.create({
			baseURL: API_DOMAIN,
		});
	}

	// eslint-disable-next-line class-methods-use-this
	refreshRequestHandler(token: tokenType | null) {
		this.instance = axios.create({
			baseURL: API_DOMAIN,
		});
		this.instance.interceptors.request.use((config) => {
			config.params = config.params || {};
			if (token) {
				Object.keys(token).forEach((key) => {
					config.params[key] = token[key];
				});
			}
			return config;
		});
	}
}

export default new Axios();
