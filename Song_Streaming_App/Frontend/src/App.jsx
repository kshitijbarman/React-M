import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import AlbumDetails from './pages/AlbumDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/albums/:id' element={<AlbumDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App