import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { List, ListItem } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import "./Header.css";
import { Menu } from "./Menu";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      window.location.reload();
    }
  };

  const [product, setProduct] = useState(false);
  /* const [productClick1, setProductClick1] = useState(false);
  const [productClick2, setProductClick2] = useState(false);
  const handleBar1 = () => setProductClick1(!productClick1);
  const handleBar2 = () => setProductClick2(!productClick2); */

  return (
    <div className="header">
      <div className="header__main">
        <Link to="#" onClick={handleClick} className="header__menu">
          {click ? (
            <CloseIcon className="menu" />
          ) : (
            <MenuIcon className="menu" />
          )}
        </Link>
        <div className="header__name">Amit Exports</div>
      </div>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <div className="header__search">
        <input
          style={{ color: "blue", paddingLeft: "10px" }}
          type="text"
          placeholder=" search"
          className="header__search__bar"
          onKeyDown={handleEnter}
        />
        <Link to="#" onClick={handleClick}>
          <SearchIcon className="search__button" />
        </Link>
      </div>
      <Button
        className="header__button"
        onClick={() => window.scrollBy(0, 1000)}
      >
        Contact Us
      </Button>
      <div className={click ? "nav__menu active" : "nav__menu"}>
        <List className="menu_1">
          {Menu.map((item, index) => {
            return (
              <Link to="#" key={index}>
                <ListItem>{item.title}</ListItem>
              </Link>
            );
          })}
          {/* <Link to="#">
            <li onClick={handleBar1}>
              Furniture
              <DoubleArrowIcon />
            </li>
          </Link>
          <div className={productClick1 ? "menu_22" : "menu_2"}>
            <Link to="#">
              <li>Chair</li>
            </Link>
            <Link to="#">
              <li>Table</li>
            </Link>
            <Link to="#">
              <li>stool</li>
            </Link>
          </div>
          <Link to="#">
            <li>
              Products
              <DoubleArrowIcon />
            </li>
          </Link>
          <div className={productClick ? "menu_22" : "menu_2"}/>
            <Link to="#">
              <li>Chair</li>
            </Link>
            <Link to="#">
              <li>Table</li>
            </Link>
            <Link to="#">
              <li>stool</li>
            </Link>
          </div>
          <Link to="#">
            <li>Products</li>
          </Link>
          <Link to="#">
            <li>Products</li>
          </Link> */}
        </List>
      </div>
    </div>
  );
}

export default Header;
