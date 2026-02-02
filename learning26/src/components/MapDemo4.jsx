import React from 'react'

export const MapDemo4 = () => {
    var cities = [
        {id:1,name:"Mumbai",population:22000000,AQI:189},
        {id:2,name:"Delhi",population:34000000,AQI:222},
        {id:3,name:"Bangalore",population:14000000,AQI:193},
        {id:4,name:"Chennai",population:12000000,AQI:172},
        {id:5,name:"Ahmedabad",population:9000000,AQI:174},
    ]

  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 4</h1>
        <table className="table table-dark">
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>POPULATION</th>
                <th>AQI</th>
            </tr>
        </thead>
        <tbody>
            {
                cities.map((city)=>{
                    return (
                        <tr>
                            <td>{city.id}</td>
                            <td>{city.name}</td>
                            <td>{city.population}</td>
                            <td>{city.AQI}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}
