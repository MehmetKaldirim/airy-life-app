import React from "react";
import hero1 from "../images/hero.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={hero1} className="hero--photo" />
      <h1 className="hero--header">Online Expriences</h1>
      <p className="hero--text">
        He's an hero coz he fights for his freddom. And he never stops learning
      </p>
    </section>
  );
}
