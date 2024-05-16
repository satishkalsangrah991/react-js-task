import React, { useEffect, useState } from 'react'
 const getNum = () => {
    let list =[]
for (let i = 1; i<= 8; i++) {
    list.push(i);
    list.push(i);
  }
  return list;
 }
const Memorygame = () => {
    const [stage,setStage] = useState("init")
    const [nums, setNums] = useState(getNum());
    const [opened, setOpened] = useState([]);
    const [solvedList, setSolvedList] = useState([]);
//   console.log(nums.sort(() => Math.random() - 0.5))
const randumSuffle = ()=>{
   let copyNum = [...nums] 
   copyNum.sort(() => Math.random()-0.5)
   return copyNum
}
const handleStart =()=>{
setStage("start")
setNums(randumSuffle())
setSolvedList([])
}

const handleClick = (num, index) => {
    if (opened.length === 2)
      return
    setOpened((prev) => [...prev, index]);
  }

  useEffect(() => {
    if (opened.length === 2) {
      //num qual
      //num not equal
      setTimeout(() => {
        const id1 = opened[0];
        const id2 = opened[1];
        if (nums[id1] === nums[id2]) {//if equal than remove the cards
          setSolvedList((prev) => [...prev, nums[id1]]);
        }
        setOpened([]);
      }, 1000)
    }
  }, [opened])

  useEffect(() => {
    if (solvedList.length === 8) {
      setStage('win');
    }
  }, [solvedList])

  const getClassName = (num, index) => {
    if (solvedList.includes(num)) {
      return 'invisible';
    } else if (opened.includes(index)) {
      return 'text-xl';
    } else {
      return 'text-[10px]';
    }
  }
  return (
    <>
      <div className='container mx-auto'>
      <h1 className='text-center mt-10 text-2xl font-sans font-semibold'> Memory Game</h1>
     {
stage === 'init' &&
<div className='flex justify-center items-center my-5'>
    <button 
    onClick={handleStart}
    className='px-10 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-800'>Play Game</button>
</div>
}

{stage === 'start' &&

<div className='flex justify-center items-center h[300px] my-8'>
<div className='grid grid-cols-4 gap-4 content-center'>
{nums.map((num,i)=>{
    return(
        <div className={`py-3 px-4 cursor-pointer bg-green-400 text-center rounded-sm font-sans font-medium h[30px] w-30px] ${getClassName(num,i)} `}
         key={i}
         onClick={() => handleClick(num, i)}
         >
{num}
{/* {i+1} */}
</div>
    )
})}
</div>
</div>
}


{stage === 'win' &&


<div className='flex justify-center items-center my-5'>
    <button
    onClick={handleStart}
     className='px-10 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-800'>Play Again</button>
</div>
}


      </div>  
    </>
  )
}

export default Memorygame