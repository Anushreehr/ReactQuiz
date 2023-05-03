import { Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./index.css";
const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [pageApi, setPageApi] = useState(1);
  const[time,setTime]=useState(5000);

  
const questions = [
    {
      question: "Which of the following command is used to create react-js-app ?",
      options: ["npm install create-react-app", "npx create-react-app appname", "npx install create-react-app -g", "install - l create-react-app"],
      answer: "npx create-react-app appname",
    },
    {
      question: "What command is used to start the React local development server?",
      options: ["npm start", "npm run dev", "npm serve", "npm build"],
      answer: "npm start",
    },
    {
      question: "Which of the following is used in React.js to increase performance?",
      options: ["Virtual DOM", "Real DOM", "BOTH", "None"],
      answer: "Virtual DOM",
    },
   
    {
      question: "In which language is React.js written?",
      options: ["Python", "JavaScript", "Java", "PHP"],
      answer: "JavaScript",
    },
    {
      question: "Identify the smallest building block of React.JS.",
      options: ["Props", "state", "Components", "None"],
      answer: "Components",
    },
    
  ];

  const handleAnswerSelect = (e) => {
    setSelectedAnswer(e.target.value);
  };
  console.log(score);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    }
  };


  return (
    <>
      <div className='main'>
        <div>
          <Typography
            variant='h4'
            sx={{
              border: "none",
              padding: "0.5rem 4rem",
              backgroundColor: "grey.300",
            }}
          >
            Top 5 Assessments Questions for React
          </Typography>
          
        </div>
      
        <div>
          {currentQuestion < questions.length ? (
            <form onSubmit={handleSubmit}>
              <div className='sub-main'>
                <div className='sub-main-questions'>
                  <div className='sub-main_question_no'>
                    <Typography>{currentQuestion + 1}</Typography>
                  </div>
                  <div>
                    {" "}
                    <Typography
                      variant='h5'
                      sx={{
                        border: "none",
                        padding: "0.5rem 4rem",
                        backgroundColor: "grey.300",
                      }}
                    >
                      {questions[currentQuestion].question}
                    </Typography>
                  </div>
                </div>
                <div className="sub_main_a">
                  {questions[currentQuestion].options.map((option) => (
                    
                      <label className="sub_main_main_a" key={option}>
                        <div className='sub-main_main'>
                        <div className="sub_main_b">
                        <input
                          type='radio'
                          name='answer'
                          value={option}
                          checked={selectedAnswer === option}
                          onChange={handleAnswerSelect}
                          className='input'
                        />
                        </div>
                       <div className="sub_main_x">
                       <Typography className='sub-main_options'>
                          {" "}
                          {option}
                        </Typography>
                       </div>
                        </div>
                      </label>
                   
                  ))}
                </div>
              </div>

              <button className="Button" type='submit'>Submit</button>
            </form>
          ) : (
            <div>
              
            </div>
          )}

<div>
             
              <p >Your score is: {score}</p>
            </div>
        </div>
      </div>
      <Stack spacing={2} sx={{ alignItems: "center", marginTop: "1rem" }}>
        <Pagination  onChange={(e, value) => setCurrentQuestion(value-1)} count={5} showFirstButton showLastButton page={currentQuestion+1}/>
      </Stack>
    </>
  );
};

export default QuizApp;
