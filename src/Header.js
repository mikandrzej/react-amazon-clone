import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const logout = (e) => {
    if (user) auth.signOut();
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          alt=""
          src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
        {/* logo */}
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} onClick={logout}>
          <div className="header__option">
            <span className="header__optionLineOne">
              Hello {user?.email ? user.email : "Guest"}
            </span>

            <span className="header__optionLineTwo">
              {user ? "Log out" : "Log In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returnssss</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="header__basketIcon" />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
