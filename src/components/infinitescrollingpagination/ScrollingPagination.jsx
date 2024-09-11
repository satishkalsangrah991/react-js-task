import React, { useCallback, useEffect, useRef } from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import { useDispatch, useSelector } from 'react-redux'
import { fetchScrollData, incrementPage } from '../slice/infiniteScrollSlice'

const ScrollingPagination = () => {
    // let scrollData =[1,2,3,4,5,6,7,8] 
    const dispatch = useDispatch()
    const loaderRef = useRef();
    console.log(loaderRef.current)
    const {scrollData,status, currentPage,itemsPerPage,totalPage} =useSelector((s)=>s.scrollData)
console.log(scrollData)
//     useEffect(()=>{
//       if (status === false || status === true){
// dispatch(fetchScrollData({page:currentPage,limit:itemsPerPage}))
//       }
//     },[dispatch,currentPage,itemsPerPage ])

//     const handleScroll = () => {
//         if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//           dispatch(incrementPage());
//         }
//       };
    
//       useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//       }, [currentPage,dispatch]);

console.log(currentPage)
const getData = useCallback(() => {
    if (status === true) return;
    dispatch(fetchScrollData({page:currentPage,limit:itemsPerPage}));
    dispatch(incrementPage());
    
  }, [dispatch, currentPage]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      console.log(target.isIntersecting)
      if (target.isIntersecting) {
        getData();
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [getData]);

  useEffect(() => {
    dispatch(fetchScrollData({ page: currentPage ,limit:itemsPerPage}));
  }, [dispatch]);
  return (
<>
<DefaultLayout>
<div className='container mx-auto'>
{/* {
    (!status)? */}
    <div className='grid sm:grid-cols-2 lggrid-cols-4 gap-4 lg:gap-8'>
{scrollData&& scrollData?.slice(12).map((val,i)=>{
    return(
        <div 
        key={i}
        className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              A place under the night sky {val.id}
            </h3>
            <p className="text-sm text-slate-400">By George Johnson, jun3 28</p>
          </header>
          <p>
            There’s nothing better than hiking along the rocky footpaths,
            accompanied only by the noise of cicadas. As the boat docks in the
            harbor, gaze upon white and blue houses, craggy cliffs, sweeping
            olive groves, and the dazzling blues of the Aegean sea.
          </p>
        </div>
      </div>
    )
})}
    </div>
    <div 
    ref={loaderRef}
    className='text-center text-xl font-bold my-4'>Loading...</div> 
 {/* } */}
 </div>  
</DefaultLayout> 
</>
  )
}

export default ScrollingPagination


// import React, { useRef, useState,useEffect, useCallback } from 'react'

// const ScrollingPagination = () => {
//     const loaderRef = useRef();
//     const [images, setImages] = useState([]);
//     const [page, setPage] = useState(2);
//     const [loading, setLoading] = useState(false);
//     console.log(loaderRef.current)
//     const fetchImages = async (index) => {
//       try {
//         const url =
//           `https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=9`
//         console.log(url);
//         const result = await fetch(url);
//         const data = await result.json();
//         console.log(data)
//         return data;
//       } catch (err) {
//         console.log('Error: ', err);
//       }
//     }
  
//     const getData = useCallback(async () => {
//       if (loading)
//         return
//       setLoading(true);
//       const data = await fetchImages(page);//4
//       console.log('page-> ', page)
//       setImages((prevImages) => [...prevImages, ...data]);
//       setTimeout(() => {
//         setLoading(false);
//       }, 3000)
//       setPage((prevPage) => prevPage + 1);
//     }, [page, loading])
  
//     useEffect(() => {
//       const observer = new IntersectionObserver((entries) => {
//         console.log(entries[0])
//         const target = entries[0];
//         console.log(target.isIntersecting)
//         if (target.isIntersecting) {
//           //call next page data
//           getData();
//         }
//       })
  
//       if (loaderRef.current) {
//         observer.observe(loaderRef.current)
//       }
  
//       return () => {
//         if (loaderRef.current) {
//           observer.unobserve(loaderRef.current);
//         }
//       }
//     }, [getData])
  
//     const fetchFirstPage = async () => {
//       const data = await fetchImages(1);
//       setImages(data);
//     }
//     useEffect(() => {
//       fetchFirstPage();
//     }, [])
  

//   return (
// <>
// <div className='containe max-w-[1000px] mx-auto mt-5'>
// <div className='grid sm:grid-cols-2 lggrid-cols-3 gap-6'>
// {
//         images?.map((image, index) => (
//           <img
//             key={index}
//             alt={image.title}
//             src={"https://cdn.pixabay.com/photo/2023/02/14/23/58/sunset-7790626_1280.jpg"}
//           />
//         ))
//       }
// </div>
//    <div ref={loaderRef} className='my-3'>
//         {
//           loading && <h2>Loading...</h2>
//         }
//       </div>
// </div>
// </>
//   )
// }

// export default ScrollingPagination