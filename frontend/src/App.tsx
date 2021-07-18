import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Pages
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Account from './pages/Profile';
import Signup from './pages/Signup';
import Product from './pages/Product'
import Navbar from './components/Navbar';



const App: React.FC = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/cart" render={() => <Cart />} />
          <Route path="/account" render={() => <Account />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/signin" render={() => <Signup />} />
          <Route path="/product/:id" render={() => <Product />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
