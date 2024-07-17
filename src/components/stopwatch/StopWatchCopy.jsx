import React, { useEffect, useState } from 'react'

const StopWatchCopy = () => {
 const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
// console.log(time)
useEffect(()=>{
let time;
if(isRunning){
    time = setInterval(() => {
        setTime((pre)=>pre+10)
    }, 10);
    
}
else{
    clearTimeout(time)
}
return ()=>clearTimeout(time)

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




    const formatTime = (timeInMillis) => {
const hours = Math.floor((timeInMillis % (1000*60*60*24)) /(1000*60*60))
const minutes =Math.floor((timeInMillis % (1000*60*60))/(1000*60))
const seconds = Math.floor((timeInMillis %(1000*60))/1000)
return `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
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

 </>
  )
}

export default StopWatchCopy