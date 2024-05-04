
import { useCallback, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function AddNewQuiz({question}) {
 

  const [questions, setQuestions] = useState(question);

//   console.log(Boolean( typeof "true"))
//   console.log( typeof true)




  // State to hold form input values
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswerOptions, setNewAnswerOptions] = useState(['', '', '', '']);
  const [newCorrectOption, setNewCorrectOption] = useState(0); // Index of correct option
//   console.log()
  // State to hold index of question being edited
  console.log(newCorrectOption)
  const [editIndex, setEditIndex] = useState(null);
  const [page, setPage] = useState(6);

  const [pageIndex, setPageIndex] = useState(0);
  const pageCount = Math.ceil((questions.length/page).toFixed(2))
  console.log(pageCount,questions.length)



  const handleCorrectOptionChange = (index) => {
    setNewCorrectOption(index);
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new question object
    const questionObject = {
        id:Date.now(),
       question: newQuestion,
       answerOptions: newAnswerOptions.map((option, index) => ({
        text: option,
        isCorrect: index === newCorrectOption  // Set the first option as correct by default
      }))
    };
    // Update state with the new question
    setQuestions([...questions, questionObject]);
    // Reset form input values
    console.log([questionObject])
    setNewQuestion('');
    setNewAnswerOptions(['', '', '', '']);
  };


  // Function to handle editing of existing question
  const handleEdit = (index) => {
    setEditIndex(index);
    const { question, answerOptions } = questions[index];
    setNewQuestion(question);
    setNewAnswerOptions(answerOptions.map(option => option.text));
    // setNewCorrectOption(answerOptions.map(option => option.isCorrect===true))
      // Find the index of the correct answer
  const correctOptionIndex = answerOptions.findIndex(option => option.isCorrect);
  console.log(correctOptionIndex)
  // Set the correct option index in state
  setNewCorrectOption(correctOptionIndex);

  };

//   delete 
const handleDelete =(index)=>{
const id = questions.filter((val,i)=>{
    return  i !== index
})
setQuestions(id)
console.log(id.length)
}

  // Function to handle updating edited question
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedQuestions = [...questions];
    updatedQuestions[editIndex] = {
      question: newQuestion,
      answerOptions: newAnswerOptions.map((option, index) => ({
        text: option,
        isCorrect: index === 0 // Assuming the first option is always correct
      }))
    };
    setQuestions(updatedQuestions);
    setEditIndex(null);
    setNewQuestion('');
    setNewAnswerOptions(['', '', '', '']);
  };

  // Handle input change for question field
  const handleQuestionChange = (e) => {
    setNewQuestion(e.target.value);
  };

  // Handle input change for answer option fields
  const handleAnswerOptionChange = (e, index) => {
    const updatedOptions = [...newAnswerOptions];
    updatedOptions[index] = e.target.value;
    setNewAnswerOptions(updatedOptions);
  };

  return (
    <>
      {/* {questions.map((question, index) => (
        <div key={index} className='flex flex-col cursor-pointer'>

          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}> Delete </button>

          <h3>{question.question}</h3>
          <ul>
            {question.answerOptions.map((option, index) => (
              <li key={index}>{option.text}</li>
            ))}
          </ul>
        </div>
      ))} */}

      {/* Form for adding new question or updating existing question */}
     <div className='container mx-auto '>
     <form
     className='max-w-[800px] mx-auto my-5 border p-4 shadow-md'
      onSubmit={editIndex !== null ? handleUpdate : handleSubmit}>
      <div>
      <label className='text-lg font-sans font-semibold'>
        Add New Question:
          <input 
          className='border outline-none bg-gray-100 w-full py-1.5 px-4 focus:outline-blue-300 rounded-sm my-3'
          type="text" value={newQuestion} onChange={handleQuestionChange} />
        </label>
      </div>
        {/* Input fields for answer options */}
     <div className='gri smgrid-cols-2 fle flex-wrap justify-betwee'>
     {[0, 1, 2, 3].map((index) => (
            <>
      <div className='xl:col-span5'>
      <label key={index} className='text-lg font-sans font-semibold '>
            Option {index + 1}:
            <input
              type="text"
              className='border outline-none bg-gray-100 w-full py-1.5 px-4 focus:outline-blue-300 rounded-sm my-1'
              value={newAnswerOptions[index]}
              onChange={(e) => handleAnswerOptionChange(e, index)}
            />
          </label>
      </div>

       <div className='fle'>
       <label className='mx-4 text-lg font-sans font-semibold text-gray-500'>
              Correct?
              <input
              className='mx-4 w-5 h-5 mt-2 relative top-1 cursor-pointer'
                type="checkbox"
                checked={index === newCorrectOption}
                onChange={() => handleCorrectOptionChange(index)}
              />
            </label>
       </div>
            </>
        ))}
     </div>
        {/* Change button text based on whether editing or adding new question */}
        <button type="submit" className='px-10 my-5 border bg-indigo-500 text-white py-3 rounded-md text-md font-sans font-semibold hover:bg-indigo-700'>{editIndex !== null ? 'Update Question' : 'Add New Question'}</button>
      </form>
     </div>

      <div className='max-w-[700p container mx-auto borde shadowmd p-4 mt-4'>
      <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-4'>
      {questions.slice(page*(pageIndex+1)-page,(page*(pageIndex+1))).map((question, i) => (
<div className='border shadow-md p-4'>
<div className="flex items-center justify-end rounded-md shadowsm">
        <button
        onClick={() => handleEdit(i)} 
        className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
          <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </span>
          <span className="hidden md:inline-block">Edit</span>
        </button>
      
        <button 
        onClick={() => handleDelete(i)}
        className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </span>
          <span className="hidden md:inline-block">Delete</span>
        </button>
      </div>
<h1 className='text-lg font-sans font-semibold text-gray-600'>
    <span className='font-bold mx-2 text-2xl text-gray-800'>Q {i+1}.</span>
   {question.question}
</h1>
<div>

{/* ${userAnswers[currentQuestion] && ans?.isCorrect === true ? 
          "bg-green-700 border-none text-white":""} */}


   <div className='grid grid-cols-2 gap-4 my-6'>
  {question?.answerOptions?.map((ans,i)=>{
    return(
        <>
        <button 
        key={i}
        // onClick={()=> onAnswerClick(ans?.isCorrect)}
        className={
          `"bg-transparent text-sm hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "`}>
      {ans?.text}
</button>
        </>
    )
  })}


   </div> 
 
</div>
</div>
  ))} 
  </div>


     </div>


     <div className="flex gap-3 flex-wrap p-6 py-12 justify-center">
      <PaginationNav1
        gotoPage={setPageIndex}
        canPreviousPage={pageIndex > 0}
        canNextPage={pageIndex < pageCount - 1}
        pageCount={pageCount}
        pageIndex={pageIndex}
      />
    </div>

    </>
  );
}

