import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import MemoHookExample from './MemoHookExample'

const Optimation = () => {
    const obj =[
        {
            id:1,
     name:"sabji1",
    amount:20
        },
        {
            id:2,
            name:"sabji12",
            amount:30
               },
               {
                id:3,
                name:"sabji13",
               amount:40
                   },
                   {
                    id:4,
                    name:"sabji14",
                   amount:50
                       },
                       {
                        id:5,
                        name:"sabji60",
                       amount:60
                    },
    ]
    const [count, setCount] = useState(0)
    const ref1 = useRef(0)
    const [exName,setExName] = useState("")
    const [amount,setAmount] =useState("")
    const [data, setData] = useState(obj)
    // console.log(ref1.current)
   
    // const clickFunc = useCallback(()=>{ 
    //    setCount(count + 1)
    // },[count])
    //  const clickFunc1 = useCallback(()=>{ 
    //      ref1.current += 1
    // console.log(ref1.current)
    //   },[ref1.current])


    const clickFunc = ()=>{ 
       return setCount(count + 1)
     }
    //  console.log(clickFunc())

    //  const clickFunc = useCallback(()=>{
     
    //     setCount(count + 1)
     
    //  },[count])

     const clickFunc1 = ()=>{ 
        ref1.current += 1
        console.log(ref1.current)
     }

//  useEffect(()=>{
//     const clickFunc1 = ()=>{ 
//         ref1.current += 1
//         console.log(ref1.current)
//      }
//  },[])

const counter = useRef(0);

function add() {
  counter.current += 1;
  console.log(counter.current); // this shows that the number did increment 
}



const total = data.reduce((acc,val)=>{
    return (acc + val?.amount)
},0)
// console.log(total)

const submitFuc=(j)=>{
    console.log(j)
j.preventDefault()
// console.log(typeof amount)
if(exName === "" || amount ===""){
    return alert("fill")
    
}
let obj ={
    id:new Date().getTime(),
    exName:exName,
    amount:Number(amount)
}
console.log(obj)
console.log(exName,amount)
setData((pre)=>[...pre,obj])
setExName("")
setAmount("")
}
// console.log(data)



const Child = useMemo(()=>{
    console.log("re redred child")
    return <div>Inner Child</div>
},[])

// const Child =()=>{
//   console.log("hfjkfh")
//   return "jkfjhf"
// }

// const Child1 = ()=>{
//     console.log("re redred child")
//     return <div>Inner Child</div>
// }

// const Dp = memo(Child)



  return (
  <>
  <div className='hidden'>
  <button 
  className='w-40 h-40 cursor-pointer'
  onClick={()=>clickFunc()}>
      <span role="img" aria-label="react-emoji">⚛️</span> {count+1}
    </button>
      {/* <button  onClick={() =>clickFunc1()}>
      {ref1.current}
      <span role="img" aria-label="react-emoji">⚛️</span> {ref1.current}
    </button> */}

    {/* <div>
    <div>{counter.current}</div> 
    <button onClick={() => add()}>Add</button>
  </div> */}
  <div>
    {/* <Child/> */}
    {Child}
    {/* {Child1()} */}
  </div>


  {/* amount and expences */}

  {/* <div className='max-w-[500px] mx-auto shadow-lg bg-white mt-12 border p-4'>
  <h1 className='my-5'>{total}</h1>
<div>
    <input
    type='text'
    placeholder='Enter Exname'
    value={exName}
    onChange={(e)=>setExName(e.target.value)}
     className='w-full p-3 bg-gray-100 outline-none focus:outline-blue-400 rounded-lg mb-5'/>
</div>

<div>
    <input
    type='number'
    placeholder='Enter amount'
    value={amount}
    onChange={(e)=>setAmount(e.target.value)}
     className='w-full p-3 bg-gray-100 outline-none focus:outline-blue-400 rounded-lg'/>
</div>
<div className='flex justify-center items-center my-5'>
    <button
    onClick={submitFuc}
     className='py-2 px-6 bg-blue-500 text-white'>Add</button>
</div>
  </div> */}


  {/* <div className='flex justify-center my-5'>
  <button className='p-4 bg-blue-200'>Open Modal</button>

  </div> */}

  {/* <div style={{
    // display:"flex",
    position:"fixed",
    height:'100%',
    width:"100%",
    top:0,
    left:0,
    overflow:"auto",
    zIndex:1,
    backgroundColor:"rgb(0,0,0)",
    opacity:"50%",
    // margin:"auto"
  }}>

<div style={{
   
    display:"flex",
    justifyContent:'center',
    // justifyItems:"center",
    // marginX:"auto"
    // top:50
    position:"relative",
    // zIndex:"inheri"
}}>
<div 
// className="modal-content" 
style={{
    backgroundColor:"white",
    // marginTop:"50%",
    padding:"100px",
    width:"80%",
    display:"flex",
    justifyContent:'center',
    justifyItems:"center",
    marginX:"auto",
    position:"absolute",
    top:150,
    // left:"50%",
    // transform: `translate(${-50}%, ${-50}%)` 
    left: "50%",
    // top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex:5,
//   boxShadow:'rgba(0,0,0,0.9)'
   
    
}}>
    <span className="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>
  </div>

  </div> */}
</div>

 <div>
  <MemoHookExample/>
 </div>

  </>
  )
}

export default Optimation