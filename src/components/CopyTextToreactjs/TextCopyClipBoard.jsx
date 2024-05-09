import React, { useRef, useState } from 'react'

const TextCopyClipBoard = () => {
    const [tags, setTags] = useState("");

    const inputElement = useRef();
    // console.log(inputElement?.current?.value)
    // one methed to copytext
    const copyTags = () => {
        // inputElement?.current?.value
        let delimiter = ",";
    //   const array = tags.split(",");
      const array = tags.split(/[ ]+/);
      console.log(array);
      navigator.clipboard.writeText(array.join(delimiter))
        .then(() => {
          console.log("Tags copied successfully.");
        })
        .catch((error) => {
          console.error("Error copying tags:", error);
        });
    };


    // second methed

//     const copyTags = () => {
// // console.log(inputElement)
// if (tags.trim() === "") return;
// navigator.clipboard.writeText(tags)
//         .then(() => {
//             setTags("")
//           console.log("Tags copied successfully.");
//         })
//         .catch((error) => {
//           console.error("Error copying tags:", error);
//         });
//     };

    // useRefway

    // const copyTags = () => {
    //     console.log(inputElement)
      
    //     navigator.clipboard.writeText(inputElement?.current?.value)
    //             .then(() => {
    //               console.log("Tags copied successfully.");
    //             })
    //             .catch((error) => {
    //               console.error("Error copying tags:", error);
    //             });
    //         };
  return (
  <>
<div className='px-5 py-10'>
  <h1>
<input 
ref={inputElement}
value={tags}
onChange={(e)=>setTags(e.target.value)}
className='w-full p-4 border-2 bg-gray-100 '></input>
  </h1>

<div className='mt10 text-center items-center flex justify-center'>
<button onClick={copyTags} className="mt-10 text-center items-center flex justify-between border-2 py-2 px-10 border-none rounded-lg bg-blue-700 text-white mx-10">copy</button>
</div>
</div>
  </>
  )
}

export default TextCopyClipBoard