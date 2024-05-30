// import React from 'react'

// const GenrateRandomColor = () => {
//   return (
//    <>
//     <div className='flex justify-center items-center min-h-screen '>
//         <button className='bg-gray-100 text-gray-800 font-semibold text-lg px-4 py-3 rounded-lg hover:bg-gray-200'>Submit</button>
//     </div>
//    </>
//   )
// }

// export default GenrateRandomColor

import React, { useEffect, useState } from 'react'

const GenrateRandomColor = () => {
    const [color, setColor] = useState('#ffffff');
    const [isRunning, setIsRunning] = useState(true);
    const [intervalId, setIntervalId] = useState(null);
    const generateRandomColor = () => {
    //   const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    let red = Math.floor(Math.random() * 255)
let green = Math.floor(Math.random() * 255)
let blue = Math.floor(Math.random() * 255)
// console.log(`rgb(${red} ${green} ${blue})`)
// setColor(`rgb(${red} ${green} ${blue})`)
let randomColor  = `rgb(${red} ${green} ${blue})`
      setColor(randomColor);
    };
    // console.log(color)

//     const randomColor = ()=>{
// let red = Math.floor(Math.random() * 255)
// let green = Math.floor(Math.random() * 255)
// let blue = Math.floor(Math.random() * 255)
// console.log(`rgb(${red} ${green} ${blue})`)
// setColor(`rgb(${red} ${green} ${blue})`)
//     }
//     randomColor()

    // useEffect(() => {
    //     const intervalId = setInterval(generateRandomColor, 1000); // Change color every second
    
    //     // Cleanup interval on component unmount
    //     return () => clearInterval(intervalId);
    //   }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmoun

    useEffect(() => {
        if (isRunning) {
          const id = setInterval(generateRandomColor, 3000); // Change color every second
          setIntervalId(id);
          return () => clearInterval(id); // Cleanup interval on component unmount or when isRunning changes
        } else if (intervalId) {
          clearInterval(intervalId);
        }
      }, [isRunning]); // Run the effect whenever isRunning changes
    
      const handleStart = () => {
        setIsRunning(true);
      };
    
      const handleStop = () => {
        setIsRunning(false);
      };
  
    return (
      <div style={{ backgroundColor: color, padding: '20px', textAlign: 'cente' }} className='min-h-screen flex flex-col items-center justify-center'>
        <h1 className='text-white text-xl'>Random Color: {color}</h1>
        {/* <button onClick={generateRandomColor} className='text-white'>Generate Random Color</button> */}
        {isRunning ?       <button onClick={handleStop} disabled={!isRunning} className='bg-gray-100 text-xl px-8 py-3 rounded-lg my-4 text-red-500'>Stop</button> :
        <button onClick={handleStart} disabled={isRunning} className='bg-gray-100 text-xl px-8 py-3 rounded-lg my-4 '>Start</button>
        }

      </div>
    );
  
}

export default GenrateRandomColor