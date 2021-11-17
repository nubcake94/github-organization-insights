import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import queryString from 'query-string';
import axiosService from '../axiosService';
import { errorToast } from '../toast';

export const login = createAsyncThunk('login', async ({ code }) => {
	try {
		const { REACT_APP_GITHUB_CLIENT_ID, REACT_APP_GITHUB_REDIRECT_URI } = process.env;
		const { data: token } = await axiosService.instance.post('/auth/login', {
			code,
			REACT_APP_GITHUB_CLIENT_ID,
			REACT_APP_GITHUB_REDIRECT_URI,
		});

		// eslint-disable-next-line camelcase
		const { access_token, scope, token_type } = queryString.parse(`?${token}`);
		// eslint-disable-next-line camelcase
		if (!access_token || !scope || !token_type) {
			throw Error('no success');
		}
		return { access_token, scope, token_type };
	} catch (error) {
		errorToast('A bejelentkezés nem sikerült :(');
		throw error;
	}
});

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		submitting: false,
		token: null,
		/* TODO add data later */
	},
	reducers: {
		setToken: (state, action) => {
			state.token = action.payload;
		},
		revertState: (state) => {
			state.submitting = false;
			state.token = null;
		},
	},
	extraReducers: {
		[login.pending]: (state) => {
			state.submitting = true;
		},
		[login.rejected]: (state) => {
			state.submitting = false;
		},
		[login.fulfilled]: (state, action) => {
			state.submitting = false;
			state.token = action.payload;
		},
	},
});

export const selectLoginSubmitting = (state) => state.auth.submitting;
export const selectToken = (state) => state.auth.token;
export const selectAuthState = ({ auth: { token, submitting } }) => ({ token, submitting });

const { revertState } = authSlice.actions;

export const logout = () => async (dispatch) => {
	window.localStorage.removeItem('github-organization-insights');
	dispatch(revertState());
	axiosService.refreshRequestHandler(null);
	window.location.replace('/');
};

export default authSlice.reducer;
