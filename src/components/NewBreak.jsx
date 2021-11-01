import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { NavFooter } from "./common";

const NewBreak = ({ timer, setTimer }) => {
  const [content, setContent] = useState("");
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(timer, content);

    // This bit is kinda working
    if (content === "laugh") {
      history.push("/laughOptions");
    } else if (content === "learn") {
      history.push("/learnOptions");
    } else {
      history.push("/Mindfullness");
    }
  };

  const clickHandlerOne = (e) => {
    e.preventDefault();
    let target = e.target;
    if (target.matches(".selected.time")) {
      target.classList.remove("selected");
      target.classList.remove("time");
    } else {
      target.classList.add("selected");
      target.classList.add("time");
    }

    let time = document.querySelector(".time");

    if (time.value === null) {
      setTimer("300000");
    } else {
      setTimer((prevState) => {
        return (prevState = time.value);
      });
    }
  };

  const clickHandlerTwo = (e) => {
    e.preventDefault();
    let target = e.target;
    if (target.matches(".selected.content")) {
      target.classList.remove("selected");
      target.classList.remove("content");
    } else {
      target.classList.add("selected");
      target.classList.add("content");
    }
    let type = document.querySelector(".content");

    if (type.value === null) {
      setContent("mindful");
    } else {
      setContent((prevState) => {
        return (prevState = type.value);
      });
    }
  };

  return (
    <>
      <div className="page-content">
        <Link className="top-button" to="/home">
          <MdArrowBack />
        </Link>
        <form>
          <h3>How much time do you have?</h3>
          <div className="buttons-area">
            <button value="300000" onClick={clickHandlerOne}>
              5 mins
            </button>
            <button value="600000" onClick={clickHandlerOne}>
              10 mins
            </button>
            <button value="1200000" onClick={clickHandlerOne}>
              20 mins
            </button>
          </div>
          <p className="tip">default: 5 mins</p>
          <h3>How do you want to spend it?</h3>
          <div className="buttons-area">
            <button className="panel" onClick={clickHandlerTwo} value="learn">
              <span className="button-span">Learning</span>
              <br></br>
              <br></br>Teach yourself something new.
            </button>
            <button className="panel" onClick={clickHandlerTwo} value="laugh">
              <span className="button-span">Laughing</span>
              <br></br>
              <br></br>Laughter is the best medicine after all.
            </button>
            <button className="panel" onClick={clickHandlerTwo} value="mindful">
              <span className="button-span">Being Mindful</span>
              <br></br>
              <br></br>Take some time out for you.
            </button>
          </div>
        </form>
        <NavFooter>
          <button type="submit" className="go-button" onClick={submitHandler}>
            <MdArrowForward />
          </button>
        </NavFooter>
      </div>
    </>
  );
};

export default NewBreak;
