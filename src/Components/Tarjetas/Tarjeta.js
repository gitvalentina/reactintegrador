import React, { Component } from 'react';

class Tarjeta extends Component {
    constructor(props){ //inicializo el componente con estas propiedades
        super(props) //para inicializar los props
        this.state={
            
        } 
    }
    render() {
        return (
        <React.Fragment> 
            <article>
                <img src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt="big hero"/>
            </article> 
        </React.Fragment>
        );
        
    }
}
export default Tarjeta;



