import React, { Component } from 'react'; //objeto comp
import Movies from '../../Components/Movies/Movies';
import Tarjeta from '../../Components/Tarjetas/Tarjeta'
import Buscador from '../../Components/Buscador/Filtrado.js'


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
                    this.setState({resultadosDeBusqueda: data.results})
                })
                .catch(e => console.log(e))
            }
    }

    metodoQueResetea(){
        this.setState({ // permite actualizar la información del objeto state de un componente. Cuando se modifica, se vuelve a renderizar el componente (no carga la app de cero, sino que cambia ese estado en específico)
            resultadosDeBusqueda: [], //valor que el usuario pone en input
            value: ''
        })
    }

    render() {
        return (
            <React.Fragment>
                <Buscador metodoQueBusca={(nombre)=> this.metodoQueBusca(nombre)} metodoQueResetea={() => this.metodoQueResetea()}></Buscador>
                <main>
                    {this.state.resultadosDeBusqueda.length > 0 ?  
                            <section className="opciones">
                                <div className='pelis-populares'>
                                    {
                                        this.state.resultadosDeBusqueda.map((UnaPelicula, idx) => <Tarjeta key={UnaPelicula + idx} pelicula={UnaPelicula}/>)
                                    }
                                </div>
                            </section> 
                                : 
                    <Movies paginar={true} populares={true} cartelera={true}></Movies>
                    }
                </main>
            </React.Fragment>
        )
    }

}

export default Home;









