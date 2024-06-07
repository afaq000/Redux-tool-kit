// src/components/Addusers.js
"use client";
import { adduser } from '@/pages/redux/slice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Addusers() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    dispatch(adduser(name));
  };

  return (
    <div className='w-full h-[200px] border-[2px] mt-5 border-red-500'>
      <div className='flex flex-col px-10'>
        <div className='flex justify-center'>
          <p className='max-w-[200px] px-4 py-2 font-bold text-center text-white mt-2 text-lg bg-slate-500'>
            Add User
          </p>
        </div>
        <div className='w-full flex gap-3 mt-5'>
          <input
            className='py-2 px-2 w-1/2 border-[1px] border-gray-500'
            onChange={handleChange}
            value={name}
          />
          <button
            onClick={handleClick}
            className='placeholder:text-black px-2 py-2 bg-red-500 font-serif text-white rounded-md'
          >
            + Add User
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addusers;
