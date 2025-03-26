import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";  // Import theme reducer

const store = configureStore({
  reducer: {
    theme: themeReducer,  
  },
});

export default store;
