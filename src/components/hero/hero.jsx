import React from "react";
import style from "./hero.module.css";
import Buttons from "../buttons/btn";

export const Hero = () => {
  return (
    <section>
      <div>
        <div>
          <h1>Bring everyone together to build better products.</h1>
          <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
          <Buttons value={"Get Started"}/>
        </div>
        <div>
            
        </div>
      </div>
    </section>
  );
};
