import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addData,
  resetForm,
  setFormData
} from '../fetures/formSlice';

const FormData = ({onClose}) => {
  const dispatch = useDispatch();
  const { formData, data, status } = useSelector(state => state.form);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({
      ...formData,
      [name]: value,
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.lastName) tempErrors.lastName = 'Last name is required';
    if (!formData.address) tempErrors.address = 'Address is required';
    if (!formData.country) tempErrors.country = 'Country is required';
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.phone) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = 'Phone number must be 10 digits';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      if (formData.id === null) {
        dispatch(addData({ ...formData, id: Date.now() }));
      }
      dispatch(resetForm());
    }
   
  };

  return (
    <>
      <div className='container mx-auto mt-12'>
        <div className='max-w-[600px] mx-auto bg-gray-50 border shadow-md p-6'>
          <h1 className='text-center my-5 text-xl font-bold'>Register Here</h1>
          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor='name'>Name</label>
              <input
                className='w-full my-3 p-3 outline-none focus:outline-blue-500 rounded-md'
                placeholder='Enter your name'
                type='text'
                name='name'
                value={formData?.name}
                onChange={handleChange}
              />
              {errors.name && <span className='text-red-500'>{errors.name}</span>}
            </div>
            <div>
              <label htmlFor='lastName'>Last name</label>
              <input
                className='w-full my-3 p-3 outline-none focus:outline-blue-500 rounded-md'
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                placeholder='Enter your lastname'
              />
              {errors.lastName && <span className='text-red-500'>{errors.lastName}</span>}
            </div>
            <div>
              <label htmlFor='address'>Address</label>
              <textarea
                className='w-full my-3 p-3 outline-none focus:outline-blue-500 rounded-md'
                name='address'
                value={formData.address}
                onChange={handleChange}
                placeholder='Enter your Address'
                rows={4}
              />
              {errors.address && <span className='text-red-500'>{errors.address}</span>}
            </div>
            <div>
              <label htmlFor='country'>Select Country</label>
              <select
                className='w-full my-3 p-3 outline-none focus:outline-blue-500 rounded-md'
                name='country'
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Select one</option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
              </select>
              {errors.country && <span className='text-red-500'>{errors.country}</span>}
            </div>
            <div>
              <label htmlFor='email'>Email Id</label>
              <input
                className='w-full my-3 p-3 outline-none focus:outline-blue-500 rounded-md'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
              />
              {errors.email && <span className='text-red-500'>{errors.email}</span>}
            </div>
            <div>
              <label htmlFor='phone'>Phone</label>
              <input
                className='w-full my-3 p-3 outline-none focus:outline-blue-500 rounded-md'
                type='text'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='Enter your phone number'
              />
              {errors.phone && <span className='text-red-500'>{errors.phone}</span>}
            </div>
            <div className='flex justify-center mt-5'>
              <button className='bg-green-600 px-6 py-2  text-white rounded-md text-xl font-bold' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className='my-3 p-2 shadow-lg border'>
          <div className='flex overflow-auto justify-center'>
            <table className='table-auto'>
              <thead>
                <tr>
                  <th  style={{padding:'20px'}}>Name</th>
                  <th style={{padding:'20px'}}>Last Name</th>
                  <th style={{padding:'20px'}}>Email</th>
                  <th style={{padding:'20px'}}>Phone</th>
                  <th style={{padding:'20px'}}>Country</th>
                  <th style={{padding:'20px'}}>Address</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => (
                  <tr key={item.id}>
                    <td style={{padding:'20px'}}>{item.name}</td>
                    <td style={{padding:'20px'}}>{item.lastName}</td>
                    <td style={{padding:'20px'}}>{item.email}</td>
                    <td style={{padding:'20px'}}>{item.phone}</td>
                    <td style={{padding:'20px'}}>{item.country}</td>
                    <td style={{padding:'20px'}}>{item.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default  FormData