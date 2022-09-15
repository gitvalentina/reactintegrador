import React, { Component } from 'react';
import './Tarjeta.css';
import '../Movies/Movies.css';

class Tarjeta extends Component {
    constructor(props){ //inicializo el componente con estas propiedades
        super(props) //para inicializar los props
        this.state={
            txt:'ver descripcion',
            mensaje: 'Agregar a Favoritos',
            ocultar: true
        } 
    }
    componentDidMount(){
        let favoritos = [];
        let recuperoStorage= localStorage.getItem('favoritos')

        if(localStorage.getItem('favoritos') !== null){
            let favoritosToArray = JSON.parse(recuperoStorage)
            favoritos = favoritosToArray
        }
        if(favoritos.includes(this.props.data.id)){
            this.setState({
                mensaje: 'Quitar de Favoritos'
            })  
        }
    }
    agregaryQuitarDeFavs(id){
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
        this.setState({
            txt: 'ver descripcion',
            mensaje: 'Agregar a Favoritos',
            ocultar: !this.state.ocultar
        })
    }

    
    render() {
        
        console.log(this.props.data);

        return (
        <React.Fragment> 
            <article >
                
                <p onClick={()=>this.agregaryQuitarDeFavs(this.props.id)}>{this.state.mensajito}</p>
                <a href={`/id/${this.props.id}`}><img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" /></a>
                <h2>{this.props.title}</h2>  
                <p>fecha estreno {this.props.data.release_date}</p>
                <p onClick={()=> this.ocultar()} className='more'>ver mas</p>
                <p>{this.props.data.overview}</p>
                
            </article>
    
        </React.Fragment>
        );
    }
}
export default Tarjeta;



