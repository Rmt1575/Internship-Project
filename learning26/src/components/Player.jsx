import React from "react";
import { PlayerList } from "./PlayerList";
import { MatchList } from "./MatchList";

export const Player = () => {
  const players = [
    {
      playerid: 1,
      playername: "Whyy",
      riotID: "#Aegon",
      playerlevel: 176,
      rank: "Silver 3",
      kill: 206
    },
    {
      playerid: 2,
      playername: "SR Arq",
      riotID: "#ARQ",
      playerlevel: 156,
      rank: "Gold 1",
      kill: 224
    },
    {
      playerid: 3,
      playername: "Vornova",
      riotID: "#Shadow09",
      playerlevel: 216,
      rank: "Silver 3",
      kill: 189
    },
    {
      playerid: 4,
      playername: "ZoRo",
      riotID: "#MoMo",
      playerlevel: 132,
      rank: "Silver 2",
      kill: 174
    },
    {
      playerid: 5,
      playername: "Iron4Life",
      riotID: "#Santu",
      playerlevel: 223,
      rank: "Silver 1",
      kill: 89
    },
  ];
  const matches = [
    {
      matchid: 1,
      matchmap: "CORRODE",
      matchscore: "13-5",
      matchduration: "36 min",
      matchresult: "Victory",
    },
    {
      matchid: 2,
      matchmap: "ABYSS",
      matchscore: "15-13",
      matchduration: "58 min",
      matchresult: "Victory",
    },
    {
      matchid: 3,
      matchmap: "HEAVEN",
      matchscore: "8-13",
      matchduration: "39 min",
      matchresult: "Defeat",
    },
    {
      matchid: 4,
      matchmap: "SPLIT",
      matchscore: "13-11",
      matchduration: "47 min",
      matchresult: "Victory",
    },
    {
      matchid: 5,
      matchmap: "PEARL",
      matchscore: "13-7",
      matchduration: "42 min",
      matchresult: "Victory",
    },
    {
      matchid: 6,
      matchmap: "BREEZE",
      matchscore: "13-9",
      matchduration: "43 min",
      matchresult: "Victory",
    },
    {
      matchid: 7,
      matchmap: "BIND",
      matchscore: "5-13",
      matchduration: "34 min",
      matchresult: "Defeat",
    },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>VALORANT</h1>
      <PlayerList players={players} />
      <MatchList matches={matches} />
    </div>
  );
};
