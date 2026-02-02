import React from 'react'

export const MapDemo3 = () => {
    var students = [
        {id:1,name:"Sumit",age:25,marks:72,city:"Mumbai",gender:"male",hobby:"Reading"},
        {id:2,name:"Srusti",age:22,marks:86,city:"Ahmedabad",gender:"female",hobby:"Eating"},
        {id:3,name:"Ajay",age:26,marks:83,city:"Pune",gender:"male",hobby:"Playing"},
        {id:4,name:"Prerna",age:28,marks:92,city:"Delhi",gender:"female",hobby:"Sleeping"}
    ]

  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 3</h1>
        <table border="2" align='center'>
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
                        return <tr>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td>{st.age}</td>
                            <td>{st.marks}</td>
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
