import React from 'react'

export const MapDemo1 = () => {

    let cars = ["BMW","FERARI","AUDI","RR","DEFENDER","PORCHE"]

  return (
    <div>
        <h1> MAP DEMO 1</h1>
        {
            cars.map ((car)=>{
                return <h1> {car} </h1>
            })
        }
    </div>
  )
}
