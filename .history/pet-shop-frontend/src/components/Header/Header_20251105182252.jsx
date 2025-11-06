import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
      </div>
      <nav className="header__nav">
        <Link to="/">Main Page</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/products">All products</Link>
        <Link to="/sales">All sales</Link>
      </nav>
      <div className="header__cart">
        <Link to="/cart">
        <img src="/icon.svg" alt="Cart" className="header__cart-icon" />
        </Link>
</div>
    </header>
  );
};

export default Header;