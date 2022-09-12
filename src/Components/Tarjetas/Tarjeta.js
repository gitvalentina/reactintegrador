import React, { Component } from 'react';
import './Tarjeta.css';
import '../Movies/Movies.css';

class Tarjeta extends Component {
    constructor(props){ //inicializo el componente con estas propiedades
        super(props) //para inicializar los props
        this.state={
            value:""
        } 
    }
    render() {
        return (
        <React.Fragment> 
            <article>
                <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt=""/>
                <h2>{this.props.title}</h2>  
                <p className='more' >Ver más</p> 
            </article> 
        </React.Fragment>
        );
    }
}
export default Tarjeta;



