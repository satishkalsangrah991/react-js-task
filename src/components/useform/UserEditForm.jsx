import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../slice/userSlice';
// import { DefaultContext } from 'react-icons';
import DefaultLayout from '../layout/DefaultLayout';

const UserEditForm = ({ existingUser, closeModal }) => {
  const [name, setName] = useState(existingUser ? existingUser.name : '');
  const [email, setEmail] = useState(existingUser ? existingUser.email : '');
  const [gender, setGender] = useState(existingUser ? existingUser.gender : '');
  const [city, setCity] = useState(existingUser ? existingUser.city : '');
  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
  const [terms, setTerms] = useState(existingUser ? existingUser.terms : false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, gender, city, thumbnail, images, terms };

    if (existingUser) {
      dispatch(updateUser({ ...existingUser, ...userData }));
    } else {
      dispatch(addUser(userData));
    }
    closeModal();
  };

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleImagesChange = (e) => {
    setImages([...e.target.files]);
  };

  return (
  
    <div className='max-w-[600px] mx-auto shadow-lg bg-white p-2'>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">City</label>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        >
          <option value="">Select City</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
          <option value="Houston">Houston</option>
          <option value="Phoenix">Phoenix</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Thumbnail Image</label>
        <input
          type="file"
          onChange={handleThumbnailChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Images</label>
        <input
          type="file"
          multiple
          onChange={handleImagesChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
            className="mr-2"
          />
          I agree to the terms and conditions
        </label>
      </div>
      <div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded">
          {existingUser ? 'Update User' : 'Add User'}
        </button>
      </div>
    </form>
    </div>
   
  );
};

export default  UserEditForm