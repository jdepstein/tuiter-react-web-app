import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuit_sum.json';

const tuitsSumSlice = createSlice({
    name: 'tuits',
    initialState: tuits
});

export default tuitsSumSlice.reducer;