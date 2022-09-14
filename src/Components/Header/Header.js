import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

function Header(){

    return (
    <>
            <div className='header'>
            <Link to='/'>  
                <img src="/img/logo.jpg" alt="Logo StreamTime" className="logo" />
            </Link>
                <ul className="navegador">
                    <li className="comp-nav">
                        <Link to='/'> Home </Link>
                    </li>
                    <li className="comp-nav">
                        <Link to='/favoritos'> Favoritos </Link>
                    </li>
                    <li className="comp-nav">
                        <Link to='/login'> Login </Link>
                    </li>
                </ul>
            </div>
    </>  
    )
}
export default Header;