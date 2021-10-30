import React, {useState} from 'react';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 1400) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton)
  return (

     <nav className="navbar">
       <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            {/* <span className={click ? 'transisi-atas' : 'normal'}></span>
            <span className={click ? 'transisi-bawah' : 'normal'}></span> */}
          </div>
          <a href="/" className="navbar-logo">
            <i className="fas fa-plane"></i>
          </a>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Pura Lempuyang
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Pura Ulun Danu Batur
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Pura Tanah Lot
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Pura Taman Ayun
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Pura Besakih
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Pura Tirta Gangga
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Pura Tirta Empul
              </a>
            </li>
          </ul>
            <a href="/" className="nav-links" onClick={closeMobileMenu}>
              <i className="fas fa-search"></i>
            </a>
          {button}
       </div>
     </nav>

  )
}

export default Navbar
