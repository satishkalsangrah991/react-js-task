import React, { useState } from 'react'
import { AiOutlineStar ,AiFillStar} from 'react-icons/ai'

const StarRating = () => {

    const [rating,setRating] = useState(0)
    const [hover,setHover] =useState(0)
//     const handleRating = (star,index) =>{
// console.log(star,index)
// setRating(index)
//     }
  return (
   <>
    <div className='fle hidden mt-12 justify-center items-center gap-5'>
    {rating}  nd {hover}
    {
        [...Array(5)].map((val,i)=>{
            return (
                <>
                    <button
                    onClick={()=>setRating(i+1)}
                    onMouseOver={()=>setHover(i+1)}
                    onMouseLeave={()=>setHover(rating)}
                    >

                  
{/* <span>
                    {!((i+1) <= (rating && hover) || hover) ?
          <AiOutlineStar size={30} className='' 
        //   fill='red' 
          stroke='red' />
          :               <AiFillStar size={30}/>
                    }
                    </span>
                     */}

                     <span className={`${((i+1) <= (rating && hover) || hover) ? "text-gray-900 p2 " : "text-gray-200 p2 h8 w"}`}>
                    &#9733;
                     </span>

                 


                    </button>
                </>
            )
        })
    }
<button>

</button>


{/* <StarRating1/> */}
    </div>


    <div className='flex mt-12 justify-center items-center'>
    <div className="star-rating">
    {/* {rating} {hover} */}
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover && rating || hover) ? "text-yellow-600  w-10 h-10" : "text-[#525050]  w-10 h-10"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            {/* <span className="star">&#9733;</span> */}
            {/* <StarIcon/> */}
            <svg xmlns="http://www.w3.org/2000/svg" 
             fill={index <= (hover && rating || hover) ? "#eab308":"none"}
             viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" 
             className="w6 h6">
  <path strokeLinecap="round" strokeLinejoin="round" 
  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>

          </button>
        );
      })}

      {/* {hover} */}
      {/* {rating} */}
    </div>
    </div>


   </>
  )
}

export default StarRating
  {/* <span>
                        <AiFillStar size={30}/>
                    </span> */}




                    const StarRating1 = () => {
                      const [rating, setRating] = useState(0);
                    
                      const handleClick = (index) => {
                        setRating(index + 1);
                      };
                    
                      return (
                        <div className="flex items-center">
                        {rating}  
                          {[...Array(5)].map((_, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-8 w-8 fill-current cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                              viewBox="0 0 20 20"
                              onClick={() => handleClick(index)}
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 15.748l-4.115 2.167a.75.75 0 01-1.125-.785l.79-4.608-3.325-3.242a.75.75 0 01.415-1.284l4.602-.67L8.96 2.44a.75.75 0 011.38 0l2.305 4.773 4.602.67a.75.75 0 01.415 1.285l-3.325 3.241.79 4.609a.75.75 0 01-1.125.785L10 15.748z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                        </div>
                      );
                    };
                    
                  
                    
