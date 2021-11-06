import axios, { AxiosInstance } from 'axios';

export const API_DOMAIN = '/api';

class Axios {
	instance: AxiosInstance;

	constructor() {
		this.instance = axios.create({
			baseURL: API_DOMAIN,
		});
	}

	refreshRequestHandler(token: string | null) {
		// TODO refresh github given token here
	}
}

export default new Axios();