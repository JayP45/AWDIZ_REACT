import React,{ useEffect, useState } from 'react'

const App = () => {
  const [count,setCount] = useState(0)

  useEffect(()=>{
    setTimeout(()=>{
      alert('hello i am alert')
    },5000)
  })
  return (
    <>
      {count}
      <button onClick={()=>setCount(count+1)}>Click me</button>
      {count}
      <button onClick={()=>setCount(count-1)}>Click me</button>
    </>
  )
}

export default App