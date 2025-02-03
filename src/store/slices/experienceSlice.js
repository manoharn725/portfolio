import { createSlice } from "@reduxjs/toolkit";
import { experience } from "../api/experience";

const experienceSlice = createSlice({
  name: "experience",
  initialState: experience,
  reducers: {},
});

export const experienceReducer = experienceSlice.reducer;
