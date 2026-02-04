import React from "react";
import "../assets/css/iplteams.css";
import csk from "../assets/images/csk.jpg";
import dc from "../assets/images/dc.jpg";
import gt from "../assets/images/gt.jpg";
import kkr from "../assets/images/kkr.png";
import lsg from "../assets/images/lsg.jpg";
import mi from "../assets/images/mi.jpg";
import pbks from "../assets/images/pbks.jpg";
import rcb from "../assets/images/rcb.jpg";
import rr from "../assets/images/rr.png";
import srh from "../assets/images/srh.png";
import { Link } from "react-router-dom";

export const IPLTeams = () => {
  var teams = [
    {
      teamId: 1,
      teamName: "Chennai Super Kings (CSK)",
      logo: csk,
    },
    {
      teamId: 2,
      teamName: "Royal Challengers Bengaluru (RCB)",
      logo: rcb,
    },
    {
      teamId: 3,
      teamName: "Rajasthan Royals (RR)",
      logo: rr,
    },
    {
      teamId: 4,
      teamName: "Punjab Kings (PBKS)",
      logo: pbks,
    },
    {
      teamId: 5,
      teamName: "Kolkata Knight Riders (KKR)",
      logo: kkr,
    },
    {
      teamId: 6,
      teamName: "Mumbai Indians (MI)",
      logo: mi,
    },
    {
      teamId: 7,
      teamName: "Gujarat Titans (GT)",
      logo: gt,
    },
    {
      teamId: 8,
      teamName: "Delhi Capitals (DC)",
      logo: dc,
    },
    {
      teamId: 9,
      teamName: "Sunrisers Hyderabad (SRH)",
      logo: srh,
    },
    {
      teamId: 10,
      teamName: "Lucknow Super Giants (LSG)",
      logo: lsg,
    },
  ];
  return (
    <div className="teams">
      <h1>
        <b>IPL TEAMS</b>
      </h1>

      {teams.map((team) => {
        return (
          <ul>
            <li> 
              {/* Click On Logo to See Team Details */}
              {team.teamName}
              <Link to={`/teamdetails/${team.teamName}`}>
                <img src={team.logo} alt={team.teamName} />
                <br />
                <br />
              </Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
