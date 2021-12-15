import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserList from "./components/pages/UserList/UserList";
import User from "./components/pages/User/User";
import NewUser from "./components/pages/NewUser/NewUser";
import Products from "./components/pages/products/Products";
import Product from "./components/pages/Product/Product";
import NewProduct from "./components/pages/NewProduct/NewProduct";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path='/' >
              <Home />
            </Route>
            <Route exact path='/users' >
              <UserList />
            </Route>
            <Route exact path='/users/:userId' >
              <User />
            </Route>
            <Route exact path='/newUser' >
              <NewUser />
            </Route>
            <Route exact path='/products' >
              <Products />
            </Route>
            <Route exact path='/products/:productId' >
              <Product />
            </Route>
            <Route exact path='/newProduct' >
              <NewProduct />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
