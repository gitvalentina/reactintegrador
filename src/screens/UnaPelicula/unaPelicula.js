import React, { Component } from 'react';

//Todo
//1) Transformar el componente en un componente con estado.
//2) Recuperar el id de la ruta.
//3) Pedir datos al endpoint de la api de Rick &  con el id recuperado y mostrar los datos en pantalla.

const apiKey= '184353d8f8f15b5e8908b2560e49a9f3';

class UnaPelicula extends Component(){
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            pelicula: {},
            existe: false
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${ this.state.id }?api_key=${ apiKey }`)
            .then( res => res.json())
            .then(pelicula => this.setState({id: this.state.id, pelicula: pelicula}))
            .catch(err => console.log(err))



            const datos = localStorage.getItem('favoritos');

            if(datos != null) { 
                const favoritos = JSON.parse(datos);
              
                for(let i = 0; i < favoritos.length; i++) {
                    if(favoritos[i].id == this.state.id) {
                       this.setState({
                            id: this.state.id,
                            pelicula: this.state.pelicula,
                            existe: true
                       })
                    }
                }
            }
    }

    render(){





        return (
            <React.Fragment>
                <h2>Datos de la pelicula  ......</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi earum totam praesentium ipsam ratione eligendi, repellat aliquid asperiores ea dolor ab, reiciendis nisi dignissimos nihil vero? Blanditiis inventore ab nesciunt.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos non sed vero aliquid illo illum velit voluptates repellat eum accusantium rem dolorem, consectetur officiis atque aliquam? Iste ad consectetur iusto!</p>
            </React.Fragment>
        )

    }

}

export default UnaPelicula;