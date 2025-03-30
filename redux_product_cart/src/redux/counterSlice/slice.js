// import { createSlice } from "@reduxjs/toolkit";

// const cartSystem = createSlice({
//   name: "Cart",
//   initialState: {
//     items:[],
//   },
//   reducers: {
//     addCart(state, action) {
//       // console.log(action.payload)
//       state.items.push(action.payload)
//     },
//     removeCart(state, action) {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//   },
// });
// export default cartSystem.reducer;

// export const {addCart,removeCart} = cartSystem.actions





























import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProducts=createAsyncThunk('fetchProducts',async()=>{
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
})



const cartSystem = createSlice({
  name: "Cart",
  initialState: {
    isLoading:false,
    data:null,
    isError :false,
  },

  extraReducers:(builder)=>{
    builder.addCase(fetchProducts.pending,(state,action)=>{
      state.isLoading=true;
    });
    builder.addCase(fetchProducts.fulfilled,(state,action)=>{
      state.isLoading=false;
      state.data=action.payload;
    });
    builder.addCase(fetchProducts.rejected,(state,action)=>{
      console.log('error',action.payload);
      state.isError=true;
    })
  }
});
export default cartSystem.reducer;





