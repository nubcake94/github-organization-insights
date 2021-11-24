import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosService from '../axiosService';
import { errorToast } from '../toast';

export const fetchCollaboratedRepos = createAsyncThunk(
	'fetchCollaboratedRepos',
	async ({ organizationLogin }) => {
		try {
			const { data } = await axiosService.instance.get(
				`/repository/${organizationLogin}/collaborated`
			);
			return data;
		} catch (error) {
			errorToast('A repository-k lekérdezése nem sikerült!');
			throw error;
		}
	}
);

const repositorySlice = createSlice({
	name: 'repository',
	initialState: {
		repositories: null,
		selectedIndex: null,
		isLoading: false,
	},
	reducers: {
		selectRepository: (state, action) => {
			state.selectedIndex = action.payload;
		},
	},
	extraReducers: {
		[fetchCollaboratedRepos.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchCollaboratedRepos.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.repositories = action.payload;
		},
	},
});

export const selectRepositories = ({ repository: { repositories, selectedIndex, isLoading } }) => ({
	repositories,
	selectedIndex,
	isLoading,
});

export const { selectRepository } = repositorySlice.actions;

export default repositorySlice.reducer;
