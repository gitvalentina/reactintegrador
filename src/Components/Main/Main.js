import React, { Component } from "react";
import Tarjeta from '../Tarjetas/Tarjeta';
import Header from '../Header/Header';
import './Main.css'

class Tarjetas extends Component{
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
    componentDidMount(){ // para hacer las llamadas a la api con fetch
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=184353d8f8f15b5e8908b2560e49a9f3&language=en-US&page=${this.state.pagina}`)
            .then( response => response.json()) //arrow para parsear la rta a json
            .then( data  => { console.log(data)
                this.setState({ //Configuramos el estado del componente para que pueda almacenar la información de la API luego de hacer el fetch.
                cargando: true,
                peliculas: data.results,
                peliculasOriginales: data.results,
                pagina: this.state.pagina + 1,
                peliculasActuales: data.results
            })})
            .catch( error => console.log(error)); // en caso de tener algun problema con la api
    }
    render(){ //donde vamos a imprimir la información obtenida de la API.
        console.log(this.state.display);
         return(
             <>
             <h1> Soy la home </h1>
                <Header/>
                <Tarjeta /> 
             </>
        )
    }
}


export default Tarjetas;
