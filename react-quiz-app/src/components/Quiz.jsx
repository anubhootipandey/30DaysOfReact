import React, { useState } from "react";
import { questions } from "./Question";

const Quiz = () => {
  const initialState = {
    currQuestion: 0,
    score: 0,
    answers: [],
    result: false,
  };

  const [quizState, setQuizState] = useState(initialState);

  const handleAnswerSelection = (questionIndex, selectedAnswer) => {
    // Update answers state with the selected answer for the current question
    const updatedAnswer = [...quizState.answers];
    updatedAnswer[questionIndex] = selectedAnswer;
    setQuizState(prevState => ({
      ...prevState,
      answers: updatedAnswer
    }));
  };

  const handleNextQuestion = () => {
    // Handle logic for moving to the next question
    const { currQuestion, answers, score } = quizState;
    if (
      answers[currQuestion] === questions[currQuestion].answer ||
      JSON.stringify(answers[currQuestion]) ===
        JSON.stringify(questions[currQuestion].answer)
    ) {
      setQuizState(prevState => ({
        ...prevState,
        score: score + 1
      }))
    }
    if (currQuestion + 1 < questions.length) {
      setQuizState(prevState => ({
        ...prevState,
        currQuestion: currQuestion + 1
      }));
    } else {
      setQuizState(prevState => ({
        ...prevState,
        result: result + 1
      }));
    }
  };

  const handleReset = () => {
    // Reset all state variables
    setQuizState(initialState);
  };

  const { currQuestion, score, result } = quizState;

  return (
    <div className="quiz-container">
      {result ? (
         // Display quiz completion message and reset button
        <div>
          <h2>Quiz Complete!</h2>
          <h3>Your Score: {score}/7</h3>
          <button className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      ) : (
        // Display current question and input elements
        <div>
          <h2>Questions: {currQuestion + 1}</h2>
          <h3>{questions[currQuestion].question}</h3>
          {questions[currQuestion].type === "radio" && (
            <ul>
              {questions[currQuestion].options.map((option, index) => (
                <li key={index}>
                  <input
                    type="radio"
                    name={`question${currQuestion}`}
                    value={option}
                    onChange={() => handleAnswerSelection(currQuestion, option)}
                  />
                  {option}
                </li>
              ))}
            </ul>
          )}
          {questions[currQuestion].type === "checkbox" && (
            <ul>
              {questions[currQuestion].options.map((option, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    name={`question${currQuestion}`}
                    value={option}
                    onChange={() => handleAnswerSelection(currQuestion, option)}
                  />
                  {option}
                </li>
              ))}
            </ul>
          )}
          {questions[currQuestion].type === "input" && (
            <input
              type="text"
              onChange={(e) =>
                handleAnswerSelection(currQuestion, e.target.value)
              }
            />
          )}
          {questions[currQuestion].type === "textarea" && (
            <textarea
              rows="4"
              cols="50"
              onChange={(e) =>
                handleAnswerSelection(currQuestion, e.target.value)
              }
            />
          )}
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
