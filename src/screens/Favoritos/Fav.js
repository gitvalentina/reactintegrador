import React, { Component } from 'react';

import Tarjeta from '../../Components/Tarjetas/Tarjeta'


const apiKey = '184353d8f8f15b5e8908b2560e49a9f3';

class Fav extends Component {
    constructor(){
        super()
        this.state = {
            resultadosDeBusqueda: [],  //valor que el usuario pone en el pinput
            valor: '',
            favoritos: []
        }
    }

    reset (){
        this.setState({
            resultadosDeBusqueda: []
        })
    }

    componentDidMount(){
        const datos = localStorage.getItem('favoritos');

        if(datos != null){
            const favoritos = JSON.parse(datos);
            this.setState({
                resultadosDeBusqueda: this.state.resultadosDeBusqueda,
                valor: this.state.valor,
                favoritos: favoritos
            })
        }
    }

    buscar(texto){ //buscador desde el endpoint
        fetch('https://api.themoviedb.org/3/search/multi?api_key=' + apiKey + '&query=' + this.state.texto)
        .then( res => res.json())
        .then( data => this.setState({
            resultadosDeBusqueda : data.results
        }))
        .catch(err => console.log(err))
    }


    render(){
        return (
            <React.Fragment>
                
                <main>
                    <section className='seies-populares'>
                        {
                            this.state.favoritos.map((favorito, idx) => <Tarjeta key={favorito + idx} data={favorito.overview} image={favorito.poster_path} title={favorito.title} id={favorito.id} agregar={(id) => this.agregarFavoritos(id)}/>)
                        }

                    </section>
                </main>
            </React.Fragment>
        )
    }

}

export default Fav;