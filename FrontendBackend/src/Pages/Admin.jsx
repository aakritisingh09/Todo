// Admin.jsx
import React, { useState,useEffect } from 'react'
import axios from "axios"

export default function Admin() {

  let [FormData,setFormData] = useState();


  return (
    <div>
      <h1>Add New User</h1>
      <form onSubmit={(e)=>{
        e.preventDefault();
        
        let UserData = {
          name: e.target[0].value,
          age: e.target[1].value,
          email: e.target[2].value,
          phone: e.target[3].value,
          salary: e.target[4].value,
        }
        setFormData(UserData)

        async function SendData()
        {
          let Res = await axios.post("http://localhost:5100/api/addUser",{"FormData":FormData})
          console.log(Res.data)
        }
        SendData()



      }}>
        <input type="text" name="name" placeholder="Name" onChange={null} required />
        <input type="number" name="age" placeholder="Age" onChange={null} required />
        <input type="email" name="email" placeholder="Email" onChange={null} required />
        <input type="tel" name="phone" placeholder="Phone" onChange={null} required />
        <input type="number" name="salary" placeholder="Salary" onChange={null} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}