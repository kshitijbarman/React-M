import React, { useContext } from 'react'
import { shopContext } from '../context/shopContext'

const LatestCollections = () => {
    const {products} =useContext(shopContext)
    console.log(products)
  return (
    <div>LatestCollections</div>
  )
}

export default LatestCollections