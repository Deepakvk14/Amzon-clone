import React ,{useEffect} from "react";
import Header from "./Header"
import './App.css';
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import {auth} from "./Firebase";
import { useStateValue } from "./StateProvider";
import Register from "./Register";

function App() {
  const [{},dispatch]  = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser) {
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }else {
        dispatch({
          type:"SET_USER",
          user:null,
        })
      }
    })
  },[]);
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route path="/login">
      <Login/>
      
    
    </Route>
    <Route path="/register">
    <Register/>
    </Route>
    <Route path="/checkout">
    <Header/>
      <Checkout/>
      </Route>
    <Route path="/">
    <Header/>
      <Home/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
