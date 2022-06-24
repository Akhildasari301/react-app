import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavigationMenu from './NavigationMenu'

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  let menu;
  let menuMask;
  if(showMenu) {
    menu = <div 
    className="fixed bg-white top-0 left-0 h-full w-4/5 shadow z-50">
      <NavigationMenu closeMenu={() => setShowMenu(false)}/>
    </div>

    menuMask = <div
    className="bg-black-t-50 fixed top-0 left-0 z-50 w-full h-full"
    onClick={() => {setShowMenu(false)}}
    ></div>
  }
  return (
    <nav>
      <FontAwesomeIcon 
        icon={faBars}
        onClick={() => {setShowMenu(!showMenu)}}
      />
      {menuMask}
      { menu }
    </nav>

  )
}

export default Navigation