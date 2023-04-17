import React from "react";
import { ReactDOM } from "react";
import Data from "../Data";

export default function Card() {
  const [search, setSearch] = React.useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  const allCards = Data.filter((item) => {
    return search.toLowerCase() === ""
      ? item
      : item.Name.toLowerCase().includes(search);
  }).map((card) => {
    return (
      <div className="card" key={card.id}>
        <div className="card-image">
          <img
            src={`./images/image-${card.id}.png`}
            alt="agent"
            className="agent-image"
          />
        </div>
        <div className="card-text">
          <h2 className="agent-name">{card.Name}</h2>
          <ul className="list">
            <li className="list-item">
              <b>Nationality:</b> {card.Nationality}
            </li>
            <li className="list-item">
              <b>Role:</b> {card.Role}
            </li>
          </ul>
        </div>
      </div>
    );
  });

  return (
    <section className="section-cards">
      <h1 className="agents-heading">All Agents</h1>
      <input
        type="text"
        name="search"
        placeholder="Search Agent"
        className="search"
        onChange={handleChange}
      />
      <div className="card-box">{allCards}</div>
    </section>
  );
}
