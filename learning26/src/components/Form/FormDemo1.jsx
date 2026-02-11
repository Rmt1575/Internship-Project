import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form' 

export const FormDemo1 = () => {

    const {register,handleSubmit} = useForm()
    const [userData, setuserData] = useState({})
    const [isSubmited, setisSubmited] = useState(false)

    const submitHandler = (data) => {
      console.log(data)
      setuserData(data)
      setisSubmited(true)
    }


  return (
    <div style={{color : "whitesmoke", textAlign : "center"}}>
        <h1 style={{color : "red"}}>FORM DEMO 1</h1>

        <form onSubmit= {handleSubmit(submitHandler)}>
            <div>
                <label>NAME : </label>
                <input type='text' placeholder='Enter Name' {...register("name")}></input>
            </div>
            <div>
                <label>AGE : </label>
                <input type='text' placeholder='Enter Age' {...register("age")}></input>
            </div>
            <div>
                <label>GENDER</label> <br/>
                MALE : <input type='radio' value="male" {...register("gender")}></input>
                FEMALE : <input type='radio' value="female" {...register("gender")}></input>
            </div>
            <div>
                <label>HOBBIES</label> <br/>
                Cricket : <input type='checkbox' value="cricket" {...register("hobbies")}></input>
                Music : <input type='checkbox' value="music" {...register("hobbies")}></input>
                Travel : <input type='checkbox' value="travel" {...register("hobbies")}></input>
                Playing Games : <input type='checkbox' value="playing  games" {...register("hobbies")}></input>
                Reading : <input type='checkbox' value="reading" {...register("hobbies")}></input>
            </div>
            <div>
                <label>ADDRESS : </label>
                <input type='text' placeholder='Enter Address' {...register("address")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>

        </form>
        {
            isSubmited == true && <div>
                <h1>Name : {userData.name} </h1>
                <h2>Age : {userData.age}</h2>
                <h2>Gender : {userData.gender} </h2>
                {
                    userData.hobbies.map((hb) => {
                        return <h2>
                            {hb}
                        </h2>
                    })
                }
                <h2>Address : {userData.address} </h2>
            </div>

        }
    </div>
  )
}
