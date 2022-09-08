import React, { Component } from 'react';
import Movies from '../../Components/Movies/Movies';
import Tarjetas from '../../Components/Tarjetas/Tarjeta'

const apiKey= '184353d8f8f15b5e8908b2560e49a9f3';

class Home extends Component {
    constructor() {
        super()

        this.state = {
            resultadosDeBusqueda: [],
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

    buscar(textoDeBusqueda){
        fetch('https://api.themoviedb.org/3/search/multi?api_key=' + apiKey + '&query=' + this.state.valor)
            .then( res => res.json())
            .then( data => this.setState({
                resultadosDeBusqueda : data.results
            }))
            .catch()
    
        }
        


    render() {

        return (
            <React.Fragment>
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
                                    this.state.resultadosDeBusqueda.map((unaPelicula, idx) => <Tarjetas key={unaPelicula.id + idx} datosPelicula={unaPelicula} />)
                                }
                            </div>
                            </section>
                         : 
                        <React.Fragment>
                            <Movies />
                        </React.Fragment>
                    }
                </main>
            </React.Fragment>
        )
    }

}

export default Home;









