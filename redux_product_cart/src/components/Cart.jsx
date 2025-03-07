import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../redux/counterSlice/slice"; 
import { MdDeleteForever } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const Cart = () => {
 const cartData =  useSelector((state)=>state.cart.items)
 const dispatch = useDispatch();
 console.log(cartData)
  const removeData=(id)=>{
      dispatch(removeCart(id))
      // toast.error("Item removed from cart ❌");
      alert("Item removed from cart ❌")
  }
  
  
  return (
    <section className="h-100 gradient-custom">
    <div className="container py-5">
      <div className="row d-flex justify-content-center my-4">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Cart - {cartData.length} items</h5>
            </div>


            <div className="card-body">
               {cartData.map((item, index) => (
                <div key={index}>
                  <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div className="bg-image hover-overlay hover-zoom ripple rounded">
                        <img src={item.image} className="w-20 mx-auto" alt={item.name} />
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p><strong>{item.title}</strong></p>
                      <p>Category: {item.category}</p>
                      <p>Rating: {item.rating.rate}</p>
                      <div>
                      <button onClick={()=>{removeData(item.id)}} type="button" className="btn btn-primary btn-sm me-1 mb-2">
                      <MdDeleteForever />
                      </button>
                      <ToastContainer/>
                      
                      </div>
                      <button type="button" className="btn btn-danger btn-sm mb-2">
                      <FaRegHeart />
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                        <button className="btn btn-primary px-3 me-2">
                          <i className="fas fa-minus"></i>
                        </button>
                        <input min="0" name="quantity" defaultValue="1" type="number" className="form-control" />
                        <button className="btn btn-primary px-3 ms-2">
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                      <p className="text-start text-md-center">
                        <strong>{item.price}</strong>
                      </p>
                    </div>
                  </div>
                  {index === 0 && <hr className="my-4" />}
                </div>
              ))}
            </div>
          </div>












          <div className="card mb-4">
            <div className="card-body">
              <p><strong>Expected shipping delivery</strong></p>
              <p className="mb-0">12.10.2020 - 14.10.2020</p>
            </div>
          </div>
          <div className="card mb-4 mb-lg-0">
            <div className="card-body flex">
              <p><strong>We accept</strong></p>
              {["visa", "amex", "mastercard", "paypal"].map((card, index) => (
                <img key={index} className="me-2" width="45px" src={`https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/${card}.svg`} alt={card} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Summary</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products <span>$53.98</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping <span>Gratis</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <p className="mb-0">(including VAT)</p>
                  </div>
                  <span><strong>$53.98</strong></span>
                </li>
              </ul>
              <button type="button" className="btn btn-primary btn-lg btn-block">
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Cart

















