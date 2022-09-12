import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

function Header(){

    return (
<<<<<<< HEAD
        <nav>
            <img src="img/logo.jpg" alt="logo" className='logo' />
            <ul className="main-nav">
                <li>
                   <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/peliculas'>All Movies</Link>
                </li>
                <li>
                   <Link to='/favoritos'>Favorites</Link>
                </li>
            </ul>
           
            <ul className="user">
                <li>
                    <p>Bienvenido usuario</p>
                    <img src="/img/user.jpg" alt=""/>
                </li>
            </ul>
        </nav>
=======
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
>>>>>>> 0abd608d0ca8ba8d7ab56530a0eb80949029a48d
    )
}
export default Header;