import React, { useEffect, useState } from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, fetchCard, setCurrentCardPage } from '../slice/productcardSlice'
import { FaChevronLeft, FaChevronRight, FaSpinner } from 'react-icons/fa'
import toast from 'react-hot-toast'

const CardAllproduct = () => {
    let card1 =[1,2,3,4,5,6,7,8]
    const {data,totalPage,status,itemPerPage,currentPage,card,qty} = useSelector((state)=>state.productCard)
    console.log(qty)
    console.log(card)
    const dispatch = useDispatch()

    useEffect(()=>{
dispatch(fetchCard({page:currentPage,limit:itemPerPage}))
    },[currentPage,itemPerPage,dispatch])

    const addCart = (item)=>{
        // console.log(item)
        dispatch(addToCart(item))
        toast.success("Item added In Your Cart")
// dispatch(item)
    }

    const visiblePageButtonCount = 3
    const maxVisiblePage = Math.min(currentPage + Math.floor(visiblePageButtonCount/2),totalPage)
    const minvisible= Math.max(maxVisiblePage - visiblePageButtonCount + 1,1)
    const visiblePageNumbers=[]
    for(let i=minvisible; i<= maxVisiblePage; i++){
        visiblePageNumbers.push(i)
    }
    const handleNext =(index)=>{
dispatch(setCurrentCardPage(Math.min(currentPage+1,totalPage)))
    }
    const handlePrev =(index)=>{
dispatch(setCurrentCardPage(Math.max(currentPage-1,1)))
    }

    const handleClick =(event,number)=>{
     event.preventDefault();
   dispatch(setCurrentCardPage(number))
    }

  return (
   <>
   <DefaultLayout>
    <div className='container mx-auto'>
    {
        status === "loading" ?
    
    <div className="flex items-center justify-center h-56">
    <FaSpinner className="animate-spin text-gray-500" size={30} />
     </div>
     :
                          <>
                          <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                              {data && data.map((val, index) => {
                                  return (
                                      <div key={index} className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                                          {/*  <!-- Image --> */}
                                          <figure>
                                              <img
                                              src={val?.thumbnail}
                                                //   src="https://picsum.photos/id/493/800/600"
                                                  alt="card image"
                                                  className="aspect-video w-full" />
                                          </figure>
                                          {/*  <!-- Body--> */}
                                          <div className="p-6">
                                              <header className="mb-4">
                                                  <h3 className="text-xl font-medium text-slate-700">
                                                      {val.title || "Greek breakfast"} = Id :<span className='text-red-700'>{val.id}</span>
                                                  </h3>
                                                  <p className=" text-red-700"> ${val.price.toFixed(0) || 78}</p>
                                              </header>
                                              <p>
                                                  Blueberry Superpower: Vanilla Greek Yogurt + Fresh Blueberries +
                                                  Granola + Honey.
                                              </p>
                                          </div>
                                          {/*  <!-- Action base sized basic button --> */}
                                          <div className="flex justify-end p-6 pt-0">
                                              <button
                                                  onClick={() => addCart({ ...val, qty: 1 })}
                                                  className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                                                  <span>Add To Cart</span>
                                              </button>
                                          </div>
                                      </div>
                                  )
                              })}
                          </div>
                          <div className='fle my-12'>
                                  <ul className='flex justify-center gap-4'>
                                      <li>
                                          <button
                                              className={`${currentPage === 1 ? "hidden" : "block"}`}
                                              onClick={handlePrev}
                                              disabled={currentPage === 1}>
                                              <div className="flex ml-1 mt-[-3px] bg-gray-200 px-1.5 py-2.5 rounded-full">
                                                  <FaChevronLeft size="0.6rem" />
                                                  <FaChevronLeft size="0.6rem" className="-translate-x-1/2" />
                                              </div>
                                          </button>
                                      </li>
                                      {visiblePageNumbers.map((number,i) => (
                                        
                                          <li key={number}>
                                              <span className={`${currentPage === number ? "bg-green-600 cursor-pointer text-white px-2 py-1 rounded-full" : "cursor-pointer border px-2 py-1 rounded-full bg-gray-200 text-black"}`}
                                                  onClick={(e) => handleClick(e, number)}
                                                >
                                                  {number}
                                              </span>
                                          </li>
                                      ))}

                                      <li>
                                          <button
                                              onClick={handleNext}
                                              disabled={currentPage === totalPage}
                                              className={`${currentPage === totalPage ? "hidden" : "block"}`}
                                          >
                                              <div className="flex items-center justify-center ml-1 pr-1 mt-[-3px] bg-gray-200 px-1.5 py-2.5 rounded-full">
                                                  <FaChevronRight size="0.6rem" />
                                                  <FaChevronRight size="0.6rem" className="-translate-x-1/2" />
                                              </div>
                                          </button>
                                      </li>

                                  </ul>

                </div>
                              </>
    }
</div>
   </DefaultLayout>
   </>
  )
}

export default CardAllproduct