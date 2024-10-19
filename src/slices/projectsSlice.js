import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../api/projects";

const projectsSlice = createSlice({
    name:"projects",
    initialState:projects,
    reducers:{

    }
})

export default projectsSlice.reducer;