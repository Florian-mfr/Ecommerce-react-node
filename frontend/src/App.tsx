import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

//Pages
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Account from './pages/Profile';
import Signin from './pages/Signin';



const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/cart" exact render={() => <Cart />} />
          <Route path="/account" exact render={() => <Account />} />
          <Route path="/login" exact render={() => <Login />} />
          <Route path="/signin" exact render={() => <Signin />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
