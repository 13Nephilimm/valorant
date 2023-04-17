import React from "react";
import "../styles/home.css";

export default function TopTeams() {
  return (
    <section className="top-teams">
      <h1 className="teams-heading">Top Teams</h1>
      <div className="full-box">
        <div className="team-box">
          <div className="team-img-box">
            <img src="../images/100t.jpg" alt="100t" className="team-img" />
          </div>
          <div className="team-info-box">
            <h2 className="team-name">100 Thieves</h2>
            <p className="team-info">
              The 100 Thieves (100T) Valorant team is a professional esports
              team consisting of top-tier players such as Hiko, Asuna, nitro,
              Ethan, and Steel. Known for their strategic gameplay and
              exceptional teamwork, the team has been a dominant force in the
              Valorant competitive scene since its inception.
            </p>
          </div>
        </div>

        <div className="team-box">
          <div className="team-info-box">
            <h2 className="team-name">Cloud 9</h2>
            <p className="team-info">
              The Cloud 9 Valorant team is a competitive esports team known for
              their skilled and aggressive gameplay style. Comprising top
              players such as TenZ, Relyks, and Vice, the team has consistently
              performed well in various tournaments and events. They are
              respected for their teamwork and coordination, making them a
              formidable opponent in the Valorant esports scene.
            </p>
          </div>
          <div className="team-img-box">
            <img src="../images/cloud9.jpg" alt="100t" className="team-img" />
          </div>
        </div>

        <div className="team-box">
          <div className="team-img-box">
            <img src="../images/fnatic.jpg" alt="100t" className="team-img" />
          </div>
          <div className="team-info-box">
            <h2 className="team-name">Fnatic</h2>
            <p className="team-info">
              Fnatic is a professional esports organization with a top-tier
              Valorant team consisting of players such as Boaster, Doma, and
              Derke. Known for their aggressive and unpredictable playstyle, the
              team has achieved numerous victories and accolades in the
              competitive Valorant scene. With a strong focus on strategy and
              team synergy, Fnatic remains a force to be reckoned with in the
              world of esports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
