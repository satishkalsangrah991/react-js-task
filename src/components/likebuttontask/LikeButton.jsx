import React, { useState } from 'react'

const LikeButton = () => {
const SpinnerIcon =    
<svg
// className={className}
className='mt-0.5 font-semibold'
width={16}
height={16}
viewBox="0 0 38 38"
xmlns="http://www.w3.org/2000/svg"
stroke="currentColor"
>
<g fill="none" fillRule="evenodd">
  <g transform="translate(1 1)" strokeWidth="2">
    <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
    <path d="M36 18c0-9.94-8.06-18-18-18">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 18 18"
        to="360 18 18"
        dur="1s"
        repeatCount="indefinite"
      />
    </path>
  </g>
</g>
</svg>

const HeartIcon =    
<svg
// className={className}
className='mt-0.5 font-semibold'
fill="currentColor"
viewBox="0 0 24 24"
width="16"
height="16"
>
<g>
  <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
</g>
</svg>

const [liked, setLiked] = useState(false);
const [isFetching, setIsFetching] = useState(false);
const [error, setError] = useState({
    message:"",
    color:""
});
// const handleLikeUnlike = async () => {
//     setError(null);
//     setIsFetching(true);

//     try {
//       const response = await fetch(
//         "https://www.greatfrontend.com/api/questions/like-button",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             action: liked ? "unlike" : "like",
//           }),
//         },
//       );

//       if (response.status >= 200 && response.status < 300) {
//         setLiked(!liked);
//       } else {
//         const res = await response.json();
//         setError(res.message);
//         return;
//       }
//     } finally {
//       setIsFetching(false);
//     }
//   };


const handleLikeUnlike = async()=>{
    setIsFetching(true);
    setError(null)
//    setTimeout(()=>{
//     setLiked(!liked)
//     setIsFetching(false);
//    },2000)
//    console.log("kjhkj")
try {
    const res = await fetch( "https://www.greatfrontend.com/api/questions/like-button",
{
    method :"POST",
    headers: { "Content-Type": "application/json" },
    body:JSON.stringify({
        action: liked ? "unlike" : "like",
    })
},


)
const data = await res.json()

if (res.status >= 200 && res.status < 300) {
    setLiked(!liked);
    setIsFetching(false) 
    setError(
        {
        message:data.message,
        color:"green"
    }
);

}
else{
    console.log(data)
    setIsFetching(false)
    setError(
        {
        message:data.message,
        color:"red"
    }
);
}

    
} catch (error) {
   console.log(error) 
}
}

console.log(error)

  return (
 <>
<div className='flex justify-center mt-10 items-center'>
<button className={`${liked ? "bg-red-500 border-2  px-4 py-2 text-sm flex gap-2 rounded-full text-white font-semibold":'border-2 border-gray-300 px-4 py-2 text-sm flex gap-2 rounded-full hover:border-red-500 hover:text-red-500 font-semibold'}`}
  onClick={handleLikeUnlike}
  >
{/* {SpinnerIcon}  
  {HeartIcon}  */}
  {isFetching ? SpinnerIcon :  HeartIcon }
        {liked ? "Liked" : "Like"}
</button>


</div>

{(error && error?.message) &&
<MessageDis  message={error?.message} color={error?.color}/>
}

 </>
  )
}

export default LikeButton

const MessageDis = ({message,color})=>{
    console.log(color)
    console.log(message)
    return(
        <>
   
          {
            (color === "green")?<h1 className='text-green-500 font-bold text-xl mt-3 text-center'>{message}</h1>:<h1 className='text-red-500 font-bold text-xl mt-3 text-center'>{message}</h1>
          }  
        </>
    )
    }