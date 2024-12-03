import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Startpage({ setusername, username, score, userScores }) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const data = e.target[0].value;
    setusername(data); // Set the username when form is submitted
    navigate('/quize');
  }


  const uniqueUserScores = userScores.filter((value, index, self) =>
    index === self.findIndex((t) => (
      t.username === value.username && t.score === value.score
    ))
  );


  return (
    <div className="flex items-center justify-center  container ">
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="w-full max-w-x7s  h-full font-serif input ">
          <h2 className="mb-6 text-2xl font-bold text-center text-white">
            Welcome to Karishma's Quiz
          </h2>
          <form
            action=""
            className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 m-3 "
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex flex-col px-0  ">
              <label className="myinput block text-gray-700 text-sm font-bold mb-2">
                Enter your name here
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="username"
                id="name"
                type="text"
                placeholder="Enter your name here"
                required
              />
            </div>
            <div className="flex items-center justify-between m-7">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-6"
                type="submit"
              >
                Start Quiz
              </button>
            </div>
          </form>

          <div className="mt-10 w-full max-w-xs bg-white p-5 shadow-lg rounded">
            <h3 className="text-xl font-bold text-center mb-4 max-h-fit">
              Leaderboard
            </h3>
            <div className="flex justify-between">
              <div>Name</div>
              <div>Highest score</div>
            </div>
            {uniqueUserScores.map((entry, index) => (
              <div key={index} className="flex justify-between">
                <p>{entry.username}</p>
                <p>{entry.score}</p>
              </div>
            ))}


          </div>
        </div>
      </div>
    </div>
  );
}

export default Startpage;
