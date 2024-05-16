import React, { useRef, useState,useEffect, useCallback } from 'react'

const EsaywayinfinteScroll = () => {
    const loaderRef = useRef();
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(2);
    const [loading, setLoading] = useState(false);
    console.log(loaderRef.current)
    const fetchImages = async (index) => {
      try {
        const url =
          `https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=9`
        console.log(url);
        const result = await fetch(url);
        const data = await result.json();
        console.log(data)
        return data;
      } catch (err) {
        console.log('Error: ', err);
      }
    }
  
    const getData = useCallback(async () => {
      if (loading)
        return
      setLoading(true);
      const data = await fetchImages(page);//4
      console.log('page-> ', page)
      setImages((prevImages) => [...prevImages, ...data]);
      setTimeout(() => {
        setLoading(false);
      }, 3000)
      setPage((prevPage) => prevPage + 1);
    }, [page, loading])
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        console.log(entries[0])
        const target = entries[0];
        console.log(target.isIntersecting)
        if (target.isIntersecting) {
          //call next page data
          getData();
        }
      })
  
      if (loaderRef.current) {
        observer.observe(loaderRef.current)
      }
  
      return () => {
        if (loaderRef.current) {
          observer.unobserve(loaderRef.current);
        }
      }
    }, [getData])
  
    const fetchFirstPage = async () => {
      const data = await fetchImages(1);
      setImages(data);
    }
    useEffect(() => {
      fetchFirstPage();
    }, [])
  

  return (
<>
<div className='containe max-w-[1000px] mx-auto mt-5'>
<div className='grid sm:grid-cols-2 lggrid-cols-3 gap-6'>
{
        images?.map((image, index) => (
          <img
            key={index}
            alt={image.title}
            src={"https://cdn.pixabay.com/photo/2023/02/14/23/58/sunset-7790626_1280.jpg"}
          />
        ))
      }
</div>
   <div ref={loaderRef} className='my-3'>
        {
          loading && <h2>Loading...</h2>
        }
      </div>
</div>
</>
  )
}

export default EsaywayinfinteScroll