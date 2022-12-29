import React from 'react'
import './header.css'

const Header = () => {
    return (
        <>
        <div className="header">
        <a href="#default" className="logo">CompanyLogo</a>
        <div className="header-right">
          <a className="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
      
      <div >
        <h1>Responsive Header</h1>
        <p>Resize the browser window to see the effect.</p>
        <p>Some content..</p>
      </div>
      </>
    )
}

export default Header
