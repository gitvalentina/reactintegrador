import React, { Component } from 'react';
import { ClipLoader } from 'react-spinners';
import './UnaPelicula.css'
//Todo
//1) Transformar el componente en un componente con estado.
//2) Recuperar el id de la ruta.
//3) Pedir datos al endpoint de la api de Rick &  con el id recuperado y mostrar los datos en pantalla.

const apiKey= '184353d8f8f15b5e8908b2560e49a9f3';

class UnaPelicula extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            pelicula: null,
            existe: false,
            cargando: true
    
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${ this.state.id }?api_key=${ apiKey }`)
            .then( res => res.json())
            .then(pelicula => this.setState({id: this.state.id, pelicula: pelicula, cargando: false}))
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
        if(this.state.cargando){
          return <ClipLoader color="blue" loading={true} size={80} />
        } //como react quiere cargar la pelicula sin q existe, se rompe sin eso, haces validaciones para q no rompa. tarda= validacion
        
        const agregarfavorito = () => {

            const datos = localStorage.getItem('favoritos');

            if(datos == null) {  //si es la 1ra vez que se guarda
                    localStorage.setItem('favoritos', JSON.stringify([ this.state.pelicula]));
            }
            else{
                const favoritos = JSON.parse(datos);
                favoritos.push(this.state.pelicula)
                localStorage.setItem('favoritos', JSON.stringify(favoritos));
            }

            this.setState({
                id: this.state.id,
                pelicula: this.state.pelicula,
                existe: true
            })
        }

        const eliminarFavorito = () => {
            const datos = localStorage.getItem('favoritos');
            const favoritos = JSON.parse(datos);

            for(let i = 0; i < favoritos.length; i++){
                if(favoritos[i].id == this.state.id){

                    this.setState({
                        id: this.state.id,
                        pelicula: this.state.pelicula,
                        existe: false
                    })

                    favoritos.splice(i, 1)
                    localStorage.setItem('favoritos', JSON.stringify(favoritos));
                }
            }
        }

        console.log(this.state.pelicula.genres);
    
        return (
            <React.Fragment>
                <main id="contenedor">
                    <div id="pelicula">
                        <h3>{this.state.pelicula.title}</h3>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.backdrop_path}`} alt='foto' />
                        <p>Rating: {this.state.pelicula.popularity}</p>
                        <p>Fecha de estreno: {this.state.pelicula.release_date}</p>
                        <p>Duracion: {this.state.pelicula.runtime} mins</p>
                        <p>Sinopsis: {this.state.pelicula.overview}</p>
                        <p>Genero: 
                            { this.state.pelicula.genres.map((genre, idx) => <p key={genre + idx} > {genre.name} </p>)  }
                        </p>
                        { this.state.existe ? 
                                <button onClick={ eliminarFavorito }>Eliminar de favoritos</button>
                            :
                                <button onClick={ agregarfavorito }>Agregar a favoritos</button>
                        }
                    </div>
                </main>
            </React.Fragment>
        )

    }

}

export default UnaPelicula;