import { configureStore } from "@reduxjs/toolkit";
import socialIconsReducer from "../slices/socialIconsSlice";
import experienceReducer from "../slices/experienceSlice";
import miniProjectsReducer from "../slices/miniProjectsSlice";
import projectsReducer from "../slices/projectsSlice";
import skillsReducer from "../slices/skillsSlice";
import educationReducer from "../slices/educationSlice";

export const store = configureStore({
    reducer:{
        socialIcons:socialIconsReducer,
        experience:experienceReducer,
        miniProjects:miniProjectsReducer,
        projects:projectsReducer,
        skills:skillsReducer,
        education:educationReducer,
    }
})