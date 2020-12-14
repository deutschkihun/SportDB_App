import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {openSidebar,openSubmenu,closeSubmenu} = useGlobalContext()

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom -3
    
    openSubmenu(page, {center,bottom})
  }

  const handleSubmenu = (e) => {
    if(!e.target.classList.contains('link-btn')){
    // it mean wenn mouse cursor is not moving over links-btn , then close submenu
    closeSubmenu()}
  }

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <h3>SportDB application</h3>
          </a>
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars /> 
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>Sport Search</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>Your Page</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>Information</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
