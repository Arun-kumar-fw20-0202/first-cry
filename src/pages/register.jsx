import React, { useState } from 'react'
import "../styles/register.css"

let user = {
  first_name: "",
  mobile: "",
  email: "",
  password: ""
}
function Register() {
  const [uData, setUdata] = useState(user)

  const handleChange = (e) => {
    let val = e.target.value;
    setUdata({...uData,[e.target.name]: val})

  }
  
  const {first_name,mobile,email,password} = uData
  

    const handleSubmit  = async (e) => {
      e.preventDefault();
      document.querySelector("#form1").reset();

    // 
      if(password.length < 8){
        alert("Please check you password once !!")
      }else{
        let check = await fetch(`http://localhost:8080/users`);
        let json = await check.json();

        if(json[0] == undefined){
            let res = await fetch(`http://localhost:8080/users`,{
              method: 'POST',
              body: JSON.stringify(uData),
              headers:{
                'Content-Type': 'application/json',
              }
            })
        }else{

          if(json[0].email == email){
            alert("user alredy exist !!")
          }else{
            let res = await fetch(`http://localhost:8080/users`,{
              method: 'POST',
              body: JSON.stringify(uData),
              headers:{
                'Content-Type': 'application/json',
              }
            })
          }
        } 
      }
    // 
  }
  


  return (
    <>
       <div id="container">
            <div className="imgdiv">
                <a href="#"><img src="https://cdn.fcglcdn.com/brainbees/images/n/fc-logo-s.jpg" alt="" /></a>
            </div>
            
            <h3>Register</h3>

            <div className='formDiv'>
                <form id="form1" onSubmit={handleSubmit} >
                    <span>Full Name</span>
                    <input onChange={handleChange} type="text" placeholder="Enter Your Full Name" name="first_name" required />
                    {/* {name.length <= 0 ? <span style={{position: "absolute", left: 0, textAlign: "right", color: "red"}}>Please Fill this field</span> : ""} */}

                    <span>Mobile No.</span>
                    <input onChange={handleChange} type="text" placeholder="Enter Your Number" name="mobile" required />

                    {/* <h5>OTP will be sent on this Mobile No. for verification.</h5> */}
                    <span>Email id</span>
                    <input onChange={handleChange} type="email" placeholder="Enter Your Email" name="email" required />

                    <span>Password</span>
                    <input onChange={handleChange} type="password" placeholder="Enter Your Password" name="password" required />

                    <h5>Password must be at least 8 characters long</h5>
                    <button type='reset'>reset</button>
                    <button  id="btn" type="submit" >Continue</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Register