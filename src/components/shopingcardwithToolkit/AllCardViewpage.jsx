import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, decrementQty, removeCardItem } from "../slice/productcardSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AllCardViewpage = () => {
    const {card} =useSelector((state)=>state.productCard)
    const dispatch =useDispatch()
   const navigate =useNavigate()

   const total = card.reduce((acc,val)=>acc+(val.price*val.qty),0)

const incrementItem = (item) =>{
dispatch(addToCart(item))
toast.success("increcse qty")
}
 const deleteItem = (id)=>{
        dispatch(removeCardItem(id))
        toast.error("Item Remove From Your Cart")
}
const decrementItem =(item)=>{
if(item.qty <= 1){
dispatch(removeCardItem(item.id))
toast.error("Item Remove From Your Cart")
}
else{
    dispatch(decrementQty(item))
    toast.error("1 Qty Remove Your Cart")
}
}

const allItemRemove =()=>{
    dispatch(clearCart())
    toast.error("Cart cleared", { position: "bottom-left" });
}

   


  return (
    <>
      <DefaultLayout>
        <div className="container mx-auto">
          <div className="w-full pt-[60px]">
            <div className="container-x mx-auto">
              <div className="w-full mb-[30px]">
                <div className="relative w-full overflow-x-auto rounded overflow-hidden border border-qpurplelow/10">
                  <table className="w-full text-sm text-left text-qgray dark:text-gray-400">
                    <tbody>
                      <tr className="text-[13px] font-medium text-qblack bg-[#F6F6F6] whitespace-nowrap px-2 border-b border-qpurplelow/10 uppercase">
                        <td className="py-4 pl-10 block whitespace-nowrap min-w-[300px]">
                          Product
                        </td>
                        <td className="py-4 whitespace-nowrap text-center min-w-[300px]">
                          Price
                        </td>
                        <td className="py-4 whitespace-nowrap text-center ">
                          Quantity
                        </td>
                        <td className="py-4 whitespace-nowrap text-center min-w-[300px]">
                          Total
                        </td>
                        <td className="py-4 whitespace-nowrap text-right w-[114px]" />
                      </tr>
                      {card && card.map((val,i)=>{
                        return(
                            <tr key={i}
                            className="bg-white border-b border-qpurplelow/10 hover:bg-gray-50">
                        <td className="pl-10 py-4 w-[380px]">
                          <div className="flex space-x-6 items-center">
                            <div className="w-[80px] h-[80px] rounded overflow-hidden flex justify-center items-center border border-qpurplelow/10 relative">
                              <span
                                style={{
                                  boxSizing: "border-box",
                                  display: "block",
                                  overflow: "hidden",
                                  width: "initial",
                                  height: "initial",
                                  background: "none",
                                  opacity: 1,
                                  border: "0px",
                                  margin: "0px",
                                  padding: "0px",
                                  position: "absolute",
                                  inset: "0px",
                                }}
                              >
                                <img
                                  alt="product"
                                  sizes="100vw"
                                  src={val?.thumbnail}
                                //   srcSet="/_next/image?url=https%3A%2F%2Fmamunuiux.com%2Fshopus%2Fuploads%2Fcustom-images%2Ffeminine-wrap-blouse-2023-03-23-12-08-55-5449.png&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fmamunuiux.com%2Fshopus%2Fuploads%2Fcustom-images%2Ffeminine-wrap-blouse-2023-03-23-12-08-55-5449.png&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fmamunuiux.com%2Fshopus%2Fuploads%2Fcustom-images%2Ffeminine-wrap-blouse-2023-03-23-12-08-55-5449.png&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fmamunuiux.com%2Fshopus%2Fuploads%2Fcustom-images%2Ffeminine-wrap-blouse-2023-03-23-12-08-55-5449.png&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fmamunuiux.com%2Fshopus%2Fuploads%2Fcustom-images%2Ffeminine-wrap-blouse-2023-03-23-12-08-55-5449.png&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fmamunuiux.com%2Fshopus%2Fuploads%2Fcustom-images%2Ffeminine-wrap-blouse-2023-03-23-12-08-55-5449.png&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fmamunuiux.com%2Fshopus%2Fuploads%2Fcustom-images%2Ffeminine-wrap-blouse-2023-03-23-12-08-55-5449.png&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fmamunuiux.com%2Fshopus%2Fuploads%2Fcustom-images%2Ffeminine-wrap-blouse-2023-03-23-12-08-55-5449.png&w=3840&q=75 3840w"
                                //   src="/_next/image?url=https%3A%2F%2Fmamunuiux.com%2Fshopus%2Fuploads%2Fcustom-images%2Ffeminine-wrap-blouse-2023-03-23-12-08-55-5449.png&w=3840&q=75"
                                //  src="https://picsum.photos/id/493/800/600"
                                  decoding="async"
                                  data-nimg="fill"
                                  className="w-full h-full object-contain"
                                  style={{
                                    position: "absolute",
                                    inset: "0px",
                                    boxSizing: "border-box",
                                    padding: "0px",
                                    border: "none",
                                    margin: "auto",
                                    display: "block",
                                    width: "0px",
                                    height: "0px",
                                    minWidth: "100%",
                                    maxWidth: "100%",
                                    minHeight: "100%",
                                    maxHeight: "100%",
                                  }}
                                />
                              </span>
                            </div>
                            <div className="flex-1 flex flex-col">
                              <a
                                rel="noopener noreferrer"
                                href="/single-product?slug=feminine-wrap-blouse"
                              >
                                <h1 className="font-medium text-[15px] text-qblack hover:text-qpurple">
                                 {val.title}
                                </h1>
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="text-center py-4 px-2">
                          <div className="flex space-x-1 items-center justify-center">
                            <span className="text-[15px] text-qblack font-medium">
                              ${val.price.toFixed(0)}
                            </span>
                          </div>
                        </td>
                        <td className=" py-4">
                          <div className="flex justify-center items-center">
                            <div className="w-[120px] h-[40px] rounded px-[26px] flex items-center border border-qborder">
                              <div className="flex justify-between items-center w-full">
                                <button
                                onClick={()=>decrementItem(val)}
                                  type="button"
                                  className="text-lg font-medium text-qgray transform scale-100 hover:scale-110 hover:text-qpurple transition duration-300 ease-in-out"
                                >
                                  -
                                </button>
                                <span className="text-qblack">{val.qty}</span>
                                <button
                                 onClick={()=>incrementItem(val)}
                                  type="button"
                                  className="text-lg font-medium text-qgray transform scale-100 hover:scale-110 hover:text-qpurple transition duration-300 ease-in-out"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-right py-4 w-[200px]">
                          <div className="flex space-x-1 items-center justify-center">
                            <span className="text-[15px] text-qblack font-medium">
                              ${val.price.toFixed(0) * val.qty}
                            </span>
                          </div>
                        </td>
                        <td className="text-right py-4">
                          <div className="flex space-x-1 items-center justify-center re">
                            {/* <span className="cursor-pointer text-qgray w-2.5 h-2.5 transform scale-100 hover:scale-110 hover:text-red-600 transition duration-300 ease-in-out ">
                              <svg
                                viewBox="0 0 10 10"
                                fill="none"
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z" />
                              </svg>
                            </span> */}
                            <button 
                            onClick={()=>deleteItem(val.id)}
                            className="text-gray-600 transition hover:text-red-600">
                          <span className="sr-only">Remove item</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
                          </div>
                        </td>
                         </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="w-full sm:flex justify-between">
                <div className="flex space-x-4 items-center">
               
                  <button type="button"
                  onClick={()=>allItemRemove()}
                  >
                    <div className="w-full text-sm font-semibold text-red-600 mb-5 sm:mb-0">
                      Clear Cart
                    </div>
                  </button>
                  <div onClick={()=>navigate("/card")} className="w-[140px] md:flex hidden rounded-full h-[50px] bg-[#F6F6F6] justify-center items-center cursor-pointer">
                    <span className="text-sm font-semibold">Update Cart</span>
                  </div>
                  <div className="md:w-[300px] w-1/2 h-[50px] flex justify-center items-center cursor-pointer">
                    <div className=" transition-common bg-purple-500 hover:bg-qpurplelow/10 border border-transparent hover:border-qpurple hover:text-qpurple text-white flex justify-center items-center w-full h-full rounded-full">
                      <span className="text-sm font-semibold">
                        Proceed to Checkout
                      </span>
                    </div>
                  </div>
                  <div className="text-2xl">
                    <span className="text-green-500 font-bold">Total Amount:{total.toFixed(0)}</span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default AllCardViewpage;
