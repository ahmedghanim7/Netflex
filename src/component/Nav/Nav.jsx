import React, { useEffect, useState } from 'react';
// import {Link} from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    const [navscroll, setNavscroll]= useState(false);

    useEffect( () => {
        // console.log('nav is effected!');
        window.addEventListener('scroll', () =>  {
            if( window.scrollY > 50 ){
                // console.log('pass 100px ');
                setNavscroll(true)
                
            }
            else{
                setNavscroll(false)
            }
        })
        

        return () => { window.removeEventListener('scroll')}
    }, [])
    return (
        <nav className={`navBar ${navscroll && 'navscroll' }`} >
            {/* <img className='nav_logo' src={navImage} alt="nav-logo" /> */}
            <h2 className='nav_logo' >NETFLIX</h2>
            <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt='nav_avatar' />
        </nav>

    )
};

export default Nav;