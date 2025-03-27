import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";  // Import theme reducer
import searchSlice from './searchSlice'
import signupDatasclice from './signupDataSlice'

const store = configureStore({
  reducer: {
    theme: themeReducer,  
    search: searchSlice,
    data:signupDatasclice
  },
});

export default store;
