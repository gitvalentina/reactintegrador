import React, { Component } from "react";

class Buscador extends Component{ //capturar valores
    constructor(props){
        super(props)
        this.state={
            valorInput:''
        }
    }


prevenirRefresh(event){
    event.preventDefault()
}
controlarCambiosDelInput(event){
    this.setState({
        valorInput: event.target.value
    }, ()=> this.props.metodoQueBusca(this.state.valorInput))
}

render(){
    return(
        <form onSubmit={(event)=> this.prevenirRefresh(event)}>
            <input onChange={(event)=> this.controlarCambiosDelInput(event)} value={this.state.valorInput} /> para que se sincronize con la info que estamos actualizando
            <button> Hola </button>
        </form>
    )
}
}

export default Buscador;