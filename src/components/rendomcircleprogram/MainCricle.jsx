import React, { useState } from 'react';
import Circle from './Circle';
// import './App.css';

const MainCricle = () => {
  const [circles, setCircles] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = (event) => {
  
    const { clientX, clientY } = event;
    const diameter = Math.floor(Math.random() * 100) + 50; // Random diameter between 50 and 150
    const left = Math.min(clientX, window.innerWidth - diameter);
    const top = Math.min(clientY, window.innerHeight - diameter);

    // setCircles([...circles, { left, top, diameter }]);
    // setClickCount(clickCount + 1);

    // if (clickCount === 1) {
    //   setTimeout(() => {
    //     setCircles([]);
    //     setClickCount(0);
    //   }, 1000);
    // //   setClickCount(clickCount + 1);
    // }

    // if(circles.length===2){
    //     // setCircles([circles.pop()])
    //     setCircles([]);
    //     // MainCricle()
    //     // setCircles([...circles, { left, top, diameter }]);
    //     // console.log( setCircles(circles.pop()))
    // }

    const newCircle = { left, top, diameter };

    if (clickCount === 2) {
      setCircles([newCircle]);
      setClickCount(0);
    } else {
      setCircles([...circles, newCircle]);
      setClickCount(clickCount + 1);
    }
  
    
  };
//   console.log(circles.length)
console.log(clickCount)

  return (
    <div className="relative w-full h-screen bg-gray-100" onClick={handleClick}>
   
      {circles.map((circle, index) => (
        <Circle key={index} {...circle} />
      ))}
    </div>
  );
};

export default  MainCricle

