import React, {useState} from 'react'

const Temperature = () => {
  const [count, setCount]= useState("0")

  const increase =() =>{
    setCount(count+1);
  }
  const decrease =() =>{
    setCount(count-1);
  }
  return (
    <div className='containerDiv'>
      
      <h1>Temperature Controler</h1>

      <div className={`warper ${count < 0 ? "red" : "blue" }`}>
        <div className='main-wraper'>
        <h2>{count}</h2>
        <button className='gray-btn' onClick={increase}>+</button>
        <button className='gray-btn' onClick={decrease}>-</button>
        </div>
      </div>
        
        
      
    </div>
  )
}

export default Temperature
