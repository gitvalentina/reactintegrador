import React, { Component } from 'react';
import './Tarjeta.css';
import '../Movies/Movies.css';
import { Link } from 'react-router-dom';

class Tarjeta extends Component {
    constructor(props){ //inicializo el componente con estas propiedades
        super(props) //para inicializar los props
        this.state={
            existe: false,
            verMas: false
        } 
    }
    
    componentDidMount(){
        let favoritos = [];
        let recuperoStorage= localStorage.getItem('favoritos')

        if(localStorage.getItem('favoritos') !== null){
            let favoritosToArray = JSON.parse(recuperoStorage)
            favoritos = favoritosToArray
        }
        console.log(this.props)
        let existe = favoritos.find(pelicula => pelicula.id == this.props.pelicula.id);
        if(existe != undefined){
            this.setState({
                existe: true,
                verMas: this.state.verMas
            })
        }
        
    }

    ocultar(){
        this.setState({
            verMas: !this.state.verMas,
            existe: this.state.existe
        })
    }

    
    render() {

        const agregarfavorito = () => {

            const datos = localStorage.getItem('favoritos');

            if(datos == null) {  //si es la 1ra vez que se guarda
                    localStorage.setItem('favoritos', JSON.stringify([ this.props.pelicula]));
            }
            else{
                const favoritos = JSON.parse(datos);
                favoritos.push(this.props.pelicula)
                localStorage.setItem('favoritos', JSON.stringify(favoritos));
            }

            this.setState({
                existe: true
            })
        }

        const eliminarFavorito = () => {
            const datos = localStorage.getItem('favoritos');
            const favoritos = JSON.parse(datos);

            for(let i = 0; i < favoritos.length; i++){
                if(favoritos[i].id == this.props.pelicula.id){

                    this.setState({
                        existe: false,
                        verMas: this.state.verMas
                        
                    })

                    favoritos.splice(i, 1)
                    localStorage.setItem('favoritos', JSON.stringify(favoritos));
                }
            }
        }

        return (
        <React.Fragment> 
            <article >
                <Link to={`/id/${this.props.pelicula.id}`}><img src={`https://image.tmdb.org/t/p/w342/${this.props.pelicula.backdrop_path}`} alt="" /></Link>
                <h2>{this.props.pelicula.title}</h2> 
                        { this.props.botones ? 
                            this.state.existe ?
                                <button onClick={ eliminarFavorito }>Eliminar de favoritos</button>
                            :
                                <button onClick={ agregarfavorito }>Agregar a favoritos</button>
                            :
                                <></>
                        }
                <div> 
                    <button onClick={()=> this.ocultar()} className='more'>ver mas</button>
                    {this.state.verMas ? <p>{this.props.pelicula.overview}</p> : <></> }
                </div>
            </article>
    
        </React.Fragment>
        );
    }
}
export default Tarjeta;



