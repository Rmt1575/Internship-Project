import React, { useState } from "react";
import "../assets/css/scoreboard.css";

export const RouteComponent1 = () => {
  const players = [
    {
      id: 1,
      name: "SR Arq",
      riotID: "#JOD",
      level: 156,
      kills: 35,
      death: 19,
      asists: 12,
      rank: "Silver 3",
      acs: 368,
    },
    {
      id: 2,
      name: "Whyyy",
      riotID: "#Maggi",
      level: 178,
      kills: 32,
      death: 21,
      asists: 8,
      rank: "Silver 3",
      acs: 341,
    },
    {
      id: 3,
      name: "Vornova",
      riotID: "#Rutu",
      level: 210,
      kills: 23,
      death: 23,
      asists: 19,
      rank: "Silver 1",
      acs: 298,
    },
    {
      id: 4,
      name: "ZoRo",
      riotID: "#MoMo",
      level: 126,
      kills: 24,
      death: 22,
      asists: 10,
      rank: "Silver 2",
      acs: 289,
    },
    {
      id: 5,
      name: "Iron4Life",
      riotID: "#Santu",
      level: 219,
      kills: 11,
      death: 28,
      asists: 6,
      rank: "Bronze 2",
      acs: 165,
    },

    {
      id: 6,
      name: "JapexYT",
      riotID: "#JEX",
      level: 314,
      kills: 33,
      death: 24,
      asists: 10,
      rank: "Gold 2",
      acs: 334,
    },
    {
      id: 7,
      name: "Zeus",
      riotID: "#Zapp",
      level: 256,
      kills: 28,
      death: 26,
      asists: 9,
      rank: "Gold 1",
      acs: 299,
    },
    {
      id: 8,
      name: "Yashh",
      riotID: "#Yaix",
      level: 159,
      kills: 22,
      death: 28,
      asists: 12,
      rank: "Silver 2",
      acs: 278,
    },
    {
      id: 9,
      name: "I Miss Her",
      riotID: "#HER",
      level: 289,
      kills: 16,
      death: 28,
      asists: 3,
      rank: "Silver 1",
      acs: 196,
    },
    {
      id: 10,
      name: "ReaperYT",
      riotID: "#RIP",
      level: 108,
      kills: 5,
      death: 30,
      asists: 6,
      rank: "Bronze 3",
      acs: 143,
    },
  ];

  /* ===== SORT STATE ===== */
  const [sortState, setSortState] = useState("none"); // none | asc | desc

  const toggleSort = () => {
    setSortState((prev) =>
      prev === "none" ? "desc" : prev === "desc" ? "asc" : "none",
    );
  };

  /* ===== SORTED DATA ===== */
  const displayedPlayers =
    sortState === "none"
      ? players
      : [...players].sort((a, b) =>
          sortState === "desc" ? b.acs - a.acs : a.acs - b.acs,
        );

  /* ===== MVP LOGIC ===== */
  const matchMvp = players.reduce((max, p) => (p.acs > max.acs ? p : max));
  const enemyMvp = players
    .filter((p) => p.id > 5)
    .reduce((max, p) => (p.acs > max.acs ? p : max));

  /* ===== K/D CALC ===== */
  const calculateKD = (kills, deaths) =>
    deaths === 0 ? kills.toFixed(2) : (kills / deaths).toFixed(2);

  return (
    <div className="scoreboard-container">
      <h1 className="score-title">SCORE BOARD</h1>

      <table className="scoreboard-table">
        <thead>
          <tr>
            <th>NO</th>
            <th>PLAYER</th>
            <th>LEVEL</th>
            <th>KILL</th>
            <th>DEATH</th>
            <th>K/D</th>
            <th>ASSIST</th>
            <th>RANK</th>

            <th className="sortable" onClick={toggleSort}>
              ACS
              <span className="sort-arrow">
                {sortState === "desc" && " ▲"}
                {sortState === "asc" && " ▼"}
                {sortState === "none" && " ⇅"}
              </span>
            </th>
          </tr>
        </thead>

        <tbody>
          {displayedPlayers.map((player, index) => {
            const isMyTeam = player.id <= 5;
            const isMatchMvp = player.id === matchMvp.id;
            const isEnemyMvp = player.id === enemyMvp.id;

            return (
              <tr
                key={player.id}
                className={`
                  ${isMyTeam ? "my-team" : "enemy-team"}
                  ${isMatchMvp ? "mvp-my-team" : ""}
                  ${isEnemyMvp ? "mvp-enemy-team" : ""}
                `}
              >
                <td>{index + 1}</td>

                <td className="player-cell">
                  <div className="player-name-row">
                    <span className="player-name">{player.name}</span>

                    {isMatchMvp && (
                      <span className="mvp-badge match-mvp">MATCH MVP</span>
                    )}

                    {isEnemyMvp && (
                      <span className="mvp-badge team-mvp">TEAM MVP</span>
                    )}
                  </div>

                  <span className="riot-id">{player.riotID}</span>
                </td>

                <td>{player.level}</td>
                <td>{player.kills}</td>
                <td>{player.death}</td>

                {/* ===== K/D COLUMN ===== */}
                <td className="kd">
                  {calculateKD(player.kills, player.death)}
                </td>

                <td>{player.asists}</td>

                <td
                  className={
                    player.rank.includes("Gold")
                      ? "rank-gold"
                      : player.rank.includes("Silver")
                        ? "rank-silver"
                        : "rank-bronze"
                  }
                >
                  {player.rank}
                </td>

                <td className="acs">{player.acs}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
