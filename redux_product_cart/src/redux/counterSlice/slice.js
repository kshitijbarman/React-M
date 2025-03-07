import { createSlice } from "@reduxjs/toolkit";

const cartSystem = createSlice({
  name: "Cart",
  initialState: {
    items:[],
  },
  reducers: {
    addCart(state, action) {
      // console.log(action.payload)
      state.items.push(action.payload)
    },
    removeCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});
export default cartSystem.reducer;

export const {addCart,removeCart} = cartSystem.actions
