import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./common";
import { MdAccountCircle } from "react-icons/md";

const Home = ({ user }) => {
  return (
    <React.Fragment>
      <div className="centered-page-content">
        <Link className="top-button" to="/profile">
          <MdAccountCircle />
        </Link>
        <Logo></Logo>
        <h1 className="welcome">
          Hey {user.firstName}, <br></br> time for a break?
        </h1>
        <br></br>
        <Link className="go-button" to="/newBreak">
          Get started
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Home;
