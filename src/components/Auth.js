import React, { useState } from "react";
import "../Css/componentStyles/Auth.css";
import { Link } from "react-router-dom";

export default function Auth() {
  const [isRegister, setRegister] = useState(false);
  const toggle_Register = () => {
    setRegister(!isRegister);
  };

  
  const registerHandler = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
  };


  const loginHandler = (email, password) => {
    
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData && userData.email === email && userData.password === password) {
      alert("User logged in successfully");
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      <div className="login">
        <div className="login_image">
          <div className="login_form">
            <h1>{!isRegister ? "Sign in" : "Create an account"}</h1>
            <h4>
              {!isRegister ? " New user?" : "Already have an account?"}
              <span onClick={toggle_Register}>
                {!isRegister ? " Create an account" : " Sign in"}
              </span>
            </h4>
            {isRegister ? (
              <Registerform registerHandler={registerHandler} />
            ) : (
              <Loginform loginHandler={loginHandler} />
            )}
            <div className="down_buttons">
              <Link to="/">
                <button>{"home"}</button>
              </Link>
              <h4>
                <Link>{!isRegister ? "Forgot Password?" : ""}</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Loginform = ({ loginHandler }) => {
  const [loginformData, setLoginformData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginformData({
      ...loginformData,
      [name]: value,
    });
  };

  const loginSubmit = (event) => {
    event.preventDefault();
    const { email, password } = loginformData;
    loginHandler(email, password);
  };

  return (
    <>
      <form action="post" onSubmit={loginSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          onChange={handleInputChange}
          value={loginformData.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
          value={loginformData.password}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

const Registerform = ({ registerHandler }) => {
  const [RegisterformData, setRegisterformData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterformData({
      ...RegisterformData,
      [name]: value,
    });
  };

  const registerSubmit = (event) => {
    event.preventDefault();
    registerHandler(RegisterformData);
  };

  return (
    <>
      <form action="post" onSubmit={registerSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Name"
          onChange={handleInputChange}
          value={RegisterformData.username}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          onChange={handleInputChange}
          value={RegisterformData.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
          value={RegisterformData.password}
        />
        <input
          type="password"
          name="confirmpassword"
          placeholder="Confirm Password"
          onChange={handleInputChange}
          value={RegisterformData.confirmpassword}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};
