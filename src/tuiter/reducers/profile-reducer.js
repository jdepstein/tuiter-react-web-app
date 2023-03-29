import { createSlice } from "@reduxjs/toolkit";
import {updateProfileThunk, findProfileThunk}
    from "../services/profile-thunks";

const initialState = {
    profile: {},
    loading: false
}
const profileSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findProfileThunk.pending]:
            (state) => {
                state.loading = true
                state.profile = []
            },
        [findProfileThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.profile = payload
            },
        [findProfileThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },

        [updateProfileThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const profileNdx = state.profile
                    .findIndex((t) => t.handle === payload.handle)
                state.tuits[profileNdx] = {
                    ...state.tuits[profileNdx],
                    ...payload
                }
            }
    },
    reducers: {}
});

export default profileSlice.reducer;