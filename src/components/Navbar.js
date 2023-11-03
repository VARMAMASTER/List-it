import React from "react";
import "../Css/componentStyles/navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  const listItems = [
    {
      Item: "Home",
      Link: "/Home",
    },
    { Item: "About App", Link: "/About-App" },
    { Item: "About Developer", Link: "/About-Developer" },
  ];
  return (
    <nav className="nav">
      <div className="logo"></div>
      <ul>
        {listItems.map((items) => (
            <li>
          <Link to={items.Link}>
            {items.Item}
          </Link>
            </li>
        ))}
      </ul>

      <Link to="/login">
        <button>Login</button>
      </Link>
    </nav>
  );
}
