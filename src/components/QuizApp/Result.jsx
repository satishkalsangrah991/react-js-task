import React from 'react'
import { CgCheck } from 'react-icons/cg';
import { FaRightFromBracket } from 'react-icons/fa6';
import { RxCross1, RxCross2 } from 'react-icons/rx';

const Result = ({userAnswers, questions, resetQuiz = () => {}}) => {
    const correctAnswers = userAnswers.filter((answer) => answer).length;
  return (
  <>
    <div className='max-w-[700px] mx-auto border shadow p-4 mt-4'>
    <h2 className='text-center font-semibold font-sans text-lg'>Results</h2>

    <p>
        You answered {correctAnswers} out of {questions.length} questions{" "}
        <span onClick={resetQuiz} className='text-blue-500 underline font-semibold cursor-pointer'>Click here to Retry</span>
      </p>
      <ul>
        {questions.map((question, index) => {
          return (
            <li key={index}  className='my-3'
            // data-correct={userAnswers[index]}
            >
             <span className='my-'> Q{index + 1}. {question.question} </span>
              <b className='text-green-500'>
                {userAnswers[index]
                  ? <span  className='inline-flex bg-green-600 text-white rounded-full mt-3 relative top-1 mx-2'><CgCheck size={20} className=''/></span>
                  : <>
                  <span  className='inline-flex bg-red-600 text-white rounded-full mt-3 relative top-1 mx-2'><RxCross2 size={20} className=''/></span>
                          <span>Right Ans Is =  
                          {question.answerOptions.find((ans) => ans.isCorrect).text}
                              </span></>
                   }
              </b>
            </li>
          );
        })}
      </ul>
    </div>
  </>
  )
}

export default Result

// `- Right ans is  ${
//     question.answerOptions.find((ans) => ans.isCorrect).text
//   } ` }