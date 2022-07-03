import React from "react";
import style from "../styles/header.module.css";
import logo from "../images/Icons/Loggo Button.svg";
import SignIn from "./SignIn";
import Search from "./Search";
import Navigation from "./Navigation";
import IconBar from "./IconBar";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container} >
      <div className={style.logo}>
        <img src={logo} alt="WollyProLogo" title="Wolly Pro" />
      </div>
      <Search />
      <SignIn />
      <IconBar />
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
