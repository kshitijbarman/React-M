import {configureStore} from '@reduxjs/toolkit'
import  apiDataReducer from '../slice/apiDataSlice'
 
const store=configureStore({
    reducer:{
        apiData:apiDataReducer
    }
})

export default store