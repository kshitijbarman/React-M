import React from 'react'
import Navbar from './components/Navbar'
import Create from './components/Create'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Create />} />
        {/* <Route exact path="/read" element={<Read />} /> */}
        {/* <Route exact path="/edit/:id" element={<Update />} /> */}
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App