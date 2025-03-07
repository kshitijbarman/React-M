import React from "react";
import { createBrowserRouter, RouterProvider,Navigate  } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const isAuthenticated = () => !!localStorage.getItem("isAuthenticated");


const router = createBrowserRouter([
   {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/",
        element: isAuthenticated() ? <Home /> : <Navigate  to="/login" />,
      },
      {
        path: "/about",
        element: isAuthenticated() ? <About /> : <Navigate  to="/login" />,
      },
      {
        path: "products",
        element: isAuthenticated() ? <Products /> : <Navigate  to="/login" />,
      },
      {
        path: "/contact",
        element: isAuthenticated() ? <Contact /> : <Navigate  to="/login" />,
      },
      {
        path: "/cart",
        element: isAuthenticated() ? <Cart /> : <Navigate  to="/login" />,
      }
    ]
   }
]);
const App = () => {
  return <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
    
  </Provider>
};
export default App;
