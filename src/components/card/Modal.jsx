import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center w-full">
      <div className="bg-white p-6 rounded shadow-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-20 right-[120px] xl:right-[35%] mt-2 mr-2 text-red-500 hover:text-gray-700 w-ful"
        >
          <RxCross2 size={30}/>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;



