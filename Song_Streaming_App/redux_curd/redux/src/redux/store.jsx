import {configureStore} from '@reduxjs/toolkit'
import userDetails from './slice/userDetails';

const store = configureStore({
    reducer:{
       app:userDetails
    }
})

export default store