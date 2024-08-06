import React, { useState } from 'react';
import "./navigation.css";
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';

const Navigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className={`nav-main ${showMobileMenu ? "active": "inactive"}`}>
        <ul className='nav__links'>
            <li>
                <a href="#">Company</a>
                <nav className='sub'>
                    <a href="#">Practices</a>
                    <a href="#">Process</a>
                    <a href="#">People</a>
                </nav>
            </li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Clients</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div className="nav__icons" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <RiMenuLine  color='#fff' className='icon--menu' size={30} />
          <RiCloseLine  color='#fff' className='icon--close' size={30} />
        </div>
    </nav>
  )
}

export default Navigation