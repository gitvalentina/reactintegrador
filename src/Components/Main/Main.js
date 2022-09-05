import React, { Component } from "react";
import Tarjeta from './Tarjetas/Tarjeta';
import Header from '../Header/Header';
import './Main.css'

class Tarjetas extends Component{
    constructor(){
        super()
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
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=184353d8f8f15b5e8908b2560e49a9f3&language=en-US&page=${this.state.pagina}`)
            .then( response => response.json())
            .then( data  => {
                this.setState({ //Configuramos el estado del componente para que pueda almacenar la información de la API luego de hacer el fetch.
                cargando: true,
                peliculas: data.results,
                peliculasOriginales: data.results,
                pagina: this.state.pagina + 1,
                peliculasActuales: data.results
            })})
            .catch( error => console.log(error));
    }
    render(){ //donde vamos a imprimir la información obtenida de la API.
        console.log(this.state.display);
         return(
             <>
                <Header/>
                <Tarjeta /> 
                    {
                         this.state.cargando === false ? "":
                 <div className="botones">
                     <button className="boton" onClick={()=>this.verMasPeliculas()} >Mas peliculas</button>
                     <button className="boton" onClick={() => this.addFav()}>Agregar a Favoritos</button>
                     <button className="boton" onClick={() => this.deleteFav()}> Sacar de Favoritos </button>
                 </div>}
             </>
        )
    }
}


export default Tarjetas;
