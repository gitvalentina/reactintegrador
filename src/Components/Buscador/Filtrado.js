import React, { Component } from "react";
import './Filtrado.css';

class Buscador extends Component{ //capturar valores
    constructor(props){
        super(props)
        this.state={
            valorInput:'',
            resultados: []
        }
    }


prevenirRefresh(event){
    event.prevenirDefault();
}

controlarCambiosDelInput(event){
    this.setState({
        valorInput: event.target.value
    }, ()=> this.props.metodoQueBusca(this.state.valorInput))
}

render(){
    return(
        <form onSubmit={(event)=> this.prevenirRefresh(event)}>
            {<input type= "text" onChange={(event)=> this.controlarCambiosDelInput(event)} placeholder="Buscar Pelicula" value={this.state.valorInput} /> } {/*para que se sincronize con la info que estamos actualizando*/}  
            <input type="submit" value="Submit" />
            <button onClick={()=>this.reset()}>reset</button>
        </form>
    )
}
}

export default Buscador;
