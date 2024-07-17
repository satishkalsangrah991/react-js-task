import React, { useEffect, useState } from 'react'
import StopWatchCopy from './StopWatchCopy';

const StopWatch = () => {
 const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

useEffect(()=>{
let time;
if(isRunning){
     time = setInterval(()=>{
        setTime((pre)=> pre+10)
    },10)
}

    else{
        clearInterval(time)
    }
return ()=>clearInterval(time)
},[isRunning])

  const startWatch=()=>{
  setIsRunning(true)
//   console.log("gg")
  }

  const stopWatch=()=>{
    setIsRunning(false)
  }

  const resetWatch=()=>{
    setTime(0)
    setIsRunning(false)
  }

//   const formatTime = (time1)=>{
// const hours = Math.floor(time1/(1000*60*60))
// const minutes = Math.floor(time1 /(1000*60) % 60)
// const seconds = Math.floor(time1 /(1000) % 60)
// const milliseconds = Math.floor((time1 % 1000) / 10);
// // console.log(milliseconds)
// return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
//   }

// const formatTime = (timeInMillis) => {
//     const hours = Math.floor(timeInMillis / 3600000);
//     const minutes = Math.floor((timeInMillis % 3600000) / 60000);
//     const seconds = Math.floor((timeInMillis % 60000) / 1000);
//     const milliseconds = Math.floor((timeInMillis % 1000) / 10); // Display only two digits for milliseconds
//     return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
//   };


    const formatTime = (timeInMillis) => {
    const days = Math.floor(timeInMillis / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeInMillis % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeInMillis % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((timeInMillis % 1000) / 10); // Display only two digits for milliseconds
    return `${days.toString().padStart(2, '0')}:
    ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };
  return (
 <>

     <div className="min-wscreen min-h-screen bg-yellow-500 flex items-center  flex-col justify-center px-5 py-5" x-data="beer()" x-init="start()">
     <div className='my-5 text-3xl text-gray-800'>
        {formatTime(time)}
     </div>

    <div className='flex gap-6'>
{
    (isRunning === false) ?
    
    <button 
        onClick={startWatch}
        className='bg-green-600 text-white px-6 py-2 rounded-md'>Start </button>
        :
        <button 
         onClick={stopWatch}
        className='bg-red-600 text-white px-6 py-2 rounded-md'>Stop 
        </button>
    
}
    

        <button 
        onClick={resetWatch}
        className='bg-blue-600 text-white px-6 py-2 rounded-md'>Reset </button>
    </div>
    </div>

    {/* <div>
      <StopWatchCopy/>
    </div> */}

 </>
  )
}

export default StopWatch


// src/Stopwatch.js


// import React, { useState, useEffect } from 'react';

// const StopWatch= () => {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (isRunning) {
//       timer = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     } else {
//       clearInterval(timer);
//     }
//     return () => clearInterval(timer);
//   }, [isRunning]);

//   const startStopwatch = () => {
//     setIsRunning(true);
//   };

//   const stopStopwatch = () => {
//     setIsRunning(false);
//   };

//   const resetStopwatch = () => {
//     setTime(0);
//     setIsRunning(false);
//   };

//   const formatTime = (timeInSeconds) => {
//     const minutes = Math.floor(timeInSeconds / 60);
//     const seconds = timeInSeconds % 60;
//     return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <div className="text-4xl font-bold">{formatTime(time)}</div>
//       <div className="mt-4 space-x-4">
//         {!isRunning ? (
//           <button
//             className="px-4 py-2 bg-green-500 text-white rounded-md"
//             onClick={startStopwatch}
//           >
//             Start
//           </button>
//         ) : (
//           <button
//             className="px-4 py-2 bg-red-500 text-white rounded-md"
//             onClick={stopStopwatch}
//           >
//             Stop
//           </button>
//         )}
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded-md"
//           onClick={resetStopwatch}
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default StopWatch;

// src/Stopwatch.js

// import React, { useState, useEffect } from 'react';

// const StopWatch = () => {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (isRunning) {
//       timer = setInterval(() => {
//         setTime((prevTime) => prevTime + 10); // Increment by 10 milliseconds
//       }, 10); // Update every 10 milliseconds
//     } else {
//       clearInterval(timer);
//     }
//     return () => clearInterval(timer);
//   }, [isRunning]);

//   const startStopwatch = () => {
//     setIsRunning(true);
//   };

//   const stopStopwatch = () => {
//     setIsRunning(false);
//   };

//   const resetStopwatch = () => {
//     setTime(0);
//     setIsRunning(false);
//   };

//   const formatTime = (timeInMillis) => {
//     const hours = Math.floor(timeInMillis / 3600000);
//     const minutes = Math.floor((timeInMillis % 3600000) / 60000);
//     const seconds = Math.floor((timeInMillis % 60000) / 1000);
//     const milliseconds = Math.floor((timeInMillis % 1000) / 10); // Display only two digits for milliseconds
//     return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <div className="text-4xl font-bold">{formatTime(time)}</div>
//       <div className="mt-4 space-x-4">
//         {!isRunning ? (
//           <button
//             className="px-4 py-2 bg-green-500 text-white rounded-md"
//             onClick={startStopwatch}
//           >
//             Start
//           </button>
//         ) : (
//           <button
//             className="px-4 py-2 bg-red-500 text-white rounded-md"
//             onClick={stopStopwatch}
//           >
//             Stop
//           </button>
//         )}
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded-md"
//           onClick={resetStopwatch}
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default StopWatch;


