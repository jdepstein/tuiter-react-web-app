import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../data/profile.json";

const ProfileSlice = createSlice({
    name: "profile",
    initialState: whoArray,

    reducers: {
        updateProfile(state, action) {
            const profile_index = 0
            state[profile_index] = action.payload

        }
    }
});

export const {updateProfile} = ProfileSlice.actions;

export default ProfileSlice.reducer;