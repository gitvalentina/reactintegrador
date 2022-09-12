import React  from "react"
import "./Footer.css"

//por ahora es sin estado, seguro despues hay que cambiarlo
function Footer() {
    return ( 
        <footer className='piedepagina'> 
            <div>
                <p>Olivia Fodrini - Delfina Delgui - Valentina Douce</p>
            
                <p>WEB &copy; 2022</p>

                <p>Programacion 3</p>

                <p  text-align='center'>
                    <img className='udesa' src="https://udesa.edu.ar/sites/all/themes/udesa/images/logo.jpg?v=01" alt="" />
                </p>
            </div>

        </footer>


);
}

export default Footer;
    