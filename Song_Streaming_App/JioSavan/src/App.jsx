import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LogInPage';


const router=createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path:'/login',
    element:<LoginPage/>
  },
  {
    path:'/sign-up',
    element:<SignUpPage/>
  },
  
])
const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App