"use client";

import { useState } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import awsConfig from '../../aws-exports';

Amplify.configure(awsConfig);

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    birthdate: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await Auth.signUp({
        username: formData.username,
        password: formData.password,
        attributes: {
          email: formData.email,
          name: formData.name,
          birthdate: formData.birthdate
        }
      });
      alert('Signup successful! Please check your email for verification.');
    } catch (error: any) {
      alert('Error signing up: ' + error.message);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center max-w-full mx-auto p-4 space-y-4 min-h-screen bg-black">
      <h1 className='text-6xl font-bold text-blue-600 mb-10'>Wine & Dine</h1>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} className="pl-2 input rounded w-1/5 h-8 text-black" />
      <input type="text" name="username" placeholder="Username" onChange={handleChange} className="pl-2 input rounded w-1/5 h-8 text-black" />
      <input
        type="date"
        name="birthdate"
        onChange={handleChange}
        className={`pl-2 rounded w-1/5 h-8 placeholder-gray-400 ${formData.birthdate ? 'text-black' : 'text-gray-400'}`}
        placeholder="dd/mm/yyyy"
      />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} className="pl-2 input rounded w-1/5 h-8 text-black" />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} className="pl-2 input rounded w-1/5 h-8 text-black" />
      <button type="submit" className="btn rounded-full bg-blue-600 w-1/12 h-8 hover:bg-blue-400">Sign Up</button>
    </form>
  );
};

export default Signup;
