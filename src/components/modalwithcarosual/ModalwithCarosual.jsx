import React, { useEffect, useState } from 'react'

const ModalwithCarosual = () => {
    const [modal,setModal] = useState(false)
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
        fatchImages()
      },[])
    //   console.log(images)

    
  const handleClickRight = ()=>{
    let lastIdex = images.length-1
 if(index===lastIdex){
    setIndex(0)
 }
 else{
    setIndex((pre)=>pre+1)
 }
      }
      const handleClickLeft = ()=>{
        let lastIdex = images.length-1
        if(index===0){
           setIndex(lastIdex)
        }
        else{
           setIndex((pre)=>pre-1)
        }
          }

          const openImage = (idex)=>{
setIndex(idex)
setModal(true)
          }

          const handleClass =(e)=>{
// console.log(e.target.id)
if(e.target.id ==="modal"){
    setModal(false)
}
          }
  return (
<>
<div className='container mx-auto'>
{
    (loading)?<div className='flex justify-center items-center mt-20'>  <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-live="polite"
        aria-busy="true"
        aria-labelledby="title-05a desc-05a"
        className="w-16 h-16 animate animate-spin"
      >
        <title id="title-05a">Icon title</title>
        <desc id="desc-05a">Some desc</desc>
        <circle
          cx="12"
          cy="12"
          r="10"
          className="stroke-slate-200"
          strokeWidth="4"
        />
        <path
          d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2"
          className="stroke-pink-500"
          strokeWidth="4"
        />
      </svg>
    </div>
    :

<div className='grid sm:grid-cols-3 lg:grid-cols-4 gap-4'>
{images?.map((val,i)=>{
    return(
        <div key={i}>
<img
            // src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            src={val}
            onClick={()=>openImage(i)}
            alt="image 2"
            className="max-h-ful h-[300px]  w-full object-cover object-fil cursor-pointer"
          /> 
</div>
    )

})}
</div>
}
</div>

{
    (modal) &&  
    <div
    onClick={handleClass}
    id='modal'
              className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
              aria-labelledby="header-3a content-3a"
              aria-modal="true"
              tabindex="-1"
              role="dialog"
            >
              {/*    <!-- Modal --> */}
              <div
                // ref={wrapperRef}
                className="fle max-h[90vh] w-11/12 max-w-2xl flex-col gap-6 overflow-hidden rounded bg-white p6 text-slate-500 shadow-xl shadow-slate-700/10"
                id="modal"
                role="document"
              >
               {/* <button
                    onClick={() => setModal(false)}
                    className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
                    aria-label="close dialog"
                  >
                    <span className="relative only:-mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        role="graphics-symbol"
                        aria-labelledby="title-79 desc-79"
                      >
                        <title id="title-79">Icon title</title>
                        <desc id="desc-79">
                          A more detailed description of the icon
                        </desc>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </button> */}
                  <div className='relative'>
                  <img
            // src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            src={images[index]}
            alt="image 2"
            className="max-h-ful h-[400px]  w-full object-cover object-fil"
          />

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

        <button
                    onClick={() => setModal(false)}
                    className="absolute z-50 top-0 right-0 bg-red-500 inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hoverbg-transparent"
                    aria-label="close dialog"
                  >
                    <span className="relative only:-mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        role="graphics-symbol"
                        aria-labelledby="title-79 desc-79"
                      >
                        <title id="title-79">Icon title</title>
                        <desc id="desc-79">
                          A more detailed description of the icon
                        </desc>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </button>
                  </div>
               
             
              </div>
            </div>
 } 
</>
  )
}

export default ModalwithCarosual