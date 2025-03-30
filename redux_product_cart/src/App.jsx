// import React from "react";
// import { createBrowserRouter, RouterProvider,Navigate  } from "react-router-dom";
// import AppLayout from "./layout/AppLayout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Products from "./pages/Products";
// import SignUpPage from "./pages/SignUpPage";
// import LoginPage from "./pages/LoginPage";
// import store from "./redux/store/store";
// import { Provider } from "react-redux";
// import Cart from "./components/Cart";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const isAuthenticated = () => !!localStorage.getItem("isAuthenticated");


// const router = createBrowserRouter([
//    {
//     path:'/',
//     element:<AppLayout/>,
//     children:[
//       {
//         path: "/login",
//         element: <LoginPage />,
//       },
//       {
//         path: "/sign-up",
//         element: <SignUpPage />,
//       },
//       {
//         path: "/",
//         element: isAuthenticated() ? <Home /> : <Navigate  to="/login" />,
//       },
//       {
//         path: "/about",
//         element: isAuthenticated() ? <About /> : <Navigate  to="/login" />,
//       },
//       {
//         path: "products",
//         element: isAuthenticated() ? <Products /> : <Navigate  to="/login" />,
//       },
//       {
//         path: "/contact",
//         element: isAuthenticated() ? <Contact /> : <Navigate  to="/login" />,
//       },
//       {
//         path: "/cart",
//         element: isAuthenticated() ? <Cart /> : <Navigate  to="/login" />,
//       }
//     ]
//    }
// ]);
// const App = () => {
//   return <Provider store={store}>
//     <RouterProvider router={router}></RouterProvider>
//     <ToastContainer />
    
//   </Provider>
// };
// export default App;









// import React from 'react'
// import "./App.css"
// import {useDispatch,useSelector} from 'react-redux'
// import {fetchProducts} from './redux/counterSlice/slice/Cart'
 

// const App = () => {
//   return (
//     <div className='App'>
//         <button onClick={e=>dispatch(fetchProducts)}>Fetch Products</button>
//     </div>
//   )
// }

// export default App












import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './redux/counterSlice/slice';

const App = () => {
  const dispatch = useDispatch();
  // const { data, isLoading, isError } = useSelector((state) => state.cart);
  const state = useSelector((state)=>state)
  console.log('state',state)

  if(state.cart.isLoading){
    return <h1>........Loading...........</h1>
  }

  return (
    // <div className='App'>
    //   <button onClick={() => dispatch(fetchProducts())}>Fetch Products</button>

    //   {isLoading && <p>Loading...</p>}
    //   {isError && <p>Error fetching products!</p>}
      
    //   {data && (
    //     <ul>
    //       {data.map((product) => (
    //         <li key={product.id}>{product.title}</li>
    //       ))}
    //     </ul>
    //   )}
    // </div>


    <div>
      <button className='border' onClick={(e)=>dispatch(fetchProducts())}>Fetch Products</button>
      {state.cart.data && state.cart.data.map(e=><li>{e.title}</li>)}
    </div>
  );
};

export default App;
