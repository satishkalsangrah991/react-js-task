import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const Pill = ({key ,image,text, onClick}) => {
  return (
   <>
   <div key={key} className=''>
    <h1 className='bg-gray-600 rounded-full text-white p-1.5 relative'>{text}</h1>
    <span className='absolute top-4 bg-red-500 text-white cursor-pointer'
    onClick={onClick}><RxCross2 /></span>
   </div>
   </>
  )
}

export default Pill