import React, { useMemo, useState } from 'react'

const MemoHookExample = () => {
    const [count, setCount] = useState(0)

    const [exName,setExName] = useState(false)
    // console.log(typeof exName)
    const increment = ()=>{
        console.log("count")
       return setCount(count+1)
    }

    const data = (val)=>{
console.log("val count")
return val
    }
    const memoData = useMemo(()=>{
        return data(count)
    },[count])

  return (
 <>
<div className='mt-12 bg-white ma-auto max-w-[400px] p-4'>
<div className='flex flex-col justify-center items-center gap-10'>
<button className='p-4 bg-blue-200' onClick={increment}>Add Count == {memoData}</button>
<button className='p-4 bg-blue-200' onClick={()=>setExName(!exName)}>{exName?"Clicked":"Click Me"}</button>
</div>

</div>
 </>
  )
}

export default MemoHookExample