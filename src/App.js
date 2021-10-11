import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Checkout from "./pages/checkout";
import ProductList from "./pages/productlist";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./contexts/stateProvider";
import Navbar from "./components/navbar";
import { app } from "./services/firebase";

function App() {
  // const auth = getAuth();
  const auth = app.auth();
  const [{user}, dispatch] = useStateValue();
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       dispatch({
  //         type: "SET_USER",
  //         user,
  //       });
  //     } else {
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  //   // return () => {
  //   //   unsubscribe();
  //   // };
  // }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

console.log(user);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <ProductList />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/checkout">
          <Navbar />
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
//Awesome Screenshot & Screen Recorder
