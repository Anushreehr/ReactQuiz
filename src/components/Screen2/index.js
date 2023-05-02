import { Pagination, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import "./index.css";
const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "What is the largest ocean in the world?",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      answer: "Pacific",
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yen", "Euro", "Dollar", "Pound"],
      answer: "Yen",
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
            Top 20 Assessments Questions for React
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
                <div>
                  {questions[currentQuestion].options.map((option) => (
                    
                      <label key={option}>
                        <div className='sub-main_main'>
                        <div>
                        <input
                          type='radio'
                          name='answer'
                          value={option}
                          checked={selectedAnswer === option}
                          onChange={handleAnswerSelect}
                          className='input'
                        />
                        </div>
                       <div>
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

              <button type='submit'>Submit</button>
            </form>
          ) : (
            <div>
              <h2>Quiz Complete!</h2>
              <p>Your score is: {score}</p>
            </div>
          )}

<div>
             
              <p>Your score is: {score}</p>
            </div>
        </div>
      </div>
      <Stack spacing={2} sx={{ alignItems: "center", marginTop: "5rem" }}>
        <Pagination count={20} showFirstButton showLastButton />
      </Stack>
    </>
  );
};

export default QuizApp;
