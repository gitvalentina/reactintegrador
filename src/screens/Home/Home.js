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
            valor: ''
        }
    }
    
    reset(){
        this.setState({
            resultadosDeBusqueda:[]
        })
    }

    evitarSubmit(event) {
        event.preventDefault();
        this.buscar()
              
    }

    controlarCambios(event) {
        this.setState({ valor: event.target.value })
    }

    buscar(texto){
        //buscador desde el endpoint
        fetch('https://api.themoviedb.org/3/search/multi?api_key=' + apiKey + '&query=' + this.state.texto)
            .then( res => res.json())
            .then( data => this.setState({
                resultadosDeBusqueda : data.results
            }))
            .catch(err => console.log(err))
        }
        


    render() {

        return (
            <React.Fragment>
<<<<<<< HEAD
=======
                <Buscador> </Buscador>
>>>>>>> 269e565199867510d302437139e3ed3f36033a79
                <main>
                    <form onSubmit={(event) => this.evitarSubmit(event)}>
                        <input type="text" onChange={(event) => this.controlarCambios(event)} value={this.state.valor} />
                        <input type="submit" value="Submit" />
                    </form>
                    <button onClick={()=>this.reset()}>reset</button>
                    {
                        this.state.resultadosDeBusqueda.length > 0 ?  
                        
                            <section className="opciones">
                            <div>
                                {
                                    this.state.resultadosDeBusqueda.map((UnaPelicula, idx) => <Tarjetas key={UnaPelicula.id + idx} datosPelicula={UnaPelicula} />)
                                }
                            </div>
                            </section>
                         : 
                        <React.Fragment>
                            <Movies />
                        </React.Fragment>
                    }
                </main>
<<<<<<< HEAD
                  <Movies />
=======
>>>>>>> 269e565199867510d302437139e3ed3f36033a79
            </React.Fragment>
        )
    }

}

export default Home;









