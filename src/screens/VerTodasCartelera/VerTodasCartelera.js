import React from 'react';
import Movies from '../../Components/Movies/Movies';

function VerTodasCartelera(){

    return(
        <React.Fragment>
            <Movies cartelera={true} populares={false} />
        </React.Fragment>
    )
}

export default VerTodasCartelera;