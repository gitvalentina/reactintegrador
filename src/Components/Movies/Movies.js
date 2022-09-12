import React, { Component } from "react";
import Tarjeta from '../Tarjetas/Tarjeta';
import './Movies.css'
import ClipLoader from "react-spinners/ClipLoader";



class Movies extends Component{
    constructor(){ //inicializo el componente con estas propiedades
        super() //para inicializar los props
        this.state={
            pagina: 1,
            peliculasPopulares:[],//aparecen las peliculas pop
            peliculasActuales: [], //aparecen las peliculas en cartelera
            peliculasBorradas:[],
            cargando: true,
        } 
    }
    componentDidMount(){ // para hacer las llamadas a la api con fetch, de populares
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=184353d8f8f15b5e8908b2560e49a9f3&language=en-US&page=${this.state.pagina}`)
            .then( response => response.json()) //arrow para parsear la rta a json
            .then( data  => { //fetch de peliculas en cartelera
                fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=184353d8f8f15b5e8908b2560e49a9f3&language=en-US&page=${this.state.pagina}`)
                .then( response => response.json()) //arrow para parsear la rta a json
                .then( info  => { 
                this.setState({ //Configuramos el estado del componente para que pueda almacenar la información de la API luego de hacer el fetch.
                cargando: false,
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
            {this.state.cargando? 
             <ClipLoader color="blue" loading={true} size={80} />: 
            <>
                <h2 className="titulos">Peliculas en Cartelera</h2>
                <section className="series-populares">
                    {this.state.peliculasActuales.map((value, idx) => <Tarjeta key={value + idx} data={value}  image={value.poster_path} title={value.title}/>)}
                </section>
                <h2 className="titulos">Peliculas populares</h2>
                <section className="pelis-populares">
                    {this.state.peliculasPopulares.map((value, idx) => <Tarjeta key={value + idx} data={value}  image={value.poster_path} title={value.title}/>)}
                </section>
            </>
            }
        </React.Fragment>
  
        )
    }
}


export default Movies;
