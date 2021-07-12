import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './products';

//Pages
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Account from './pages/Profile';
import Signup from './pages/Signup';
import Product from './pages/Product'

export interface IState {
  product: {
    id: number,
    brand: string,
    name: string,
    img: string,
    price: number,
    description: string,
  }[]
}

const App: React.FC = () => {

  const [products] = useState<IState['product']>(Products)

  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => <Home products={products} />} />
          <Route path="/cart" render={() => <Cart />} />
          <Route path="/account" render={() => <Account />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/signin" render={() => <Signup />} />
          <Route path="/product/:id" render={() => <Product product={products} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
