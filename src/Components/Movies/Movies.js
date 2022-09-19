import React, { Component } from "react";
import Tarjeta from '../Tarjetas/Tarjeta';
import './Movies.css'
import ClipLoader from "react-spinners/ClipLoader";
import {Link} from "react-router-dom"

class Movies extends Component{// ya no es f.nativa de Js sino una clase; un obj literal
    constructor(){ //primer metodo para inicializar el componente 
        super() // refiere al constructor, a la implementacion de React
        this.state={ //definimos el estado inicial con sus propiedades
            pagina: 1,
            peliculasPopulares:[],//aparecen las peliculas popu
            peliculasActuales: [], //aparecen las peliculas en cartelera
            cargando: true,
        } 
    }

    componentDidMount() { //Se ejecuta inmediatamente después de renderizado el componente (en el Real Dom);obligará a que el componente se vuelva a renderizar, ahora con la información recibida
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=184353d8f8f15b5e8908b2560e49a9f3&language=en-US&page=${this.state.pagina}`) 
            .then( response => response.json()) //arrow para parsear la rta a json y poder usarla en java
            .then( data  => { //fetch de peliculas en cartelera 
                fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=184353d8f8f15b5e8908b2560e49a9f3&language=en-US&page=${this.state.pagina}`)
                .then( response => response.json()) 
                .then( info  => { 
                this.setState( { //Configuramos el estado del componente para que pueda almacenar la información de la API luego de hacer el fetch.
                cargando: false,
                peliculasPopulares: this.props.paginar ? data.results.slice(0,5) : data.results, //mostrame 5 o todas
                pagina: this.state.pagina + 1,
                peliculasActuales: this.props.paginar ? info.results.slice(0,5) : info.results
            })})
        })
        .catch( error => console.log(error)); // en caso de tener algun problema con la api
    }
    

    render(){ //donde vamos a imprimir la información obtenida de la API.
        return(
        <React.Fragment> 
            {this.state.cargando? //if ternario condicion - valor true o false
            <ClipLoader color="blue" loading={true} size={80} />: //escenario donde la información quizás todavía no fue recibida 
            <>
                 {
                    this.props.cartelera ?
                    <>
                        <h2 className="titulos">Peliculas en Cartelera</h2> 
                        <section className="series-populares">
                            {this.state.peliculasActuales.map((value, idx) => <Tarjeta key={value + idx} pelicula={value} botones={true}/>)}
                        </section>
                        {this.props.populares && <Link to ={`/cartelera`}>Ver Todas las Peliculas de Cartelera</Link>}
                    </>
                    : ''
                } {/* cartelera=true */}

                {
                    this.props.populares ?
                    <>
                        <h2 className="titulos">Peliculas populares</h2>
                        <section className="pelis-populares">
                            {this.state.peliculasPopulares.map((value, idx) => <Tarjeta key={value + idx} pelicula={value} botones={true} />)}
                        </section>
                        {this.props.cartelera && <Link to ={`/populares`}>Ver Todas las Peliculas Populares</Link>}
                    </>
                    : ''
                } {/* populares=true */}

            </>
            }
        </React.Fragment>

        )
    }
}
export default Movies; //Deben ser exportados para poder importarlos en App
//Se usa dentro de un método: this., para que tenga que ver con su contexto; recibe un objeto literal y dentro la prop que queremos cambiar.

