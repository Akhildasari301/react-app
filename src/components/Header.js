import React from 'react'
import Navigation from './Navigation'
function Header() {
  return (
    <header className="flex justify-between items-center p-5">
      <span className="font-bold">
        AppName
      </span>
      <Navigation />
      
    </header>
  )
}

export default Header