export default AddNewQuiz



function Button2({ content, onClick, active, disabled }) {
  return (
    <button

      className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg
      ${active ? "bg-re-600 text-whit border bg-green-500 text-green-700 font-bold shadow-lg" : "text-red-500"}
      ${
        !disabled
          ? "bg-white hover:bg-red-500 hover:text-white"
          : "text-red-300 bg-white cursor-not-allowed"
      }
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

function PaginationNav1({
  gotoPage,
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
}) {
  // console.log(pageIndex)
  const renderPageLinks = useCallback(() => {
    if (pageCount === 0) return null;
   
    const visiblePageButtonCount = 3;
    let numberOfButtons =
      pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount;
      console.log(numberOfButtons)
    const pageIndices = [pageIndex];
    console.log(pageIndices)
    numberOfButtons--;
    console.log(pageIndices)
    console.log(numberOfButtons);

    [...Array(numberOfButtons)].forEach((_item, itemIndex) => {
      const pageNumberBefore = pageIndices[0] - 1;
      console.log(pageNumberBefore)
      const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1;
      console.log(pageNumberAfter)
      if (
        pageNumberBefore >= 0 &&
        (itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)
      ) {
        pageIndices.unshift(pageNumberBefore);
      } else {
        pageIndices.push(pageNumberAfter);
      }
    });
    // console.log(numberOfButtons)
    return pageIndices.map((pageIndexToMap) => (
      <li key={pageIndexToMap}>
        <Button2
          content={pageIndexToMap + 1}
          onClick={() => gotoPage(pageIndexToMap)}
          active={pageIndex === pageIndexToMap}
        />
      </li>
    ));
  }, [pageCount, pageIndex]);
  return (
    <ul className="flex gap-2">
      <li>
        <Button2
          content={
            <div className="flex ml-1">
              <FaChevronLeft size="0.6rem" />
              <FaChevronLeft size="0.6rem" className="-translate-x-1/2" />
            </div>
          }
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        />
      </li>
      {renderPageLinks()}
      <li>
        <Button2
          content={
            <div className="flex ml-1">
              <FaChevronRight size="0.6rem" />
              <FaChevronRight size="0.6rem" className="-translate-x-1/2" />
            </div>
          }
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        />
      </li>
    </ul>
  );
}