import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosService from '../axiosService';
import { errorToast } from '../toast';

export const fetchProfile = createAsyncThunk('fetchProfile', async () => {
	try {
		const { data } = await axiosService.instance.get('/profile');
		return data;
	} catch (error) {
		errorToast('A profil lekérdezése nem sikerült');
		throw error;
	}
});

const profileSlice = createSlice({
	name: 'profile',
	initialState: {
		user: null,
		isLoading: false,
	},
	extraReducers: {
		[fetchProfile.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchProfile.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.user = action.payload;
		},
	},
});

export const selectUser = ({ profile: { user, isLoading } }) => ({ user, isLoading });

export default profileSlice.reducer;
