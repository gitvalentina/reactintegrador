import React from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./screens/Home/Home";
import Favoritos from "./screens/Favoritos/Fav";
import UnaPelicula from "./screens/UnaPelicula/UnaPelicula";
import NotFound from "./screens/NotFound/notFound";
import {Route, Switch} from 'react-router-dom';
import VerTodas from "./screens/VerTodas/VerTodas";

function App () {
    return (
      <React.Fragment>
        <Header />
        <div>
          <h1>My App in React</h1>
          <main>       
            <Switch>
              <Route path='/' exact={true} component={Home}/>
              <Route path='/favoritos' exact component={Favoritos}/>
              <Route path='/peliculas/id/:id' component={UnaPelicula}/>
              <Route path='/todas' component={VerTodas}/>
              <Route path='' component={NotFound}/>
            </Switch>
          </main>
        </div>
        <Footer />
    </React.Fragment>
    );
  }

export default App;

