import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../data/profile.json";

const ProfileSlice = createSlice({
    name: "profile",
    initialState: whoArray
});

export default ProfileSlice.reducer;