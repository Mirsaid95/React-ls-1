import React from "react";
import style from "./btn.module.css";

export default function Buttons({value}){
    return(
        <button className={style.btn}>{value}</button>
    )
}