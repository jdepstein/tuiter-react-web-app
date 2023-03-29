import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./profile-service"

export const findProfileThunk = createAsyncThunk(
    'profile/findProfile', async () => {
        return await service.findProfile()
    })

export const updateProfileThunk =
    createAsyncThunk(
        'profile/updateProfile',
        async (tuit) =>
            await service.updateProfile(tuit)
    )

