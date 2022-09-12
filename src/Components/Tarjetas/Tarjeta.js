import React, { Component } from 'react';
import './Tarjeta.css';
import '../Movies/Movies.css';

class Tarjeta extends Component {
    constructor(props){ //inicializo el componente con estas propiedades
        super(props) //para inicializar los props
        this.state={
            value:'',
            descripcion: '',
            verMas: 'hide',
        } 
    }
    click() {
        if (this.state.verMas === 'hide') {
            this.setState({
                verMas: 'show'
            })
        } else  (this.setState({
            verMas: 'hide'
        }))
    }
    
    render() {
        return (
        <React.Fragment> 
            <article >
                
                <a href={`./id/${this.props.id}`}><img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" /></a>
                <h2>{this.props.title}</h2>  
                <div className={this.state.verMas}>
                    <h3>{this.props.overview}</h3>
                </div>
                <button className='more' onClick={()=>this.click()} >Ver más</button>
            </article> 
     
        </React.Fragment>
        );
    }
}
export default Tarjeta;



