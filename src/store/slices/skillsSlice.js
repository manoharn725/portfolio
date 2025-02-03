import { createSlice } from "@reduxjs/toolkit";
import { skills } from "../api/skills";

const skillsSlice = createSlice({
  name: "skills",
  initialState: skills,
  reducers: {},
});

export const skillsReducer = skillsSlice.reducer;
