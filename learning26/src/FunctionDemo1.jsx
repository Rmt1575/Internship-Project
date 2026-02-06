import React from 'react'

export const FunctionDemo1 = () => {
    const test1 = () => {
      alert("Function test1 is called...")
    }
    const test2 = (t2) => {
      alert("Value of x : "+t2)
    }
  return (
    <div style={{color:"whitesmoke" , textAlign:"center"}}>
        <h1>Function Demo 1</h1>
        <br/>
        <button onClick={test1}>CLICK 1</button>
        <button onClick={() => {test2(100)}}>CLICK 2</button>
    </div>
  )
}
