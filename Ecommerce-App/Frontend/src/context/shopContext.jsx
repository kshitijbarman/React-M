// const { createContext } = require("react");
import { createContext } from 'react';
import {products} from '../assets/frontend_assets/assets'

export  const shopContext = createContext()

const shopContextProvider =(props)=>{

    const currency = '₹';
    const delivery_fee=10
    const value={
        products,currency,delivery_fee
    }
    return (
        <shopContext.Provider value={value}>
            {props.children}
        </shopContext.Provider>
    )
}

export default shopContextProvider;