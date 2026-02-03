import React from 'react'

export const MapDemo5 = () => {
    var students = [
        {id:1,name:"Sumit",age:25,marks:86,city:"Mumbai",gender:"male",hobby:"Reading"},
        {id:2,name:"Srusti",age:22,marks:75,city:"Ahmedabad",gender:"female",hobby:"Eating"},
        {id:3,name:"Ajay",age:26,marks:83,city:"Pune",gender:"male",hobby:"Playing"},
        {id:4,name:"Prerna",age:28,marks:86,city:"Delhi",gender:"female",hobby:"Sleeping"},
        {id:5,name:"Mihir",age:21,marks:95,city:"Valsad",gender:"male",hobby:"Valorant"}
    ]

  return (
    <div style={{textAlign:"center", color:"white"}}>
        <h1>MAP DEMO 5</h1>
        <table className="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>MARKS</th>
                    <th>CITY</th>
                    <th>GENDER</th>
                    <th>HOBBY</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((st)=>{
                        return <tr style={{backgroundColor: st.gender == "female" && "pink"}}>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td style={{color: st.age>25 ? "red" : "white"}}>{st.age}</td>
                            <td style={{backgroundColor:st.marks>85 && "lightgreen"}}>{st.marks}</td>
                            <td>{st.city}</td>
                            <td>{st.gender}</td>
                            <td>{st.hobby}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}