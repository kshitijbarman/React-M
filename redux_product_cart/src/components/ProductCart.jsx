import axios from "axios";
import React, { useEffect, useState } from "react";
import { LazyLoadImage  } from "react-lazy-load-image-component";
import { addCart } from "../redux/counterSlice/slice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';

const ProductCart = () => {
    const dispatch = useDispatch()
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // const res = await axios.get("https://fakestoreapi.com/products");
    // setData(res.data);
    try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data); // Update state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
   
  };
  useEffect(() => {
    fetchData();
  }, []);

  const sendData=(data)=>{
    dispatch(addCart(data))

  }

  const handleAddToCart = () => {
    toast.success("Item added to cart! 🛒");
    
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5 px-5">
       {data.map((item,index)=>(
        <div key={index} className="bg-white p-4 rounded-lg shadow-md ">
    
      <LazyLoadImage
        src={item.image}
        alt='image'
        className="w-[150px] h-[150px] object-cover rounded-md mx-auto"
      />
      
      <h4 className="text-lg font-semibold mt-2">{item.title.length > 10 ? item.title.substring(0, 10) + "..." : item.title}</h4>
      <h5 className="text-gray-600">category : {item.category}</h5>
      <p className="text-gray-600">₹ {item.price}</p>
     <button onClick={() => {sendData(item); handleAddToCart();}}  className="mt-2 bg-blue-500 text-white py-1 px-3 mr-6 rounded">
        Add to Cart
      </button>
      <button className="mt-2 bg-blue-500 text-white py-1 px-3 m-4 rounded">
        View Details
      </button>
       <ToastContainer autoClose={1000}/>
     </div>
       ))}
    </div>
  );
};
export default ProductCart;
