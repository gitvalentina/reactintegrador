import React from 'react';
import {Link} from 'react-router-dom';

function Header(){

    return (
        <nav>
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
                <li>Nombre usuario <img src="/img/user.jpg" alt=""/></li>
            </ul>
        </nav>
    )
}

export default Header;