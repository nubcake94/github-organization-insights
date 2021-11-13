import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
		return token;
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

const { revertState } = authSlice.actions;

export const logout = () => async (dispatch) => {
	window.localStorage.removeItem('github-organization-insights');
	dispatch(revertState());
	// axiosService refresh request handler
	window.location.replace('/');
};

export default authSlice.reducer;