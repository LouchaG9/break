import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

const Content = ({ timer, setTimer }) => {
  const history = useHistory();
  const [timeLeft, setTimeLeft] = useState("");
  const timeRef = useRef("");
  timeRef.current = timeLeft;

  // TIMER TIMELEFT FUNCTION
  let breakTimer;
  function breakTime(callback, delay) {
    var id,
      started,
      remaining = delay,
      running;

    this.start = function () {
      running = true;
      started = new Date();
      id = setInterval(callback, remaining);
    };

    this.pause = function () {
      running = false;
      clearTimeout(id);
      remaining -= new Date() - started;
    };

    this.getTimeLeft = function () {
      if (running) {
        this.pause();
        this.start();
      }

      return remaining;
    };

    this.getStateRunning = function () {
      return running;
    };

    this.start();
  }

  useEffect(() => {
    breakTimer = new breakTime(({ timer }) => {
      alert("times up");
    }, timer);
  });

  const remain = () => {
    console.log(breakTimer.getTimeLeft());
    console.log(timer);
  };

  //setTimeLeft((prevTimeLeft) => breakTimer.getTimeLeft());

  // JOKE API STUFF
  let setup, punchline;
  async function getJoke() {
    const response = await fetch(
      "https://dad-jokes.p.rapidapi.com/random/joke",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
          "x-rapidapi-key":
            "8fd7408927msh4f6ae0f09fb1d4cp17ecd4jsn19d0532c4bf3",
        },
      }
    );
    if (!response.ok) {
      // console log error
      const err = await response.json();
      if (err) console.log(err);
      // throw error (exit this function)
      throw new Error("Problem getting joke");
    }

    const data = await response.json();
    let joke = data.body;
    let setup = joke[0].setup;
    let punchline = joke[0].punchline;

    console.log(joke);
    console.log(setup);
  }

  return (
    <>
      <div className="timeBarBG">
        <div className="timeBar" style={{ width: timeLeft }}></div>
      </div>
      <button
        className="edit edit-top"
        onClick={() => {
          history.push("/home");
        }}
      >
        End Break
      </button>
      <div className="centered-page-content">
        <button className="default-btn" onClick={getJoke}>
          Get Joke
        </button>
        <button className="default-btn" onClick={remain}>
          Time Remaining
        </button>
        <div className="content-block joke">
          <h4></h4>
          <h4></h4>
        </div>
        <div className="content-block meme">
          {/* This is the meme target */}
        </div>
      </div>
    </>
  );
};

export default Content;
