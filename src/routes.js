
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home'; // rota /
import Contact from './pages/Contact'; // contato rota /contact
import About from './pages/About'; // sobre nós rota /about
import Error404 from './pages/Error404'; // nenhuma rota

function Routes() {
  return (
   
    <BrowserRouter>
      <Navbar/>
      <div className="container-xl">
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/contact' component={Contact}  />
        <Route path='/contact/:nome' exact component={Contact}/>
        <Route path='/about' component={About}/>
        <Route component={Error404}/>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default Routes;
