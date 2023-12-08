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
import UseParams from './08-12-2023/UseParams';
import DynamicRouting from './08-12-2023/DynamicRouting';
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
            <Route path='/useEffect' element={<UseEffect/>}/>
            <Route path='/useparams/:age' element={<UseParams/>}/>
            <Route path='/dynamic' element={<DynamicRouting/>}/>
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  )
}

export default App