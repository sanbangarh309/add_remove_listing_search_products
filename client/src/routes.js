import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';
import Header from './views/Header/Header';
import Home from './views/Home/Home';
import Product from './views/Product/Product';
import Search from './views/Product/Search';
import Login from './views/Login/Login';


const Routes = () => (
  <BrowserRouter>
    <div className='container'>
      <Header />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route path="/products" component={Product}/>
      <Route path="/home" component={Home}/>
      <Route path="/search" component={Search}/>
        <Route render={function () {
          return <p>Not Found</p>
        }} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
