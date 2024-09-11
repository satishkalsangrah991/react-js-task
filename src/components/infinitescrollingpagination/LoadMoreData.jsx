import React, { useEffect, useState } from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIdsData, fetchLoadIds, setPostId } from '../slice/infiniteScrollSlice'
import { useNavigate } from 'react-router-dom'

const LoadMoreData = () => {
   let card =[1,2,3,4,5,6,7,8] 
   const dispatch = useDispatch()
   const {jobData,postId,ids,loading,loading1} =useSelector((s)=>s.scrollData)
//    console.log(postId)
 
   useEffect(() => {
    dispatch(fetchLoadIds());
}, [dispatch]);
const navigate = useNavigate()


// useEffect(() => {
//     if (ids) {
//         dispatch(fetchIdsData(ids));
       
//     }
 
// }, [ids]);


const getFormattedDate = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    const formtedDate = `${month}/${day}/${year}`;
    // console.log(formtedDate)
    return formtedDate;
  }

  const getJobTitle = (text) => {
    const arr = text.split(/\((YC [^)]+)\)/);
    if (arr.length > 1) {
      const part1 = arr[0];
      const part2 = arr[1];
      return `${part1} ${part2}`;
    }
    return "N/A";
  }

  const getJobInfo = (text) => {
    const arr = text.split(/\((YC [^)]+)\)/);
    if (arr.length > 2) {
      return arr[2];
    }
    return "N/A";
  }

//    const loadMore =()=>{
// let copyId = [...postId]
// if(copyId.length>0){
//    const ids = copyId.splice(0,8)
//    dispatch(fetchIdsData(ids)) 
//    dispatch(setPostId(copyId))
// }
//    }

const loadMore = () => {
    if (postId.length > 0) {
      const ids = postId.slice(0, 8);
      dispatch(fetchIdsData(ids));
      dispatch(setPostId(postId.slice(8)));
    }
  };

  
  return (
   <>
<DefaultLayout>
  {loading || loading1 ? <div>Loading...</div>
  :
  <div className='container mx-auto'>
  <div className='flex my-4 justify-end'>
  <button
  onClick={()=>navigate("/infinitescroll/data")}
   className="inline-flex items-center justify-center h-12 gap-2 px-6 text-md font-medium tracking-wide text-white transition duration-300 rounded-md whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        <span>Go To Infinite Scroll</span>
      </button>
  </div>
    <div className='grid sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8'>
{jobData && jobData?.slice(8)?.map((val,i)=>{
    return(
        <div
        key={i}
         className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
           {getJobTitle(val.title)}
            </h3>
            <p className="text-sm text-slate-400">{getFormattedDate(val.time)} <span className='ml-2 text-red-500'>{val.id}</span></p>
          </header>
          <p>
{getJobInfo(val.title)}

          </p>
        </div>
      </div>
    )
})}

    </div>
{
    (loading1) ?<div>Loading...</div>:

  (postId.length>0)&&
    <div className='mt-10 flex justify-center'>
 

      <button 
      onClick={()=>loadMore()}
      className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        <span>Load More</span>
        <span className="relative only:-mx-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            role="graphics-symbol"
            aria-labelledby="title-07 desc-07"
          >
            <title id="title-07">Icon title</title>
            <desc id="desc-07">A more detailed description of the icon</desc>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
            />
          </svg>
        </span>
      </button>
  

    </div>
  
}

    </div>
    }
</DefaultLayout>
   </>
  )
}

export default LoadMoreData



// chat gpt improve code 

// import React, { useEffect } from 'react';
// import DefaultLayout from '../layout/DefaultLayout';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchIdsData, fetchLoadIds, setPostId } from '../slice/infiniteScrollSlice';

// const LoadMoreData = () => {
//   const dispatch = useDispatch();
//   const { jobData, postId, loading, loading1 } = useSelector((state) => state.scrolling);

//   useEffect(() => {
//     dispatch(fetchLoadIds());
//   }, [dispatch]);

//   const getFormattedDate = (unixTimestamp) => {
//     const date = new Date(unixTimestamp * 1000);
//     return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
//   };

//   const getJobTitle = (text) => {
//     const arr = text.split(/\((YC [^)]+)\)/);
//     return arr.length > 1 ? `${arr[0]} ${arr[1]}` : "N/A";
//   };

//   const getJobInfo = (text) => {
//     const arr = text.split(/\((YC [^)]+)\)/);
//     return arr.length > 2 ? arr[2] : "N/A";
//   };

//   const loadMore = () => {
//     if (postId.length > 0) {
//       const ids = postId.slice(0, 8);
//       dispatch(fetchIdsData(ids));
//       dispatch(setPostId(postId.slice(8)));
//     }
//   };

//   return (
//     <DefaultLayout>
//       {loading || loading1 ? (
//         <div>Loading...</div>
//       ) : (
//         <div className='container mx-auto'>
//           <div className='grid sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8'>
//             {jobData&&jobData?.slice(8)?.map((val, i) => (
//               <div
//                 key={i}
//                 className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200"
//               >
//                 <div className="p-6">
//                   <header className="mb-4">
//                     <h3 className="text-xl font-medium text-slate-700">
//                       {getJobTitle(val.title)}
//                     </h3>
//                     <p className="text-sm text-slate-400">
//                       {getFormattedDate(val.time)} <span className='ml-2 text-red-500'>{val.id}</span>
//                     </p>
//                   </header>
//                   <p>{getJobInfo(val.title)}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {!loading1 && postId.length > 0 && (
//             <div className='mt-10 flex justify-center'>
//               <button
//                 onClick={loadMore}
//                 className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
//               >
//                 <span>Load More</span>
//                 <span className="relative only:-mx-5">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
//                     />
//                   </svg>
//                 </span>
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </DefaultLayout>
//   );
// };

// export default LoadMoreData;
