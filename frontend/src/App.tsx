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

  const [products, setProducts] = useState<IState['product']>(Products)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => <Home products={products} />} />
          <Route path="/cart" exact render={() => <Cart />} />
          <Route path="/account" exact render={() => <Account />} />
          <Route path="/login" exact render={() => <Login />} />
          <Route path="/signin" exact render={() => <Signup />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
