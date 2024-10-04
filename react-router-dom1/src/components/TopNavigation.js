import React from 'react'
import { Link } from 'react-router-dom'

function TopNavigation () {
  return (
    <nav>
        <Link to="/">HomeBoard</Link>
        <Link to="/flower">Flower</Link>
        <Link to="/fruits">Fruits</Link>
        <Link to="/animals">Animals</Link>
        <Link to="/">Signout</Link>

      
    </nav>
  )
}

export default TopNavigation
