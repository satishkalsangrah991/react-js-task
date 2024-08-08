import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardData, removeCard, addCard } from "../fetures/cardSlice";
import { RxCross1 } from "react-icons/rx";

import FormData from "./FormData";
import Modal from "./Modal";

const Card = () => {
  const { card, status, page, pageSize, totalPages } = useSelector(
    (state) => state?.card
  );
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toggle, setIsToggle] = useState(false);
  useEffect(() => {
    dispatch(fetchCardData({ page, pageSize }));
  }, [dispatch, page, pageSize]);

  const handleRemoveCard = (index) => {
    dispatch(removeCard(index));

    const newPage = Math.ceil((card.length - 1) / pageSize) + 1;
    dispatch(fetchCardData({ page: newPage, pageSize: 1 })).then((result) => {
      if (result.payload.data.length > 0) {
        dispatch(addCard(result.payload.data[0]));
      }
    });
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      dispatch({ type: "card/setPage", payload: page + 1 });
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      dispatch({ type: "card/setPage", payload: page - 1 });
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  console.log(toggle)
  return (
    <>
      <div className="container mx-auto bg-gray-50 shadow-2xl rounded-lg p-4 min-h-screen">
        <div className="grid md:grid-cols-4 gap-5">
          {/* Navigation Slider */}
          <div className="bg-gray-50 p-4 shadow-xl rounded-lg min-h-screen">
            <div className="flex flex-col">
              <div className="bg-white shadow-lg rounded-lg my-2 p-2">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full "
                    src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="image"
                  ></img>
                  <div>
                    <h1 className="folt-bold ">Hi Reader,</h1>
                    <h2>Here's your News!</h2>
                  </div>
                </div>
              </div>
            

              <div className="flex justify-center my-6 bg-white shadow-lg p-4 rounded-lg">
              
        <input
          type="checkbox"
          className="peer absolute -left-[65rem]"
          id="dn-toggle-bs"
          checked={toggle}
          onChange={(e)=>setIsToggle(e.target.checked)}
        />
        <label
          for="dn-toggle-bs"
          className="toggle relative inline-block h-12 w-24 cursor-pointer overflow-clip rounded-full border border-sky-300 bg-sky-300 transition-colors duration-200 peer-checked:border-sky-800 peer-checked:bg-sky-800 peer-disabled:cursor-not-allowed peer-checked:[&_.crater]:opacity-100 peer-checked:[&_.star-1]:left-2 peer-checked:[&_.star-1]:top-3 peer-checked:[&_.star-1]:h-0.5 peer-checked:[&_.star-1]:w-0.5 peer-checked:[&_.star-2]:left-4 peer-checked:[&_.star-2]:top-1.5 peer-checked:[&_.star-2]:h-1 peer-checked:[&_.star-2]:w-1 peer-checked:[&_.star-3]:left-4 peer-checked:[&_.star-3]:top-4 peer-checked:[&_.star-3]:h-0.5 peer-checked:[&_.star-3]:w-0.5 peer-checked:[&_.toggle-handler]:-left-4 peer-checked:[&_.toggle-handler]:translate-x-10 peer-checked:[&_.toggle-handler]:rotate-0 peer-checked:[&_.toggle-handler]:bg-amber-100"
        >
          <span className="toggle-handler relative left-0 top-0 z-1 inline-block h-6 w-6 -rotate-45 rounded-full bg-amber-300 shadow transition-all duration-[400ms]">
            <span className="crater absolute left-1 top-2 h-px w-px rounded-full bg-amber-200 opacity-0 transition-opacity duration-200"></span>
            <span className="crater absolute left-2.5 top-3.5 h-1 w-1 rounded-full bg-amber-200 opacity-0 transition-opacity duration-200"></span>
            <span className="crater absolute left-3 top-1 h-1.5 w-1.5 rounded-full bg-amber-200 opacity-0 transition-opacity duration-200"></span>
          </span>
          <span className="star-1 absolute left-3 top-4 h-4 w-4 rounded-full bg-white transition-all duration-300"></span>
          <span className="star-2 absolute left-6 top-3.5 h-4 w-4 rounded-full bg-white transition-all duration-300"></span>
          <span className="star-3 absolute left-9 top-2 h-5 w-5 rounded-full bg-white transition-all duration-300"></span>
          <span className="sr-only">toggle switch</span>
        </label>
      </div>
              <div className="bg-white px-2 ter py-4 shadow-xl rounded-lg">
                <h1 className="text-xl py-2 text-center font-bold">
                  Feedback ?
                </h1>
                <div className="flex justify-center">
                  <button
                    className="bg-green-500 text-white font-bold px-4 py-2 shadow-lg rounded-md my-"
                    onClick={handleOpenModal}
                  >
                    We're Listening
                  </button>
                  <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <FormData onClose={handleCloseModal} />
                  </Modal>
                </div>
              </div>
            </div>
          </div>

          {/* Card layout */}

          <div className="col-span-3">
            {status === "loading" ? (
              <div className="my-10">
                <h1 className="text-center text-xl font-bold">Loading...</h1>
              </div>
            ) : (
              <div>
                {/* row grid card */}
                {!toggle && (
                  <>
                    <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-4">
                      {card &&
                        card.map((val, i) => (
                          <div
                            className="bg-white px-4 py-2 shadow-lg rounded-lg"
                            key={i}
                          >
                            <div className="flex justify-end my-1 text-red-500 font-bold">
                              <button onClick={() => handleRemoveCard(i)}>
                                <RxCross1
                                  size={20}
                                  className="cursor-pointer"
                                />
                              </button>
                            </div>
                            <h1 className="text-lg font-semibold mb-2 ">
                              {val.body.slice(0, 60)}...
                            </h1>
                            <p className="text-gray-500 text-sm truncate">
                              {val.title}
                            </p>
                            <span className="text-sm font-medium pb-3">
                              Date 08-08-2024
                            </span>
                            <img
                              src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=800"
                              alt="image"
                              className="rounded-md"
                            ></img>
                          </div>
                        ))}
                    </div>
                    <div className="flex justify-center my-4 gap-4">
                      <button
                        onClick={handlePrevPage}
                        disabled={page === 1}
                        className="bg-blue-500 text-white p-2 rounded-lg"
                      >
                        Previous
                      </button>
                      <button
                        onClick={handleNextPage}
                        disabled={page === totalPages}
                        className="bg-blue-500 text-white p-2 rounded-lg"
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}

                {/* column card  */}
                {toggle && (
                  <>
                    <div className="grid mdgrid-cols-3 xlgrid-cols-4 gap-4">
                      {card &&
                        card.map((val, i) => (
                          <div
                            className="bg-white px-4 py-2 shadow-lg rounded-lg flex gap-3 justify-between"
                            key={i}
                          >
                            <img
                              src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=800"
                              alt="image"
                              className="rounded-md w-16 h-16"
                            ></img>
                           
                            <h1 className="text-lg font-semibold mb-2 ">
                              {val.body.slice(0, 60)}...
                            </h1>
                            <p className="text-gray-500 text-sm truncat">
                              {val.title}
                            </p>
                            <span className="text-sm font-medium pb-3">
                              Date 08-08-2024
                            </span>
                            <div className="flex justify-end my1 text-red-500 font-bold">
                              <button onClick={() => handleRemoveCard(i)}>
                                <RxCross1
                                  size={20}
                                  className="cursor-pointer relative top-[-15px]"
                                />
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className="flex justify-center my-4 gap-4">
                      <button
                        onClick={handlePrevPage}
                        disabled={page === 1}
                        className="bg-blue-500 text-white p-2 rounded-lg"
                      >
                        Previous
                      </button>
                      <button
                        onClick={handleNextPage}
                        disabled={page === totalPages}
                        className="bg-blue-500 text-white p-2 rounded-lg"
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
