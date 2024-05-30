import React, { useRef, useState,useEffect } from 'react'

const OtpInput = () => {
    const emptyArr = ['', '', '', ''];
    const refs = [useRef(), useRef(), useRef(), useRef()];
    const [inputs, setInputs] = useState(emptyArr);
    const [missing, setMissing] = useState(emptyArr);
    const CODE = '1234';


    useEffect(()=>{
refs[0].current.focus()
    },[])

//     const handleInputChange =(e,index)=>{
//         const val = e.target.value;
//         // console.log(val)
//         // if (!Number(val))
//         //     return;
      
//         // console.log(val)
//         if(index < inputs.length-1){
//             refs[index + 1].current.focus()
//         }
//         const copyInputs = [...inputs];
//         copyInputs[index] = val;
//         setInputs(copyInputs);
//     }

//     const handleOnKeyDown =(e,index)=>{
//         console.log(e.keyCode);

//       if(e.keyCode === 8){
   
// if(index>0){
//     refs[index-1].current.focus()

// }
// const copyInputs = [...inputs];
// copyInputs[index] = '';
// setInputs(copyInputs);

// }
//     };


const handleSubmit = () => {

    const missed = inputs.map((item, i) => {
      if (item === '')
        return i;
    }).filter((item) => (item || item === 0));
    console.log('missed ', missed);
    setMissing(missed);
    if (missed.length) {
      return
    }

    const userInput = inputs.join('');
    const isMatch = userInput === CODE;
    const msg = isMatch ? 'Code is Valid' : 'Code is not Valid';
    alert(msg);
  }
  useEffect(() => {
    refs[0].current.focus();
  }, [])

  const handleInputChange = (e, index) => {
    const val = e.target.value;
    console.log(val, index);
    if (!Number(val))
      return;

    if (index < inputs.length - 1) { // 1
      refs[index + 1].current.focus();
    }
    const copyInputs = [...inputs];
    copyInputs[index] = val;
    setInputs(copyInputs);
  }

  const handleOnKeyDown = (e, index) => {
    console.log(e.keyCode, index);
    if (e.keyCode === 8) {
      const copyInputs = [...inputs];
      copyInputs[index] = '';
      setInputs(copyInputs);

      if (index > 0) {
        refs[index - 1].current.focus();
      }
    }
  }

  const handlePaste = (e) => {
    const data = e.clipboardData.getData('text');
    console.log('paste data ', data)
    if (!Number(data) || data.length !== inputs.length)
      return;

    const pastCode = data.split('');
    setInputs(pastCode);
    refs[inputs.length - 1].current.focus();
  }
//   console.log('inputs ', inputs);



  
  return (
  <>
   <div className='fle justify-center max-w-[500px] mx-auto mt-16'>
<h1 className='text-xl font-bold mt-5 mb-10 text-center' >Otp Input Field</h1>
<div className='flex justify-center items-center'>
{
    emptyArr.map((item,i)=>{
        return <input
        value={inputs[i]}
        type='text'
        key={i}
        ref={refs[i]}
        maxLength="1"
        onPaste={handlePaste}
        onChange={(e) => handleInputChange(e, i)}
        onKeyDown={(e) => handleOnKeyDown(e, i)}
        className={`${missing.includes(i) ? 'focus:outline-red-500 border-red-600 border-2 rounded-md outline-none bg-gray100 w-10 h-10 text-center text-xl m-3 focus:outline-blu-500 focus:border-0' : 'border-2 rounded-md outline-none bg-gray-100 w-10 h-10 text-center text-xl m-3 focus:outline-blue-500 focus:border-0'}`}
>    
</input>
    })
}

</div>

<button onClick={handleSubmit} className='bg-green-500 text-white px-4 py-2 flex justify-center item-center text-center'>Submit</button>
   </div> 
  </>
  )
}

export default OtpInput