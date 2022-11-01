import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Dropdown({ menu }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const menuAbout = [
    {
      title: 'BOARD OF DIRECTOR',
      path: '/bod',
      cName: 'dropdown-link'
    },
    {
      title: 'MANAGEMENT TEAM',
      path: '/management',
      cName: 'dropdown-link'
    },
    {
      title: 'CORPORATE GOVERNANCE',
      path: '/corporate',
      cName: 'dropdown-link'
    },
    // {
    //   title: 'HSSEQ',
    //   path: '/hsseq',
    //   cName: 'dropdown-link'
    // },
    {
      title: 'COVID 19 RESPONSES',
      path: '/covid',
      cName: 'dropdown-link'
    },
  ]

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <div className='title-logo'>

            </div>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li 
              className='nav-item' 
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave} 
            >
              <Link
                to='/about-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ABOUT US <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: 10 }} />
              </Link>
              {dropdown && <Dropdown menu={menuAbout} />}
            </li>
            <li className='nav-item'>
              <Link
                to='/operations'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                OUR OPERATIONS
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/investor'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                INVESTOR RELATIONS
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/sustainability'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SUSTAINABILITY
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/career'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                CAREER
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                CONTACT US
              </Link>
            </li>

            {/* <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
