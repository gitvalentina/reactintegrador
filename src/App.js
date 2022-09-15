import React from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./screens/Home/Home";
import Favoritos from "./screens/Favoritos/Fav";
import UnaPelicula from "./screens/UnaPelicula/UnaPelicula";
import NotFound from "./screens/NotFound/NotFound";
import VerTodasCartelera from "./screens/VerTodasCartelera/VerTodasCartelera";
import VerTodasPopulares from "./screens/VerTodasPopulares/VerTodasPopulares";
import {Route, Switch} from 'react-router-dom';
import Buscador from "./Components/Buscador/Filtrado";


function App () {
    return (
      <React.Fragment>
        <Header />
        <div>
          <main>       
            <Switch>
              <Route path='/' exact={true} component={Home}/>
              <Route path='/favoritos' exact component={Favoritos}/>
              <Route path='/id/:id' component={UnaPelicula}/>
              <Route path='/populares' component={VerTodasPopulares}/>
              <Route path='/cartelera' component={VerTodasCartelera}/>
              <Route path='/resultadosdebusqueda' component={Buscador}/>
              <Route path='' component={NotFound}/>
            </Switch>
          </main>
        </div>
        <Footer />
    </React.Fragment>
    );
  }

export default App;

