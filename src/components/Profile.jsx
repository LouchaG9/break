import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import auth from "../services/authService";
import { MdHome, MdLockOutline, MdSwapHoriz } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import ProfileIcon from "./ProfileIcon";

const Profile = ({ user }) => {
  const editHandler = () => {};

  return (
    <React.Fragment>
      <div className="centered-page-content">
        <Link className="top-button" to="/home">
          <MdHome />
        </Link>
        <div className="heading">
          <ProfileIcon className="profile-circle" />
          <h2>Hey {user.firstName}</h2>
        </div>
        <div className="content-block">
          <div className="section-header">
            <h4>Your Settings</h4>
          </div>
          <div className="setting">
            <MdSwapHoriz />
            <p>Change username</p>
          </div>
          <div className="setting">
            <MdLockOutline />
            <p>Change password</p>
          </div>
          <div className="setting" onClick={auth.logout}>
            <FaSignOutAlt />
            <p>Log out</p>
          </div>
        </div>

        <div className="content-block">
          <div className="section-header">
            <h4>Your Goals</h4>{" "}
            <button className="edit" onClick={editHandler}>
              Edit Goals
            </button>
          </div>
          <article>
            <p>1. {user.goal1}</p>
            <p>2. {user.goal2}</p>
            <p>3. {user.goal3}</p>
          </article>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
