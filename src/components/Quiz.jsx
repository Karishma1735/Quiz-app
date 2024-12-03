import React, { useEffect, useState } from 'react';
// import Questioncard from './Questioncard';

function Quiz({ username,score,setScore,userScores,setUserScores }) {
  const questions = [
    {
      id:1,
    text: "What is React.js?",
    options: [
      { id: 1, text: "A programming language" },
      { id: 2, text: "A JavaScript library for building user interfaces" },
      { id: 3, text: "A database management system" },
      { id: 4, text: "A server-side framework" }
    ],
    correctAnswerId: 2
  },
  {
      id:2,
    text: "What is JSX in React?",
    options: [
      { id: 1, text: "A syntax extension for JavaScript" },
      { id: 2, text: "A new feature in ES6" },
      { id: 3, text: "A build tool for React applications" },
      { id: 4, text: "A component lifecycle method" }
    ],
    correctAnswerId: 1
  },
  {
      id:3,
    text: "Which lifecycle method is invoked immediately after a component is mounted?",
    options: [
      { id: 1, text: "componentWillMount()" },
      { id: 2, text: "componentDidMount()" },
      { id: 3, text: "componentWillUpdate()" },
      { id: 4, text: "componentDidUpdate()" }
    ],
    correctAnswerId: 2
  },
  {
      id:4,
    text: "What is the purpose of state in React?",
    options: [
      { id: 1, text: "To store component metadata" },
      { id: 2, text: "To store component props" },
      { id: 3, text: "To handle component rendering" },
      { id: 4, text: "To manage component data that changes over time" }
    ],
    correctAnswerId: 4
  },
  {
      id:5,
    text: "In React, how can you pass data to a child component?",
    options: [
      { id: 1, text: "Using props" },
      { id: 2, text: "Using state" },
      { id: 3, text: "Using refs" },
      { id: 4, text: "Using context" }
    ],
    correctAnswerId: 1
  },
  {
      id:6,
    text: "What is the purpose of the 'key' attribute in React lists?",
    options: [
      { id: 1, text: "To uniquely identify elements within an array" },
      { id: 2, text: "To style elements in a list" },
      { id: 3, text: "To control component visibility" },
      { id: 4, text: "To manage state changes" }
    ],
    correctAnswerId: 1
  },
  ]
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  // const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  // const myscore = localStorage.setItem('score' , JSON.stringify(score))

  useEffect(() => {
    setTimeLeft(10);


    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime > 1) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          handleNextQuestion();  
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion]);
  // useEffect(()=>{

  // //   localStorage.setItem('Scores',JSON.stringify(score))
  // // },[score])
  

  const handleAnswerClick = (optionId) => {
    setCurrentAnswer(optionId);
    if (optionId === questions[currentQuestion].correctAnswerId) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
      setCurrentAnswer(null);
    } else {
      setTimeLeft(null); 
 
    }
  };

  // const saveScoreToLocalStorage = (currentUsername, currentScore) => {
  //   const existingScores = JSON.parse(localStorage.getItem('scores')) || [];
  //   const updatedScores = [...existingScores, { username: currentUsername, score: currentScore }];
  //   localStorage.setItem('scores', JSON.stringify(updatedScores));
  // };

    if(questions[currentQuestion].id==6){
      return   <div className="text-3xl text-white">Quiz Complete! Your score: {score}</div>
    }

  return (
    <div>
      <div className="text-3xl text-white">Welcome {username}</div>
      {currentQuestion < questions.length ? (

<div className="question">
          <h2 className="text-3xl font-medium text-white">
            {questions[currentQuestion].text}
          </h2>
          <div className="text-lg text-red-500">
            Time left: {timeLeft} seconds
          </div>
          <div className="options">
            {questions[currentQuestion].options.map(option => (
              <button
                key={option.id}
                className={`w-full py-3 px-4 rounded-lg my-2 text-white ${
                  option.id === currentAnswer ? 'bg-blue-600' : 'bg-black hover:bg-blue-500'
                }`}
                onClick={(e) => handleAnswerClick(option.id)}
              >
                {option.text}
              </button>
            ))}
          </div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleNextQuestion}
          >
            Next
          </button>
        </div>
      ) : (
        <div className="text-3xl text-white">Quiz Complete! Your score: {score}</div>
      )}
    </div>
  );
}

export default Quiz;
// ${
//   option.id === currentAnswer ? 'bg-blue-600' : 'bg-black hover:bg-blue-500'
// }`}