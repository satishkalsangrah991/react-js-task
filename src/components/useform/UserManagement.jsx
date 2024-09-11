import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import DefaultLayout from '../layout/DefaultLayout';
import { useNavigate } from 'react-router-dom';
import UserEditForm from './UserEditForm';

const UserManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const openModal = (user) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentUser(null);
    setIsModalOpen(false);
  };

  const navigate = useNavigate()

  return (
    <DefaultLayout>
    <div>
      {/* <button
        onClick={() => {openModal(null),navigate("/user/add")}}
        className="bg-green-500 text-white py-2 px-4 rounded mt-4"
      >
        Add User
      </button> */}

      <UserForm existingUser={currentUser} 
    //   closeModal={closeModal}

      />

      <UserList editUser={openModal} />

      {/* {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 w-full">
          <div className="bg-white p-6 rounded shadow-lg w-ful">
            <UserEditForm existingUser={currentUser} closeModal={closeModal} />
          </div>
        </div>
      )} */}
    </div>
    </DefaultLayout>
  );
};

export default UserManagement;
