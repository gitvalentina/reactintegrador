import React from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./screens/Home/Home";
import Favoritos from "./screens/Favoritos/Fav";
<<<<<<< HEAD
import UnaPelicula from "./screens/UnaPelicula/UnaPelicula";
import NotFound from "./screens/NotFound/notFound";
=======
import UnaPelicula from "./screens/UnaPelicula/unaPelicula";
import Peliculas from "./screens/Peliculas/Peliculas";
import NotFound from "./screens/NotFound/NotFound";

>>>>>>> 0abd608d0ca8ba8d7ab56530a0eb80949029a48d
import {Route, Switch} from 'react-router-dom';
import VerTodas from "./screens/VerTodas/VerTodas";

function App () {
    return (
      <React.Fragment>
<<<<<<< HEAD
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
=======
      <Header />
      <main>       
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/favoritos' exact component={Favoritos}/>
          <Route path='/peliculas/id/:id' component={UnaPelicula}/>
          <Route path='/peliculas/' component={Peliculas}/>
          <Route path='' component={NotFound}/>
        </Switch>
      </main>
      <Footer />
>>>>>>> 0abd608d0ca8ba8d7ab56530a0eb80949029a48d
    </React.Fragment>
    );
  }

export default App;

