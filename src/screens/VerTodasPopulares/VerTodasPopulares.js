import React from 'react';
import Movies from '../../Components/Movies/Movies';

function VerTodasPopulares(){

    return(
        <React.Fragment>
            <Movies populares={true} cartelera={false} />
        </React.Fragment>
    )
}

export default VerTodasPopulares;

