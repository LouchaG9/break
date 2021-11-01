import React from "react";
import { Link } from "react-router-dom";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { NavFooter } from "./common";

const learnOptions = () => {
  const options = [
    "Current Events",
    "Cooking",
    "Technology",
    "Astronomy",
    "Animals",
    "Languages",
    "Genetics",
    "Homesteading",
    "Gardening",
    "DIY Projects",
    "Singing",
    "Oceans",
    "Random Facts",
    "COVID-19",
    "Conspiracies",
    "Design & Art",
  ];

  const classToggle = (e) => {
    e.preventDefault();
    let target = e.target;
    target.classList.toggle("selected");
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Link className="top-button" to="/newBreak">
          <MdArrowBack />
        </Link>
        <h3>What do you want to learn about?</h3>
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
    </React.Fragment>
  );
};

export default learnOptions;
