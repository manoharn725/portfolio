import { createSlice } from "@reduxjs/toolkit";
import { socialIcons } from "../api/socialIcons";

const socialIconsSlice = createSlice({
  name: "socialIcons",
  initialState: socialIcons,
  reducers: {},
});

export default socialIconsSlice.reducer;
