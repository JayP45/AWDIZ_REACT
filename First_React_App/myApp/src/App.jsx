import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import NoPageFound from './Components/NoPageFound';
import Footer from './Components/Footer';
import Counter from './Components/Counter';
import UseEffect from './Components/UseEffect';
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
            <Route path='/counter' element={<Counter/>}/>
            <Route path='/use' element={<UseEffect/>}/>
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  )
}

export default App