import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../scss/header.scss';

function Header() {
    const [headerBackground, setHeaderBackground] = useState(true);
    const changeBackground = () => {
        if (window.scrollY > 0) 
            setHeaderBackground(false);
        else
            setHeaderBackground(true);
        }
    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        }
    }, []);
    return (
        <header className={headerBackground ? 'header' : 'header-pinned'}>
            <div className='logo'>
                <Link to='/'>
                    <img src={require('../assets/Logo.svg').default} alt='Logo' width='100' height='100'/>
                </Link>
            </div>
            <div className='navbar'>
                <Link className='navbar-item' to='/'>
                    HOME
                </Link>
                <Link className='navbar-item' to='/login'>
                    <button className='navbar-button'>LOGIN</button>
                </Link>
            </div>
        </header>
    );
}

export default Header;