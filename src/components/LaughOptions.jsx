import React from "react";
import { Link } from "react-router-dom";
import { NavFooter } from "./common";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const laughOptions = () => {
  const options = [
    "Memes",
    "Jokes",
    "Dad Jokes",
    "Puns",
    "Dank Memes",
    "Animals",
  ];

  const classToggle = (e) => {
    e.preventDefault();
    let target = e.target;
    target.classList.toggle("selected");
  };

  return (
    <>
      <div className="page-content">
        <Link className="top-button" to="/newBreak">
          <MdArrowBack />
        </Link>
        <h3>What do you want to laugh at?</h3>
        <p className="tip">
          We'll save your interests to your profile so you won't have to fill
          this out again. You can always change them later.
        </p>
        <div className="buttons-area options">
          {options.map((option) => {
            return (
              <button key={option} onClick={classToggle}>
                {option}
              </button>
            );
          })}
        </div>
        <NavFooter>
          <Link className="go-button" to="/Content">
            <MdArrowForward />
          </Link>
        </NavFooter>
      </div>
    </>
  );
};

export default laughOptions;
