import React from 'react'

export const MatchList = (props) => {
  return (
    <div>
        <br/>
        <h2 style={{ textAlign: "center", color: "red" }}>Match List</h2>
        <br/>
        <table className="table table-dark">
        <thead>
          <tr>
            <th>MATCH-ID</th>
            <th>MAP</th>
            <th>SCORE</th>
            <th>DURATION</th>
            <th>RESULT</th>
          </tr>
        </thead>
        <tbody>
          {props.matches.map((emp) => {
            return (
              <tr>
                <td>{emp.matchid}</td>
                <td>{emp.matchmap}</td>
                <td>{emp.matchscore}</td>
                <td>{emp.matchduration}</td>
                <td>{emp.matchresult}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}
