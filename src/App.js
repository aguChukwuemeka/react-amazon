import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import ProductList from "./pages/productlist";
import Checkout from "./pages/checkout";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/login" component={Login} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
}

export default App;
//Awesome Screenshot & Screen Recorder
