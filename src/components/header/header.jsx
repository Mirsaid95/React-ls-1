import React from "react";
import style from "./header.module.css";
import logo from "../../assets/logo.svg";
import Buttons from "../buttons/btn";

export const Header = () => {
  return (
    <header className={style.header}>
        <div>
            <img src={logo} alt="" />
        </div>
        <ul className={style.lists}>
            <li className={style.item}><a href="" className={style.link}>Pricing</a></li>
            <li className={style.item}><a href="" className={style.link}>Product</a></li>
            <li className={style.item}><a href="" className={style.link}>About Us</a></li>
            <li className={style.item}><a href="" className={style.link}>Careers</a></li>
            <li className={style.item}><a href="" className={style.link}>Community</a></li>
        </ul>
        <Buttons value={"Get Started"}/>
    </header>
  );
};
