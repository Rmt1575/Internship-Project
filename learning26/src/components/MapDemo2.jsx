import React from 'react'

export const MapDemo2 = () => {
    var users =[
        {id:1,name:"Mihir",age:23,gender:"male"},
        {id:2,name:"Mox",age:28,gender:"male"},
        {id:3,name:"Rutvik",age:21,gender:"male"},
        {id:4,name:"Sakshi",age:25,gender:"female"}
    ]

  return (
    <div>

        <h1> MAP DEMO 2 </h1>
        {
            users.map((user)=>{
                return <li>{user.id}-{user.name}-{user.age}-{user.gender}</li>
            })
        }
    </div>
  )
}
