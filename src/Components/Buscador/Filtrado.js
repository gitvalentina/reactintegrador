import React, { Component } from "react";

class Buscador extends Component{
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
    console.log(event)

}

render(){
    return(
        <form onSubmit={(event)=> this.prevenirRefresh(event)}>
            <input onChange={(event)=> this.controlarCambiosDelInput(event)} value={this.state.valorInput} /> para que se sincronize con la info que estamos actualizando
        </form>
    )
}
}

export default Buscador;