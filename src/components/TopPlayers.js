import React from "react";
import "../styles/home.css";

export default function TopPlayers() {
  return (
    <section className="players-section">
      <h1 className="players-heading">Top Players</h1>
      <div className="full-box">
        <div className="team-box player">
          <div className="team-img-box">
            <img
              src="../images/aspas.jpg"
              alt="Aspas"
              className="team-img pl"
            />
          </div>
          <div className="team-info-box">
            <h2 className="team-name">Aspas</h2>
            <p className="team-info player-info">
              Erick 'aspas' Santos is a professional Brazilian Valorant player
              known for his exceptional skills with the Operator sniper rifle.
              He has played for teams such as Team oNe eSports and is currently
              a member of Vorax Liberty. Aspas is widely respected for his
              precise aim and strategic gameplay, making him a formidable
              opponent in the competitive Valorant scene.
            </p>
          </div>
        </div>

        <div className="team-box player">
          <div className="team-img-box">
            <img src="../images/tenz.jpg" alt="Tenz" className="team-img pl" />
          </div>
          <div className="team-info-box">
            <h2 className="team-name">Tenz</h2>
            <p className="team-info player-info">
              Tenz (Tyson Ngo) is a Canadian professional Valorant player known
              for his aggressive playstyle and exceptional aim. He previously
              played for Cloud9 and is currently a member of Sentinels, where he
              has achieved numerous victories and accolades. Tenz is widely
              regarded as one of the best Valorant players in the world, known
              for his impressive mechanical skill and ability to carry his team
              to victory.
            </p>
          </div>
        </div>

        <div className="team-box player">
          <div className="team-img-box">
            <img
              src="../images/scream.jpg"
              alt="Scream"
              className="team-img pl"
            />
          </div>
          <div className="team-info-box">
            <h2 className="team-name">Scream</h2>
            <p className="team-info player-info">
              KC "Scream" is a Belgian professional Valorant player, known for
              his exceptional mechanical skill and aim. He has played for teams
              such as Team Liquid and currently plays for Team Liquid's Valorant
              roster. Scream is widely regarded as one of the best players in
              the world, known for his ability to make clutch plays and carry
              his team to victory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
