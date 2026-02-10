import React from 'react'

export const PlayerList = (props) => {
    console.log("emplist ", props);
  return (
    <div>
        <br/>
        <h2 style={{ textAlign: "center", color: "red" }}>Player List</h2>
        <br/>
        <table className="table table-dark">
        <thead>
          <tr>
            <th>PLAYER-ID</th>
            <th>USERNAME</th>
            <th>RIOT-ID</th>
            <th>LEVEL</th>
            <th>RANK</th>
            <th>TOTAL-KILLS</th>
          </tr>
        </thead>
        <tbody>
          {props.players.map((player) => {
            return (
              <tr>
                <td>{player.playerid}</td>
                <td>{player.playername}</td>
                <td>{player.riotID}</td>
                <td>{player.playerlevel}</td>
                <td>{player.rank}</td>
                <td>{player.kill}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}
