import React, { Component } from 'react';
import Tarjeta from '../../Components/Tarjetas/Tarjeta';


class Fav extends Component {
    constructor(){
        super()
        this.state = {
            favoritos: []
        }
    }


    componentDidMount(){
        const datos = localStorage.getItem('favoritos');

        if(datos != null){
            const favoritos = JSON.parse(datos);
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