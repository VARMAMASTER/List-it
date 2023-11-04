import React, { useState } from 'react'
import axios from 'axios';
import "../Css/componentStyles/Login.css"
import { Link } from 'react-router-dom';
export default function Login() {
    const [loginformData, setloginformData] = useState({
        email:"",
        password:"",
    });
    const handleInputChange=(object)=>{
            const {name, value} = object.target;
            setloginformData({
                ...loginformData,
                [name]: value,
            });
    }
    const login_handler = (object)=>{
        object.preventDefault();

        axios.post("/login-details",loginformData,{
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then((response)=>{
            if (response.status === 200){
                console.log(response.data);
            }else{
                console.error("Error: " + response.status,response.data);
            }
        })
        .catch((error)=>{
            console.log("Error:",error);
        });
    };

  return (
    <>
       <div className='login'>
       <div className="login_image">
       <div className='login_form'>
       <h1>
        Sign in
       </h1>
       
       <h4>
        New user? 
        <span>
        <Link to="/Register">
        {" Create an account"}
        </Link>
        </span>
            
       </h4>
        <form action="post" onSubmit={login_handler}>
            <input type="email" name='email' placeholder='Email address' onChange={handleInputChange} value= {loginformData.email}/>
            <input type="password" name='password' placeholder='Password' onChange={handleInputChange} value= {loginformData.password}/>
            <button type='submit'>Submit</button>
        </form>
        <div className='down_buttons'>
        <Link to="/">
        <button>
            {"<-"}
        </button>
        </Link>
        <h4>
        <Link>
        {"Forgot Password?"}
        </Link>
        </h4>
        </div>
       </div>
       </div>

       </div>
    </>
  )
}
