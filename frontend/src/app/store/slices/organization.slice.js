import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosService from '../axiosService';
import { errorToast } from '../toast';

export const fetchOrganizations = createAsyncThunk('fetchOrganizations', async () => {
	try {
		const { data } = await axiosService.instance.get('/organization');
		return data;
	} catch (error) {
		errorToast('Az organization-ok lekérdezése nem sikerült! :(');
		throw error;
	}
});

const organizationSlice = createSlice({
	name: 'organization',
	initialState: {
		organizations: null,
		selectedIndex: null,
		isLoading: false,
	},
	reducers: {
		selectOrganization: (state, action) => {
			state.selectedIndex = action.payload;
		},
	},
	extraReducers: {
		[fetchOrganizations.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchOrganizations.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.organizations = action.payload;
		},
	},
});

export const selectOrganizations = ({
	organization: { organizations, selectedIndex, isLoading },
}) => ({ organizations, selectedIndex, isLoading });

export default organizationSlice.reducer;
