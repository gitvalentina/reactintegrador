import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

function Header(){

    return (
    <>
            <div className='Header'>
                <ul className="navegador">
                    <li className="comp-nav" id="alinear-foto">
                            <img src="logo/logo.jpeg" alt="Logo StreamTime" className="logo" id="logo" />
                    </li>
                    <li className="comp-nav">
                        <Link to='/'> Home </Link>
                    </li>
                    <li className="comp-nav">
                        <Link to='/favoritos'> Favoritos </Link>
                    </li>
                </ul>
            </div>
    </>  
    )
}
export default Header;