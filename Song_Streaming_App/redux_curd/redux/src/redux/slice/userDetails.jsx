// import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

// export const createUser= createAsyncThunk("createUser",async(data,{rejectWithValue})=>{
//     const response =await fetch("https://67e63e456530dbd3110f2c6c.mockapi.io/crud",{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body: JSON.stringify(data)
//     });

//     try{
//         const result= await response.json();
//         return result
//     }catch(error){
//        return rejectWithValue("error")
//     }
// })





// export const userDetails=createSlice({
//     name:"userDetails",
//     initialState:{
//         user:[],
//         loading:false,
//         error:null,
//     },

//     extraReducers:{
//         [createUser.pending]:(state,action)=>{
//             state.loading=false;
//             state.user.push(action.payload)
//         },
//         [createUser.rejected]:(state,action)=>{
//             state.loading=false;
//             state.user = action.payload
//         },
//     }
// });


// export default userDetails.reducer








import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch("https://67e63e456530dbd3110f2c6c.mockapi.io/crud", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userDetails = createSlice({
  name: "userDetails",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userDetails.reducer;





















































// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// //create action
// export const createUser = createAsyncThunk(
//   "createUser",
//   async (data, { rejectWithValue }) => {
//     console.log("data", data);
//     const response = await fetch(
//       "https://641dd63d945125fff3d75742.mockapi.io/crud",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );

//     try {
//       const result = await response.json();
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// //read action
// export const showUser = createAsyncThunk(
//   "showUser",
//   async (args, { rejectWithValue }) => {
//     const response = await fetch(
//       "https://641dd63d945125fff3d75742.mockapi.io/crud"
//     );

//     try {
//       const result = await response.json();
//       console.log(result);
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
// //delete action
// export const deleteUser = createAsyncThunk(
//   "deleteUser",
//   async (id, { rejectWithValue }) => {
//     const response = await fetch(
//       `https://641dd63d945125fff3d75742.mockapi.io/crud/${id}`,
//       { method: "DELETE" }
//     );

//     try {
//       const result = await response.json();
//       console.log(result);
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// //update action
// export const updateUser = createAsyncThunk(
//   "updateUser",
//   async (data, { rejectWithValue }) => {
//     console.log("updated data", data);
//     const response = await fetch(
//       `https://641dd63d945125fff3d75742.mockapi.io/crud/${data.id}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );

//     try {
//       const result = await response.json();
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const userDetail = createSlice({
//   name: "userDetail",
//   initialState: {
//     users: [],
//     loading: false,
//     error: null,
//     searchData: [],
//   },

//   reducers: {
//     searchUser: (state, action) => {
//       console.log(action.payload);
//       state.searchData = action.payload;
//     },
//   },

//   extraReducers: {
//     [createUser.pending]: (state) => {
//       state.loading = true;
//     },
//     [createUser.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.users.push(action.payload);
//     },
//     [createUser.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.message;
//     },
//     [showUser.pending]: (state) => {
//       state.loading = true;
//     },
//     [showUser.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.users = action.payload;
//     },
//     [showUser.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     [deleteUser.pending]: (state) => {
//       state.loading = true;
//     },
//     [deleteUser.fulfilled]: (state, action) => {
//       state.loading = false;
//       const { id } = action.payload;
//       if (id) {
//         state.users = state.users.filter((ele) => ele.id !== id);
//       }
//     },
//     [deleteUser.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     [updateUser.pending]: (state) => {
//       state.loading = true;
//     },
//     [updateUser.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.users = state.users.map((ele) =>
//         ele.id === action.payload.id ? action.payload : ele
//       );
//     },
//     [updateUser.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.message;
//     },
//   },
// });

// export default userDetail.reducer;

// export const { searchUser } = userDetail.actions;