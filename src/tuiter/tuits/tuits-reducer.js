import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "profile_pic": "../../images/bob.jpg",
    "name": "Josh",
    "handle": "@ItsME",
};

const templateTuit = {
    ...currentUser,
    "post_date" : "2 min",
    "post_image": null,
    "post_image_text": null,
    "comment": 0,
    "liked": false,
    "like": 0,
    "retuit": 0,
    "type" : "regular",
    "retuit_info": null
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },

        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),

            })
        }
    }
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;