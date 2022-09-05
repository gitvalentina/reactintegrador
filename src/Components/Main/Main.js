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
                this.setState({
                cargando: true,
                peliculas: data.results,
                peliculasOriginales: data.results,
                pagina: this.state.pagina + 1,
                peliculasActuales: data.results
            })})
            .catch( error => console.log(error));
    }
}


export default Tarjetas
