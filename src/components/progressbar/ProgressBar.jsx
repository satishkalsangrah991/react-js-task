import React, { useEffect, useState } from 'react'

const ProgressBar = () => {
    const MIN = 0;
     const MAX = 100;
    //  const [value, setValue] = useState(0);
    const [percent, setPercent] = useState(0);
    // useEffect(() => {

    //     setInterval(() => {
    //         setValue((val) => val + 0.1);
    //     }, 20);
    //     setPercent(Math.min(Math.max(percent, MIN), MAX))
    //     // console.log("hhh")
    //   }, []);

    //   useEffect(() => {
    //     setPercent(Math.min(Math.max(value, MIN), MAX))
    //     // console.log("ghhh")
    //   }, [value]);

    useEffect(() => {
        // setPercent((val) => Math.min(val + 0.1, MAX));
        const interval = setInterval(() => {
            setPercent((val) => Math.min(Math.max(val + 0.1,MIN), MAX));
        }, 20);
        console.log("hhh")
        return () => {
          clearInterval(interval);
        };
     
      }, []); // Run once on component mount
    
    //   useEffect(() => {
    //     setPercent(Math.min(Math.max(value, MIN), MAX));
    //     console.log("ghhh")
    //   }, [value]);
  return (
<>
<div className="mt-12 h-8  max-w-xl mx-auto rounded-full bg-gray-200 border relative overflow-hidden text-center">
     <div className="h-[100%]  bg-green-500 rounded-full relative text-center"
        //  style={{
        //   transform: `scaleX(${percent / MAX})`,
        //   transformOrigin: "left"
        // }}
          style={{ width: `${percent}%` }}
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percent}
        role="progressbar"
        >
     <span className=" text-white font-bold
     absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 fle justifycenter itemscenter w100%]
      ">{percent.toFixed(0)}%</span>
     </div>

     </div>
     {
        (percent<MAX)?
     
     <h1 className='text-center mt-3'>Loadd.......</h1>
     :
     <h1 className='text-center mt-3'>complete</h1>
     }
</>
  )
}

export default ProgressBar