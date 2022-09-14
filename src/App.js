import React from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./screens/Home/Home";
import Favoritos from "./screens/Favoritos/Fav";
import UnaPelicula from "./screens/UnaPelicula/UnaPelicula";
import NotFound from "./screens/NotFound/NotFound";
import VerTodas from "./screens/VerTodas/VerTodas";
import {Route, Switch} from 'react-router-dom';
import Buscador from "./Components/Buscador/Filtrado";


function App () {
    return (
      <React.Fragment>
        <Header />
        <div>
          <h1>STREAMTIME</h1>
          <main>       
            <Switch>
              <Route path='/' exact={true} component={Home}/>
              <Route path='/favoritos' exact component={Favoritos}/>
              <Route path='/id/:id' component={UnaPelicula}/>
              <Route path='/todas' component={VerTodas}/>
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

