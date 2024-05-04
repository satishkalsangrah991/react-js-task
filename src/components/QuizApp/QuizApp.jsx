import React, { useState } from 'react'
import Questions from './Questions'
import Result from './Result'
import questions from "../../constants/quetions.json";
import AddNewQuiz from './AddNewQuiz';
const QuizApp = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [userAnswers1, setUserAnswers1] = useState(false);
      // Keep all of the logic in App.jsx

  const handleNextQuestion = (isCorrect) => {

    setUserAnswers([...userAnswers, isCorrect]);
    setUserAnswers1(isCorrect)
    setCurrentQuestion(currentQuestion + 1);
    // setUserAnswers1(false)
    // setTimeout(()=>{
    //     setCurrentQuestion(currentQuestion + 1);
    //     setUserAnswers1(false)
    // },2000)
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  return (
   <>
   <div className='hidden'>
   <h1 className='mb3 text-center font-sans text-2xl font-semibold mt-12 mb-5'> Quiz App</h1>
   {/* {currentQuestion} */}
   {questions.length > currentQuestion &&
<Questions questions = 
{questions[currentQuestion]} 
currentQuestion={currentQuestion}
userAnswers ={userAnswers}
userAnswers1 ={userAnswers1}
onAnswerClick={handleNextQuestion}
/>
   }

   {questions.length === currentQuestion &&
   <Result

      userAnswers={userAnswers}
          questions={questions}
          resetQuiz={resetQuiz}
   />
   }

   </div>
<AddNewQuiz
  question = {questions}
/>

   </>
  )
}

export default QuizApp