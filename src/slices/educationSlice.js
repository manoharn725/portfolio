import { createSlice } from "@reduxjs/toolkit";
import { education } from "../api/education";

const educationSlice = createSlice({
    name:'education',
    initialState:education,
    reducers:{

    }
})

export default educationSlice.reducer;