import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import NoPageFound from './Components/NoPageFound';
import Footer from './Components/Footer';
const App = () => {
  return (
    <>
      <div className="App">
        <Router>
        <Navbar />
          <Routes>
            <Route  path='*' element={<NoPageFound />} />
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  )
}

export default App