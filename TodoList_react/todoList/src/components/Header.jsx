import React from 'react'
import "./Header.css";

const Header=() => { 
    return (
    <div className ="Header"> 
    <h3>오늘의 Plan</h3>
    <h2>{new Date().toLocaleString()}</h2>
  </div>
)
  
}

export default Header