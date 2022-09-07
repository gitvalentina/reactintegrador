import React, {Component}  from "react"
import "./Tarjeta.css"

class Tarjeta extends Component{
    constructor(props){
        super(props)
        this.state={
            pagina: 1,
            peliculas: [],
            peliculasOriginales:[],
            peliculasActuales: [],
            peliculasBorradas:[],
            cargando: false,
            display: "cuadricula"
        } 
    }
}

export default Tarjeta;