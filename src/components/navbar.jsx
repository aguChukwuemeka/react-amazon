import React from "react";
import logo from "../assets/amazon_logo.png";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";
import { useStateValue } from "../contexts/stateProvider";

export default function Navbar() {
  const [{ basket }] = useStateValue();
  console.log('🧺', basket);
  return (
    <nav className="nav p-2">
      <Link to="/">
        <img className="logo" src={logo} alt="amazon logo" />
      </Link>
      <div className="search">
        <input type="text" className="search__input" />
        <BiSearchAlt className="search__icon" />
      </div>
      <div className="nav__links">
        <Link to="/signIn" className="links__bar">
          <div className="links___option">
            <span className="header__option__one">Hello Orton</span>
            <span className="header__option__two">Sign In</span>
          </div>
        </Link>

        <Link to="/login" className="links__bar">
          <div className="links___option">
            <span className="header__option__one">Returns</span>
            <span className="header__option__two">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="links__bar">
          <div className="links___option">
            <span className="header__option__one">Your</span>
            <span className="header__option__two">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="links__bar basket__container">
          <div className="links___option__basket">
            <FaCartPlus />
            <span className="header__option__two mx-3 basket__count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
