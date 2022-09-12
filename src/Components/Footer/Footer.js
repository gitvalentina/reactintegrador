import React  from "react"
import "./Footer.css"

//por ahora es sin estado, seguro despues hay que cambiarlo
function Footer() {
    return ( <footer className='piedep'> <hr class="uk-divider-icon">
    </hr>

    <footer className="integrantes">
        Olivia Fodrini - Delfina Delgui - Valentina Douce  
    </footer>
    
    <footer>
        WEB &copy; 2022
    </footer>
    <p  text-align='center'>
        <img className='udesa' src="https://udesa.edu.ar/sites/all/themes/udesa/images/logo.jpg?v=01" alt="" />
    </p>
    </footer>);
}

export default Footer;
    