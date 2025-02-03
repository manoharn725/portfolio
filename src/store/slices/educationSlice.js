import { createSlice } from "@reduxjs/toolkit";
import { education } from "../api/education";

const educationSlice = createSlice({
  name: "education",
  // testing
  // initialState: {
  //   education: {
  //     schoolIcon: "",
  //     schoolImage: "",
  //     schoolName: "",
  //     course: "",
  //     schoolUrl: "",
  //   },
  // },
  initialState: education,
  reducers: {
    // testing
    // addEducation: (state, action) => {
    //   state.education.schoolIcon = action.payload.schoolIcon;
    //   state.education.schoolImage = action.payload.schoolImage;
    //   state.education.schoolName = action.payload.schoolName;
    //   state.education.course = action.payload.course;
    //   state.education.schoolUrl = action.payload.schoolUrl;
    // },
  },
});

export const { addEducation } = educationSlice.actions;

export const educationReducer = educationSlice.reducer;
