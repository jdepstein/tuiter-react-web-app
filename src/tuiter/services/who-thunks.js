import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./who-service"

export const findWhoThunk = createAsyncThunk(
    'who/findWho', async () => {
        return await service.findWho()

    }
)