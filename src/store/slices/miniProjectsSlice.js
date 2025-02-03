import { createSlice } from "@reduxjs/toolkit";
import { miniProjects } from "../api/miniProjects";

const miniPorjectsSlice = createSlice({
  name: "miniProjects",
  initialState: miniProjects,
  reducers: {},
});

export const miniProjectsReducer = miniPorjectsSlice.reducer;
