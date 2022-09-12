import React, { Component } from "react";
import Tarjeta from '../Tarjetas/Tarjeta';
import Header from '../Header/Header';
import './Movies.css'
import ClipLoader from "react-spinners/ClipLoader";



class Movies extends Component{
    constructor(){ //inicializo el componente con estas propiedades
        super() //para inicializar los props
        this.state={
            pagina: 1,
            peliculasPopulares:[],//aparecen las peliculas
            peliculasActuales: [],
            peliculasBorradas:[],
            cargando: true,
        } 
    }
    componentDidMount(){ // para hacer las llamadas a la api con fetch
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=184353d8f8f15b5e8908b2560e49a9f3&language=en-US&page=${this.state.pagina}`)
            .then( response => response.json()) //arrow para parsear la rta a json
            .then( data  => { 
                fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=184353d8f8f15b5e8908b2560e49a9f3&language=en-US&page=${this.state.pagina}`)
                .then( response => response.json()) //arrow para parsear la rta a json
                .then( info  => { 
                this.setState({ //Configuramos el estado del componente para que pueda almacenar la información de la API luego de hacer el fetch.
                cargando: false,
                peliculas: data.results,
                peliculasPopulares: data.results,
                pagina: this.state.pagina + 1,
                peliculasActuales: info.results
            })})
            })
            .catch( error => console.log(error)); // en caso de tener algun problema con la api
    }
    
    render(){ //donde vamos a imprimir la información obtenida de la API.
         return(
        <React.Fragment> 
        <Header></Header>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/H32DI4WO0XM"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            {this.state.cargando? 
             <ClipLoader color="blue" loading={true} size={80} />: 
            <>
            <h2 class="titulos">Peliculas en Cartelera</h2>
            <section class="series-populares">
            {this.state.peliculasActuales.map((value, idx) => <h6> {value.title}</h6>)}
            </section>
            <h2 class="titulos">Peliculas populares</h2>
            <section class="pelis-populares">
            {this.state.peliculasPopulares.map((value, idx) => <h6> {value.title}</h6>)}
            </section>
            </>
            }
        </React.Fragment>
  
        )
    }
}


export default Movies;
