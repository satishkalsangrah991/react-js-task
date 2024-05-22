import React, { useState } from 'react'

const CouterWithundoRedo = () => {
    const [value ,setValue] = useState(0)
    const [history, setHistory] = useState([]);
    const [redoList, setRedoList] = useState([]);
    const [undoCount, setUndoCount] = useState(0);

const maintainHistory =(key,pre,curr )=>{
// console.log(key,pre,curr )
const obj ={
    action:key,
    pre,
    curr
}
let copyHis = [...history]
copyHis.unshift(obj)
setHistory(copyHis)
// setHistory([obj,...history])
}
// console.log(history)


    const handleValue = (key)=>{
        const val = parseInt(key);
        maintainHistory(key , value, val + value)
// console.log(typeof val ,val)
setValue((existingValue) => existingValue + val);
    }

    const handleUndo = ()=>{
if(history.length){
    if (undoCount + 1 > 5) {
        alert('You cant undo beyond limit=5');
        return;
      }
      setUndoCount((c)=>c+1)
    const undoList = [...history]
   const firstItem = undoList.shift()
   setHistory(undoList)
   setValue(firstItem.pre)

const reduItem = [...redoList]
  reduItem.push(firstItem)
  setRedoList(reduItem)

}
    } 

    const handleRedo = () => {
        if (redoList.length) {
          const copyRedoList = [...redoList];
          const poppedValue = copyRedoList.pop();
          setRedoList(copyRedoList);
          const { action, pre, curr } = poppedValue;
          setValue(curr);
          maintainHistory(action, pre, curr);
          // [+100,+10,+1]
        }
      }

  return (
  <>
    <div className='container mx-auto'>
    <div className=''>
<h1 className='text-center my-5 text-xl text-gray-600'> Couter With Undo Redo</h1>
    </div>
    
    <div className='flex gap-4 justify-center items-center my-6'>
    {history.length > 0   && 
    <button 
    onClick={()=>handleUndo()}
    className='bg-green-700 text-white px-4 py-1.5 rounded-md font-semibold'>Undo</button>
    }
 {redoList.length > 0 &&  
<button 
    // onClick={()=>handleValue(val)}
    onClick={()=>handleRedo()}
    className='bg-blue-700 text-white px-4 py-1.5 rounded-md font-semibold'>Redo</button>
 }

    </div>
    

    <div className='flex justify-center gap-4'>
{
    [-100,-10,-1].map((val,i)=>{
        return(
            <div key={i}>
    <button 
    onClick={()=>handleValue(val)}
    className='bg-purple-600 text-white px-4 py-1.5 rounded-md font-semibold'>{val}</button>
</div>
        )
    })
}
<div>
<h1 className='px-4 py-1.5 border rounded-md text-gray-700 bg-gray-100'>{value}</h1>
</div>

{
    ["+1","+10","+100"].map((val,i)=>{
        return(
            <div key={i}>
    <button
        onClick={()=>handleValue(val)}
     className='bg-purple-600 text-white px-4 py-1.5 rounded-md font-semibold'>{val}</button>
</div>
     
    )
    })
}
    </div>

    <div className='my-8 flex justify-center items-center flex-col'>

    <div className=''>
<h1 className='text-center my-5 text-2xl text-gray-600'>Counter History </h1>
    </div>


  {history.length > 0 &&  

<div className='border-2 border-gray-300 rounded-md px-9  py-3 h-[300px] overflow-y-auto '>
{
    history.map((val,i)=>{
        return(
            <div 
            key={i}
            className='flex justify-between gap-5'>
    <h1>{val.action}</h1>
    <h1>
    {
     `[ ${val.pre} -> ${val.curr} ]`
                }
    </h1>
    {/* <h1>{val.pre}</h1>

    <h1>{val.curr}</h1> */}
</div>
        )
    })
}




</div>
  }
    
    </div>

    </div>
  </>
  )
}

export default CouterWithundoRedo