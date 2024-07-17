import React, { useState } from 'react'
import comments from './data.json'
import useComentTree from './useComentTree'
import Comments from './Comments'
const NestedComent = () => {
    // console.log(comments)
    const {comments:commentsData,insertComment,  deleteComment} = useComentTree(comments)
    console.log(commentsData)

    const [comment, setComment] = useState("");
    
  const handleEditChange = (e) => {
    setComment(e.target.value);
  };
  const handleReply = (commentId, content) => {
    console.log(commentId,content)
    insertComment(commentId, content);
    // onSubmit(content);
  };
const handleSubmit =()=>{
    if (comment) {
        handleReply(undefined, comment);
        setComment("");
      }
}

const handleDelete = (commentId) => {
  deleteComment(commentId);
  // onDelete(commentId);
};
  return (
   <>
  <div className='container mx-auto my-5'>
<h1 className='text-4xl font-semibold font-sans text-gray-600 my-5'>Nested Comments system</h1>
<div className='flex gap-4 '>
<textarea 
rows={2}
type="text"
value={comment}
onChange={handleEditChange}
placeholder='Add New Commnets...'
className='w-[90%] border outline-none py-3 px-5 border-gray-500 rounded-lg focus:outline-blue-500 focus:border-none'>

</textarea>
<button 
onClick={handleSubmit}
className='bg-blue-500 text-white text-sm rounded-lg w[10%] px-2'>Add Comments</button>
</div>


  </div>

  <div className='container mx-auto '>
  {commentsData.map((comment) => (

<Comments
 key={comment.id}
 comment={comment}
 onSubmitComment={handleReply}
 onDeleteComment={handleDelete}
/>

))}
  </div>
   </>
  )
}

export default NestedComent