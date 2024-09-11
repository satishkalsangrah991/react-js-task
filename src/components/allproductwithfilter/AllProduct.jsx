import React, { useEffect, useState } from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart} from '../slice/productcardSlice'
import { FaChevronLeft, FaChevronRight, FaSearch, FaSpinner } from 'react-icons/fa'
import toast from 'react-hot-toast'
import { fetchCategorytdata, fetchProductdata, setCurrentProductPage, setProductSearchQuery } from '../slice/productFilterSlice'
import PhotoGallary from '../googlephotosalum/PhotoGallary'

const AllProduct = () => {
    let card1 =[1,2,3,4,5,6,7,8]
    const [cateData,setCateData] =useState([])
    const [cate,setCate] =useState("")
    // console.log(cate)
    const {productData,allCategory,totalPage,status,itemPerPage,currentPage,searchQuery} = useSelector((state)=>state.productData)
//   console.log(allCategory)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProductdata({page:currentPage,limit:itemPerPage,category:cate}))

  },[currentPage,itemPerPage,cate,dispatch])

    useEffect(()=>{
    //   dispatch(fetchCategorytdata()) 
    const cateData =async()=>{
let res = await fetch("https://dummyjson.com/products/category-list")
let data =await res.json()
if(data){
 setCateData(data)
// console.log(data)
}
    } 
    cateData() 
    },[])
    // console.log(searchQuery)

    // useEffect(() => {
    //     dispatch(setCurrentProductPage(1))
    // }, [cate, dispatch])

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
dispatch(setCurrentProductPage(Math.min(currentPage+1,totalPage)))
    }
    const handlePrev =(index)=>{
dispatch(setCurrentProductPage(Math.max(currentPage-1,1)))
    }

    const handleClick =(event,number)=>{
     event.preventDefault();
   dispatch(setCurrentProductPage(number))
    }

    const serchProduct =(e)=>{
      dispatch(setProductSearchQuery(e.target.value))
    //   if(searchQuery){
    //     dispatch(fetchProductdata({page:currentPage,limit:itemPerPage,category:"",serch:searchQuery}))
    //     setCate("")
    //     }
      }
 const serchData =(e)=>{
    e.preventDefault()
    // setCate("")
    if(searchQuery){
    dispatch(fetchProductdata({page:currentPage,limit:itemPerPage,category:"",serch:searchQuery}))
    // setCate("")
    dispatch(setProductSearchQuery(""))
    }
 }

//  useEffect(()=>{
//     dispatch(fetchProductdata({page:currentPage,limit:itemPerPage,category:"",serch:searchQuery}))
//     setCate("")
// },[searchQuery,dispatch])
//  console.log(searchQuery)

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
                          <div className='my-3 flex justify-between flex-wrap gap-4'>
                          <div className='my3'>
                          <label htmlFor='' className='mx-4 '> Filter Product By Category</label>
                            <select value={cate} onChange={(e)=>{setCate(e.target.value),   dispatch(setCurrentProductPage(1)), dispatch(setProductSearchQuery(""))}} className='wfull outline-none cursor-pointer w[120px] py-2 px-4 bg-gray-50 border rounded-sm focus:outline-blue-500 focus:border-none m-1'>
                            <option className='' value={""}>All Product</option>
                               {cateData && cateData.map((val,i)=>{
                               return <option key={i} value={val}>{val}</option>
                               })}
                            </select>
                          </div>
                          <div>
            <input className='outline-none py-2 px-3 border-2 border-r-0  rounded-lg rounded-r-none focus:outline-blue-500 focus:border-none' type='text' placeholder='Serch Product...' value={searchQuery} onChange={(e)=>serchProduct(e)}></input>
            <button onClick={(e)=>serchData(e)} className='bg-green-500 py-2.5 px-2 rounded-lg rounded-l-none relative top-[5px]'><FaSearch  size={20} className='text-white'/></button>
          </div>
          </div>
                          <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                         
                              {productData && productData?.map((val, index) => {
                                  return (
                                      <div key={index} className=" overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
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
    {/* <PhotoGallary/> */}
</div>
   </DefaultLayout>
   </>
  )
}

export default  AllProduct