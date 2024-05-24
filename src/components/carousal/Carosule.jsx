import React, { useEffect, useState } from "react";

const Carosule = () => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const fatchImages = async () => {
    setLoading(true);
    const url = 'https://www.reddit.com/r/aww/top/.json?t=all';
    const res = await fetch(url);
    const result = await res.json();
    const data = result.data.children;
    // console.log(data);
    const list = data.filter(
      (item) =>
        item.data.url_overridden_by_dest.includes('.jpg'))
      .map((item) => item.data.url_overridden_by_dest);
    setImages(list);
    setLoading(false);

  };

  useEffect(()=>{
    // fatchImages()
  },[])

  const handleClickRight = ()=>{
if(index === images.length-1){
    setIndex(0)
}else{
setIndex((pre)=> pre+1)
}
  }
  const handleClickLeft = ()=>{
    const lastIdx = images.length - 1;
    if(index === 0){
        setIndex(lastIdx)
    }else{
    setIndex((pre)=> pre-1)
    }
      }
//   console.log(index ,images.length-1)
useEffect(()=>{
    const id = setTimeout(()=>{
        handleClickRight()
    },3000)
    return ()=>{
        clearInterval(id)
    }
},[])

// const obj = { 10: 'arry', 21: 'barry', 23: 'carry' };  
// const d = Object.entries(obj)
// console.log(d.map(([k,v])=>{
//     return (
//         <>
//             {k}
//         </>
//     )
       
    
// }))

  return (
    <>


    {loading ? <div className="flex justify-center items-center mt-12"> <h1>Loading.......</h1></div>:
      <div className="relative">
        <div>
          <img
            // src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            src={images[index]}
            alt="image 2"
            className="max-h-ful h-[100vh]  w-full object-cover object-fil"
          />
        </div>
        <div className="absolut">
          <button
            onClick={handleClickLeft}
           className="absolute top-[40%] text-red-800 bg-white px-2 py-3 rounded-r-xl font-mono font-semibold">
            Left
          </button>
          <button 
          onClick={handleClickRight}
          className="absolute top-[40%] text-red-800 bg-white right-0 px-2 py-3 rounded-l-xl font-mono font-semibold">
            Right
          </button>
        </div>
      </div>
    }
    </>
  );
};

export default Carosule;
