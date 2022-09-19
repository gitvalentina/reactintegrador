import React, { Component } from 'react';
import Tarjeta from '../../Components/Tarjetas/Tarjeta';


class Fav extends Component {  //comp con est2
    constructor(){  //contener es2 info
        super() //implem react
        this.state = {  //def es2 inicial
            favoritos: []
        }
    }


    componentDidMount(){ //modifica algo, cambia es2 intern
        const datos = localStorage.getItem('favoritos');

        if(datos != null){
            const favoritos = JSON.parse(datos); //ret array xa trabaj
            this.setState({
                favoritos: favoritos
            })
        }
    }


    render(){
        return (
            <React.Fragment>
                
                <main>
                    <section className='series-populares'>

                        {
                            this.state.favoritos.map((favorito, idx) => <Tarjeta key={favorito + idx} pelicula={favorito} botones={false}/>)
                        }

                    </section>
                </main>
            </React.Fragment>
        )
    }

}

export default Fav;