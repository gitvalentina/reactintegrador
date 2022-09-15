import React, { Component } from 'react';
import Movies from '../../Components/Movies/Movies';
import Tarjetas from '../../Components/Tarjetas/Tarjeta'
import Buscador from '../../Components/Buscador/Filtrado.js'

const apiKey= '184353d8f8f15b5e8908b2560e49a9f3';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            resultadosDeBusqueda: [], //valor que el usuario pone en el input
            value: ''
        }
    }

    metodoQueBusca(nombre){
            if(nombre !== ''){ {/*esto es porque cuando borraba y ecribia se me salia y entonces si el input esta vacio no hago el fetch */}
                
                fetch(`https://api.themoviedb.org/3/search/movie?api_key=184353d8f8f15b5e8908b2560e49a9f3&language=en-US&page=1&query=${nombre}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({resultadosDeBusqueda: data.results}, () => console.log(data.results))
                })
                .catch(e => console.log(e))
            }
    }

    render() {
        return (
            <React.Fragment>
                <Buscador metodoQueBusca={(nombre)=> this.metodoQueBusca(nombre)} ></Buscador>
                <main>
                    {this.state.resultadosDeBusqueda.length > 0 ?  
                        <section className="opciones">
                            <div>
                                {
                                    this.state.resultadosDeBusqueda.map((UnaPelicula, idx) => <Tarjetas key={UnaPelicula + idx} id={UnaPelicula.id}  data={UnaPelicula.overview}  image={UnaPelicula.poster_path} title={UnaPelicula.title} agregar = {(id) => this.agregarFavoritos(id)}/>)
                                }
                            </div>
                        </section> : <Movies></Movies>
                    }
                </main>
            </React.Fragment>
        )
    }

}

export default Home;









