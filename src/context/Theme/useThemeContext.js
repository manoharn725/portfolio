import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export const useTheme = () => useContext(ThemeContext);
// export const useTheme = () => {
//     return useContext(ThemeContext);
//   };