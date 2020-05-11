import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch} from "react-router-dom"
import Navbar from "./component/Navbar"
import ProductList from "./component/ProductList"
import Modal from "./component/Modal"
import Details from "./component/Details"
import Cart from "./component/Cart"
import Default from "./component/Default"

class App extends React.Component{
  render(){
    return(
      <div>
   <Modal/>
  <Navbar/>
  <Switch>

  
  <Route exact path="/" component={ProductList}></Route>
  <Route  path="/details" component={Details}></Route>
  <Route  path="/cart" component={Cart}></Route>
  <Route   component={Default}></Route>
  
  
</Switch>

      </div>
    )
  }
}
export default App

