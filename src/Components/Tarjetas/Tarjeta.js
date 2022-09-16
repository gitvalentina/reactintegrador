import React, { Component } from 'react';
import './Tarjeta.css';
import '../Movies/Movies.css';
import { Link } from 'react-router-dom';

class Tarjeta extends Component {
    constructor(props){ //inicializo el componente con estas propiedades
        super(props) //para inicializar los props
        this.state={
            txt:'Ver Mas',
            mensajito: 'Agregar a Favoritos',
            ocultar: "ocultar",
            existe: false
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
                txt:'Ver Mas',
                mensajito: 'Agregar a Favoritos',
                ocultar: "ocultar",
                
            })
        }


    }
    agregaryQuitarDeFavs(id){
        return console.log(this.props.pelicula)

        //esta funcion tiene que agregar un id dentro de un array y guardarlo en localStorage, luego chequear si el id ya existe; si es asi, ofrecer al usuario la posibilidad de sacarlo de favs 
        let favoritos = [];
        let recuperoStorage= localStorage.getItem('favoritos')
        //preguntamos si tiene algo adentro ya de localStorage; si hay algo dentro del favoritos, que lo agregue y no lo quite
        if(localStorage.getItem('favoritos') !== null){
            //me trae lo que ya tengo
            let favoritosToArray = JSON.parse(recuperoStorage)
                //favoritos ahora pasa a ser lo que tengamos en el storage
                favoritos = favoritosToArray
        }
        //preguntemos si el id ya esta en el array 
        //si esta en el array lo vamos a sacar
        if(favoritos.includes(id)){//includes retorna un booleano (me retorna true o false)
            //si el id esta lo sacamos, y sino se queda (lo hacemos con filter)
            //primer parametro cada elemento del array (elId)
            //por cada elemento lo va a comparar con el arrow function
            //mientras sea distinto la comparacion osea true voy a guardar en el nuevo array 
            //cuando el id sea igual al que entro en el parametro va a sacar el id del array
            favoritos = favoritos.filter(elId => elId !== id)
            
            this.setState({
                mensajito: 'Agregar a Favoritos'
            })
        }else{ //en el caso de que de falso, mostramos al usuario un nuevo texto (quitar de favs)
            favoritos.push(id)
            this.setState({
                mensajito:'Quitar de Favoritos'
            })
        }
        //transformamos en cadena de texto
        //transforrmaos el array en cadena de texto
        let favoritosToString = JSON.stringify(favoritos) 
        //lo metemos en localStorage 
        localStorage.setItem('favoritos',favoritosToString)
        console.log(localStorage);
    }

    ocultar(){
        if(this.state.descripcion === 'ocultar'){
            this.setState({
                ocultar: 'mostrar', txt:'Ver menos'
            })
        }else{
            this.setState({
                ocultar: 'ocultar', txt: 'Ver Mas'
            })
        }
    }

    
    render() {

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
                existe: true,
                txt:'Ver Mas',
                mensajito: 'Agregar a Favoritos',
                ocultar: "ocultar"
            })
        }

        const eliminarFavorito = () => {
            const datos = localStorage.getItem('favoritos');
            const favoritos = JSON.parse(datos);

            for(let i = 0; i < favoritos.length; i++){
                if(favoritos[i].id == this.state.id){

                    this.setState({
                        existe: false,
                        txt:'Ver Mas',
                        mensajito: 'Agregar a Favoritos',
                        ocultar: "ocultar",
                        
                    })

                    favoritos.splice(i, 1)
                    localStorage.setItem('favoritos', JSON.stringify(favoritos));
                }
            }
        }
        
        console.log(this.props.data);

        return (
        <React.Fragment> 
            <article >
                <Link to={`/id/${this.props.id}`}><img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" /></Link>
                <h2>{this.props.title}</h2> 
                        { this.state.existe ? 
                            <button onClick={ eliminarFavorito }>Eliminar de favoritos</button>
                        :
                            <button onClick={ agregarfavorito }>Agregar a favoritos</button>
                        }
                <div> 
                    <button onClick={()=> this.ocultar()} className='more'>{this.state.txt}</button>
                    <p className={this.state.ocultar} onClick={this.state.ocultar}>{this.props.data.overview}</p>
                </div>
            </article>
    
        </React.Fragment>
        );
    }
}
export default Tarjeta;



