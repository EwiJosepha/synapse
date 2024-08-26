"use client"
import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { baseUrl, signupUrl } from '@/providers/constants/constants';
import { useRouter } from 'next/navigation';
import Spinner from '@/core/components/molecules/spinners';
import Link from 'next/link';

const RegistrationForm = () => {
  const router = useRouter()
  const [values, setValues] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false)
  const [redirected, setRedirected] = useState(Boolean)
  const [succesful, setSuccesful] = useState(Boolean)
  const [badreq, setBadreq] = useState(Boolean)
  const [opensignUp, setOpensignUp] = useState(false);



  function HandleValues(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleRegister = async (e: any,) => {
    e.preventDefault()
    setIsLoading(true)
    const res = await fetch(signupUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })

    const badrequest = res.status === 400
    const goodreq = res.status === 201
    setBadreq(badrequest)
    setIsLoading(false)
    setSuccesful(goodreq)


    if (goodreq) {
      const response = await res.json().then((data) => data).then((message) => message);
      const token = response.message;
      const decoded = jwtDecode(token);

      console.log(decoded);
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("decoded", JSON.stringify(decoded))
      }
      setIsLoading(false)
      router.push(baseUrl + '/dashboard')
      console.log(router);

    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-500">

      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name='name'
              value={values.name}
              onChange={HandleValues}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name='email'
              value={values.email}
              onChange={HandleValues}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name='phoneNumber'
              value={values.phoneNumber}
              onChange={HandleValues}
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
              name='password'
              value={values.password}
              onChange={HandleValues}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-purple-500"
              required
            />
          </div>
          <button
            // disabled={isLoading}
            type="submit"
            className="w-full bg-purple-500 text-white font-semibold py-2 rounded-md hover:bg-purple-600 transition duration-200"
            onClick={handleRegister}
          >
            SignUp
            {isLoading ? <Spinner /> : ""}


          </button>
          <p className="text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-500 hover:text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </div>

    </div>
  );
};

export default RegistrationForm