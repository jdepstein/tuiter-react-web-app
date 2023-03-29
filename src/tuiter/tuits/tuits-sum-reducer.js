import { createSlice } from "@reduxjs/toolkit";

import {findSummariesThunk}
    from "../services/summaries-thunk";

const initialState = {
    summaries: [],
    loading: false
}

const summariesSlice = createSlice({
    name: 'summaries',
    initialState,
    extraReducers: {
        [findSummariesThunk.pending]:
            (state) => {
                state.loading = true
                state.summaries = []
            },
        [findSummariesThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.summaries = payload
            },
        [findSummariesThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            }
    },
    reducers: {}
});


export default summariesSlice.reducer;