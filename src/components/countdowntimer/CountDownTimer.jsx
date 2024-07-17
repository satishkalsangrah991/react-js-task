import React, { useState, useEffect } from 'react';

const CountDownTimer = () => {
  
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-08-08") - +new Date();
    // console.log( 507 019 1055)
   
   
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  // console.log(((+new Date("2024-07-07") - +new Date())/1000)%60)

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  },[timeLeft]);

  // console.log(timeLeft)

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    // console.log(interval)
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push({[interval]:timeLeft[interval]})

    // timerComponents.push(
    //   <span className=''>
    //     {timeLeft[interval]} {interval}{" "}
    //   </span>
    // );
  });

  // console.log(timerComponents)

  return (
    <div>
      {/* <h1>Countdown Timer</h1> 
      {timerComponents.length ? timerComponents.map((val)=>{return(<>

        <div>{val?.days}</div>
      </>)}) : <span>Time's up!</span>} */}
      

      <div className="min-wscreen min-h-screen bg-yellow-500 flex items-center justify-center px-5 py-5" x-data="beer()" x-init="start()">
    <div className="text-yellow-100">
        {/* <h1 className="text-3xl text-center mb-3 font-extralight">When will pubs open in England?*</h1> */}
        <div className="text-6xl text-center flex w-full items-center justify-center">
            <div className="text-2xl mr-1 font-extralight">in</div>
            <div className="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                <div className="font-mono leading-none" x-text="days">{timeLeft?.days}</div>
                <div className="font-mono uppercase text-sm leading-none">Days</div>
            </div>
            <div className="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                <div className="font-mono leading-none" x-text="hours">{timeLeft?.hours}</div>
                <div className="font-mono uppercase text-sm leading-none">Hours</div>
            </div>
            <div className="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                <div className="font-mono leading-none" x-text="minutes">{timeLeft?.minutes}</div>
                <div className="font-mono uppercase text-sm leading-none">Minutes</div>
            </div>
            {/* <div className="text-2xl mx-1 font-extralight">and</div> */}
            <div className="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                <div className="font-mono leading-none" x-text="seconds">{timeLeft?.seconds}</div>
                <div className="font-mono uppercase text-sm leading-none">Seconds</div>
            </div>
        </div>
        {/* <p class="text-sm text-center mt-3">*<a href="https://twitter.com/10DowningStreet/status/1363897254340419587" class="underline hover:text-yellow-200" target="_blank">As per goverment plan</a>. Subject to change.</p> */}
    </div>
      </div>

    </div>
  );
};

export default CountDownTimer;