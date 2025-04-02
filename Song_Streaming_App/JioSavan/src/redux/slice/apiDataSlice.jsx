import {createSlice} from '@reduxjs/toolkit'

const apiDataSlice=createSlice({
    name:"apiData",
    initialState:[],
    reducers:{
        addData(state,action){
           state.push(action.payload)
           console.log(action.payload)
        }
    }
})
export const {addData} = apiDataSlice.actions
export default apiDataSlice.reducer