import React from 'react'

export const MapDemo1 = () => {

    let cars = ["BMW","FERARI","AUDI","RR","DEFENDER","PORCHE"]

  return (
    <div style={{color:"white"}}>
        <h1 style={{textAlign:"center"}}> MAP DEMO 1</h1>
        {
            cars.map ((car)=>{
                return <h1> {car} </h1>
            })
        }
    </div>
  )
}
