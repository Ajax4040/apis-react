import React from 'react'
import './Header.css'
import Nav from '../Nav/Nav'

function Header() {
  return (
    <div className='header'>
        <h1 style={{color: 'red'}}>Header</h1>
        <Nav/>
    </div>
  )
}

export default Header
