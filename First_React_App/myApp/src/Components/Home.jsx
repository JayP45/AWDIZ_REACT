import React, { useContext } from 'react'
import { MyContext } from '../context/AuthContext'
const Home = () => {
  const {state} = useContext(MyContext)

  return (
    <>
      <h1 style={{textAlign:'center',border:'1px solid black'}}>Home State value:{state.test}</h1>
    </>
  )
}

export default Home