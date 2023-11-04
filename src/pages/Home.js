import React from "react";
import "../Css/pageStyles/home.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="home-body">
        <h1>
          Unlock Your Productivity:
          <span>Empower Yourself with the Ultimate To-Do List App!</span>
        </h1>
        <p>
          Listit, your trusty to-do list app, is here to supercharge your
          productivity and make your day a breeze. With Listit, you can
          effortlessly organize your tasks, set priorities, and keep track of
          your accomplishments. Whether you're a student juggling assignments, a
          professional managing deadlines, or simply aiming to achieve your
          goals, Listit offers the perfect digital companion to help you conquer
          your to-do list. Get ready to unlock your full potential and make
          every day a success with Listit.
        </p>
      <Link to="/login">
        <button>
          Get Started
        </button>
      </Link>
      </div>
    </>
  );
}
