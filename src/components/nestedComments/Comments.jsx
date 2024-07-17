import React, { useState } from 'react'

const Comments = ({
    comment ={},
    onSubmitComment = () => {},
    onDeleteComment = () => {},

}) => {
    const [expand, setExpand] = useState(false);
    const [replyContent, setReplyContent] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [editedContent, setEditedContent] = useState(comment.content);

const handleChange =(e)=>{
    setReplyContent(e.target.value)
}

const handleReplySubmit = () => {
    console.log(comment.id)
    console.log(replyContent)
    if (replyContent) {
      onSubmitComment(comment.id, replyContent);
      setReplyContent("");
    }
  };
    const toggleExpand = () => {
        setExpand(!expand);
      };

  return (
  <>
 <div className='bg-sky-100 fleflex-col gap- p-5 my-3 border-b-2'>
<div className=''>
<h1 className='my-1'>{comment.content}</h1>
<h1 className='my-1'>{comment.votes}</h1>
<h1 className='my-1'>{new Date(comment.timestamp).toLocaleString()}</h1>
</div>
<div>
    <button 
    onClick={toggleExpand}
    className='bg-blue-500 text-white py-1  px-2 rounded-md text-sm mx-2'>
    {expand ? "Hide Replies" : "Reply"}
    </button>

    <button className='bg-green-600 text-white py-1 px-2 rounded-md text-sm'>Edit</button>

    <button 
    onClick={() => onDeleteComment(comment.id)}
    className='bg-red-600 text-white py-1 px-2 rounded-md text-sm mx-2'>Delete
   </button>

</div>
   {expand && (
    <>
    <div className='flex gap-4 my-4'>
<textarea 
rows={2}
type="text"
placeholder='Add New Reply...'
value={replyContent}
onChange={handleChange}
className='w-[90%] border outline-none py-3 px-5 border-gray-500 rounded-lg focus:outline-blue-500 focus:border-none'>

</textarea>

<button
onClick={handleReplySubmit}
 className='bg-blue-500 text-white text-sm rounded-lg w[10%] px-2'>  
 Submit Reply
 </button>
</div>

    {comment?.replies?.map((reply) => (
            <Comments
              key={reply.id}
              comment={reply}
              onSubmitComment={onSubmitComment}
              onDeleteComment={onDeleteComment}
          />
     ))}


</> )
   }
 </div>
  </>

  )
}

export default Comments