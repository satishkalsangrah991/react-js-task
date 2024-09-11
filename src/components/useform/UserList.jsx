import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUser } from '../slice/userSlice';
import DefaultLayout from '../layout/DefaultLayout';

const UserList = ({ editUser }) => {
  const { users, status } = useSelector((state) => state.users);
  const dispatch = useDispatch();
console.log(users)
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  if (status === 'loading') {
    return <p>Loading users...</p>;
  }

  if (status === 'failed') {
    return <p>Failed to load users. Please try again.</p>;
  }

  return (
    // <DefaultLayout>
    <div className="mt-6">
      <h2 className="text-2xl font-bold">User List</h2>
      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <div className='flex flex-co flex1 overflow-auto bg-white p-2 shadow-md'>
        <table className="min-w-full table-auto mt-4 ">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.gender}</td>
                <td className="px-4 py-2">{user.city}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => editUser(user)}
                    className="text-blue-500 hover:text-blue-700 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
    // </DefaultLayout>
  );
};

export default UserList;
