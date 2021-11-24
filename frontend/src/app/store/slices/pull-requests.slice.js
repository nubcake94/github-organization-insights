import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosService from '../axiosService';
import { errorToast } from '../toast';

export const fetchAssignedPullRequests = createAsyncThunk(
	'fetchAssignedPullRequests',
	async ({ repositoryName }) => {
		try {
			const { data } = await axiosService.instance.get(
				`/repository/${repositoryName}/assigned`
			);
			return data;
		} catch (error) {
			errorToast('A pull requestek lekérdezése nem sikerült');
			throw error;
		}
	}
);

const pullRequestsSlice = createSlice({
	name: 'pullRequest',
	initialState: {
		pullRequests: null,
		isLoading: false,
	},
	extraReducers: {
		[fetchAssignedPullRequests.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchAssignedPullRequests.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.pullRequests = action.payload;
		},
	},
});

export const selectPullRequests = ({ pullRequest: { pullRequests, isLoading } }) => ({
	pullRequests,
	isLoading,
});

export default pullRequestsSlice.reducer;
