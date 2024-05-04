import React from 'react'

const Questions = ({questions,currentQuestion,userAnswers,userAnswers1, onAnswerClick = () => {}}) => {
   
  return (
   <>

        <div className='max-w-[700px] mx-auto border shadow-md p-4 mt-4'>


<h1 className='text-2xl font-sans font-semibold text-gray-600'>
    <span className='font-bold mx-2 text-2xl text-gray-800'>Q {currentQuestion+1}.</span>
   {questions.question}
</h1>
<div>
   <div className='grid grid-cols-2 gap-4 my-6'>
  {questions?.answerOptions?.map((ans,i)=>{
    return(
        <>
        <button 
        key={ans}
        onClick={()=> onAnswerClick(ans?.isCorrect)}
        className={`${userAnswers[currentQuestion] && ans?.isCorrect === true ? "bg-green-700 border-none text-white":""}  "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"`}>
      {ans?.text}
</button>
        </>
    )
  })}


   </div> 
 
</div>


</div>
        </>
    )
   
  
}

export default Questions