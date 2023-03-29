import { createSlice } from "@reduxjs/toolkit";

import {findWhoThunk}
    from "../services/who-thunks";

const initialState = {
    who: [],
    loading: false
}

const whoSlice = createSlice({
    name: 'who',
    initialState,
    extraReducers: {
        [findWhoThunk.pending]:
            (state) => {
                state.loading = true
                state.who = []
            },
        [findWhoThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.who = payload
            },
        [findWhoThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
    },
    reducers: {}
});
export default whoSlice.reducer;