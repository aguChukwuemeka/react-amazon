import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/logo.png";
import { app } from "../services/firebase";

const auth = app.auth();
const db = app.firestore();
// const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        history.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorCode = error.code;
        alert(errorMessage);
        // console.log(errorCode);
      });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        history.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // console.log(errorCode);
      });
  };

  return (
    <div className="login">
      <div className="my-5">
        <Link to="/">
          <img className="login__logo" src={logo} alt="amazon_login" />
        </Link>
      </div>
      <div className="login__container">
        <h1>SignIn</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            SignIn
          </button>
        </form>
        <p>
          By signing-in you agree to the<strong> AMAZON FAKE CLONE </strong>{" "}
          Conditions of Use & Sale. Please see our Privacy Notice, our Cookies
          Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}
