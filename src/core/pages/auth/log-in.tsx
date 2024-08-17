"use client"
import React, { useState } from 'react';
import RegisterForm from './sign-up';

const LoginForm = () => {
  const [opensignUp, setOpensignUp] = useState(false)

  function opensignUpForm() {
    setOpensignUp(true)
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {!opensignUp ? (
        <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-500 text-white font-semibold py-2 rounded-md hover:bg-purple-600 transition duration-200"
          >
            Login
          </button>
          <div className='pt-5'><span className='font-bold underline text-purple-800 cursor-pointer' onClick={opensignUpForm}>Don't have an account? Sign In</span>
          </div>
        </form>
      </div>
      ): (
        <RegisterForm />
      )}
    </div>
  );
};

export default LoginForm;
