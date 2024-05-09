import React, { useEffect, useState } from 'react'

const Throttle = () => {
    const [windowSize,setWindowSize] = useState({
       width:window.innerWidth,
       height:window.innerHeight 
    })
    const handleSize=()=>{
        setWindowSize({
            width:window.innerWidth,
            height:window.innerHeight 
        })
    }
    useEffect(()=>{
window.addEventListener("resize",handleSize)
return ()=>{window.addEventListener("resize",handleSize)}
    },[])
  return (
    <>
<div className='mt-12 text-2xl'>
<h1 className='text-center'>
Window Size is {windowSize.width} x {windowSize.height}
</h1>
</div>
    </>
  )
}

export default Throttle