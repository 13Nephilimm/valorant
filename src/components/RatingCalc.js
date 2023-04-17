import React from "react";
import { ReactDOM } from "react";
import "../styles/calculator.css";

export default function RatingCalc() {
  const [kill, setKill] = React.useState(0);
  const [assist, setAssist] = React.useState(0);
  const [death, setDeath] = React.useState(0);
  const [kda, setKda] = React.useState("");
  const [message, setMessage] = React.useState("");

  function calcKda() {
    const kda = (Number(kill) + Number(assist)) / death;
    console.log(kill, assist, death);
    console.log(kda);
    setKda(kda);
    setMessage(kda);
  }

  return (
    <section className="calculator-section">
      <div className="main-container">
        <div className="calc-box">
          <h1 className="calc-heading">Rating Calculator:</h1>
          <input
            type="number"
            name="kill"
            placeholder="Kills:"
            className="input kills"
            onChange={(event) => setKill(event.target.value)}
          />
          <input
            type="number"
            name="assist"
            placeholder="Assists:"
            className="input assists"
            onChange={(event) => setAssist(event.target.value)}
          />
          <input
            type="number"
            name="death"
            placeholder="Deaths:"
            className="input deaths"
            onChange={(event) => setDeath(event.target.value)}
          />
          <button className="btn" onClick={calcKda}>
            Check
          </button>
          <p className="message">Your Match Rating is: {message}</p>
        </div>
        <div className="image-box">
          <img src="./images/calculator-wallpaper.jpg" alt="wallpaper" />
        </div>
      </div>
    </section>
  );
}
