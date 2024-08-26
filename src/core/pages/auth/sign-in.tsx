// import React, { useState } from 'react';
// import RegisterForm from './sign-up';
// import { baseUrl, loginUrl } from '@/providers/constants/constants';
// import { jwtDecode } from 'jwt-decode';
// import { useRouter } from 'next/navigation';
// import Spinner from '@/core/components/molecules/spinners';

// const LoginForm = () => {
//   const router = useRouter();

//   const [values, setValues] = useState({
//     email: '',
//     password: '',
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [redirected, setRedirected] = useState(false);
//   const [successful, setSuccessful] = useState(false);
//   const [badReq, setBadReq] = useState(false);
//   const [openSignUp, setOpenSignUp] = useState(false);

//   function openSignUpForm() {
//     setOpenSignUp((prev) => !prev);
//   }

//   function handleValues(e: React.ChangeEvent<HTMLInputElement>) {
//     const { name, value } = e.target;
//     setValues((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   }

//   const handleRegister = async (e: any) => {
//     e.preventDefault();
//     setIsLoading(true);
//     const res = await fetch(loginUrl, {
//       method: 'POST',
//       mode: 'cors',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(values),
//     });
//     const badRequest = res.status === 400;
//     const goodRequest = res.status === 201;
//     setBadReq(badRequest);
//     setIsLoading(false);
//     setSuccessful(goodRequest);

//     if (goodRequest) {
//       const response = await res.json().then((data) => data).then((message) => message);
//       const token = response.message;
//       const decoded = jwtDecode(token);

//       console.log(decoded);
//       if (typeof localStorage !== 'undefined') {
//         localStorage.setItem('decoded', JSON.stringify(decoded));
//       }
//       setIsLoading(true);
//       router.push(baseUrl + '/dashboard');
//       setRedirected(true);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-purple-500">
//       {!openSignUp ? (
//         <div className="bg-white shadow-md rounded-lg p-8 w-96">
//           <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
//           <form>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={values.email}
//                 onChange={handleValues}
//                 className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-purple-500"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={values.password}
//                 onChange={handleValues}
//                 className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-purple-500"
//                 required
//               />
//             </div>

//             <button
//               disabled={isLoading}
//               type="submit"
//               className="w-full bg-purple-500 text-white font-semibold py-2 rounded-md hover:bg-purple-600 transition duration-200"
//               onClick={handleRegister}
//             >
//               {isLoading ? <Spinner /> : 'Login'}
//             </button>
//             {badReq && (
//               <div className="mt-4 text-red-500 text-sm">
//                 Invalid email or password. Please try again.
//               </div>
//             )}
//             <div className="pt-5">
//               <span
//                 className="font-bold underline text-purple-800 cursor-pointer"
//                 onClick={openSignUpForm}
//               >
//                 Don't have an account? Sign Up
//               </span>
//             </div>
//           </form>
//         </div>
//       ) : (
//         <RegisterForm />
//       )}
//     </div>
//   );
// };

// export default LoginForm;