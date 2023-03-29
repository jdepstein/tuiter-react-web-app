import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./summaries-service"

export const findSummariesThunk = createAsyncThunk(
    'summaries/findSummaries', async () => {
        return await service.findSummaries()

    }
)