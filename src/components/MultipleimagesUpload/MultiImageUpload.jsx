import React, { useState } from 'react'
import { AiOutlineCamera } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';

const MultiImageUpload = () => {

    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedImages1, setSelectedImages1] = useState([]);
    console.log(selectedImages);
    const onSelectFile = (event) => {
      const selectedFiles = event.target.files;
      console.log(selectedFiles);
      const selectedFilesArray = Array.from(selectedFiles);
      console.log(selectedFilesArray);
      setSelectedImages(selectedFilesArray);
      const imagesArray = selectedFilesArray.map((file) => {
        return URL.createObjectURL(file);
      });
  
      setSelectedImages1((previousImages) => previousImages.concat(imagesArray));
  
      // FOR BUG IN CHROME
      event.target.value = "";
    };
  
    function deleteHandler(image) {
      setSelectedImages1(selectedImages1.filter((e) => e !== image));
      URL.revokeObjectURL(image);
    }
  return (
   <>
     <div className="mx mt-12 max-w-[500px] mx-auto ">
                  <h1 className="block mb- text-s font-mediu text-gray-500 dark:text-whi pl- font-semibold  text-[15px] pb-1 pl-5">
                    Upload Image
                  </h1>
                  <label className="">
                    <div className="bg-gray-100 p- flex gap-3 w-[190px] ml-4 rounded-lg py-1.5">
                      <div className="bg-[#C25AD4] p-1 rounded-full ml-3 text-white">
                        {" "}
                        <AiOutlineCamera className="" size={25} />
                      </div>
                      <h1 className="mt-1.5 text-[14px] text-gray-500 font-semibold">
                        Upload Image
                      </h1>
                    </div>
                    <br />
                    {/* <span>up to 10 images</span> */}
                    <input
                      type="file"
                      name="images"
                      onChange={onSelectFile}
                      multiple
                      accept="image/*"
                      className='hidden'
                    />
                  </label>
                  <br />

                  {/* <input type="file" multiple /> */}

                  {selectedImages.length > 0 &&
                    (selectedImages.length > 10 ? (
                      <p className="error">
                        You can't upload more than 10 images! <br />
                        <span>
                          please delete <b> {selectedImages.length - 10} </b> of
                          them{" "}
                        </span>
                      </p>
                    ) : (
                      ""
                    ))}

                  <div className="imag mt-[-15px] px] px-5">
                    <div className="flex gap-4 overflow-auto no-scrollbar">
                      {selectedImages1 &&
                        selectedImages1.map((image, index) => {
                          {
                            /* console.log(image.URL.createObjectURL()) */
                          }
                          return (
                            <div key={image} className="imag relative">
                              <MdDeleteForever
                                onClick={() => deleteHandler(image)}
                                className="absolute right-0 text-red-500"
                                size={20}
                              />
                              <div className="w-[100px]">
                                <img
                                  src={image}
                                  height=""
                                  alt="upload"
                                  className="w-24 h-24"
                                />
                              </div>

                              {/* <p>{index + 1}</p> */}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
   </>
  )
}

export default MultiImageUpload