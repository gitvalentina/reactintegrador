import React from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./screens/Home/Home";
import Favoritos from "./screens/Favoritos/Fav";
import UnaPelicula from "./screens/UnaPelicula/unaPelicula";
import Peliculas from "./screens/Peliculas/Peliculas";
import NotFound from "./screens/NotFound/notFound";
//import VerTodas from './screens/VerTodas/VerTodas'; falta tmb route: <Route path="/todas" component={VerTodas} />
import {Route, Switch} from 'react-router-dom';

function App () {
    return (
      <React.Fragment>
<<<<<<< HEAD
      <Header />
      <h1>My App in React</h1>
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
=======
        <Header />
        <div>
          <h1>My App in React</h1>
          <main>       
            <Switch>
              <Route path='/' exact={true} component={Home}/>
              <Route path='/favoritos' exact component={Favoritos}/>
              <Route path='/peliculas/id/:id' component={UnaPelicula}/>
              <Route path='/peliculas' component={Peliculas}/>
              <Route path='' component={NotFound}/>
            </Switch>
          </main>
        </div>
        <Footer />
>>>>>>> e54ced37927d32662931c875172996116f5bf5d7
    </React.Fragment>
    );
  }

export default App;

