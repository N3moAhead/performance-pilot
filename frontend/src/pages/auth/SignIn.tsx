import { useRef } from "react";
import Head from "next/head";
import { signIn } from "next-auth/react";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function SignIn() {
  const username = useRef("");
  const password = useRef("");

  function handleSignIn() {
    signIn("credentials", {
      username: username.current,
      password: password.current,
      redirect: true,
      callbackUrl: "/",
    });
  }

  return (
    <main
      className={`${inter.className} flex h-screen w-screen items-center justify-center bg-slate-100 dark:bg-black`}
    >
      <Head>
        <title>Login</title>
      </Head>
      <Navbar />
      {/* This will be the centered container */}
      <div className='flex min-h-full w-full flex-col justify-center px-6 py-12 sm:w-2/3 md:w-2/4 lg:w-2/5 xl:max-w-md'>
        {/* This div will have the Heading inside */}
        <div className='my-10 w-full text-center'>
          <span className='text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-slate-100'>
            Log in to Performance Pilot 👋
          </span>
        </div>
        {/* The Login Card */}
        <div className='flex h-full w-full flex-col items-center justify-center space-y-6'>
          {/* The username container */}
          <div className='w-full'>
            <span className='block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100'>
              Username
            </span>
            <div className='mt-2'>
              <input
                id='username'
                name='username'
                placeholder='Username'
                type='text'
                onChange={(event) => (username.current = event.target.value)}
                required
                className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 dark:bg-gray-800 dark:text-slate-100 dark:ring-gray-900'
              />
            </div>
          </div>
          {/* The password container */}
          <div className='w-full'>
            <span className='block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100'>
              Password
            </span>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                placeholder='Password'
                onChange={(event) => (password.current = event.target.value)}
                required
                className='block w-full  rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 dark:bg-gray-800 dark:text-slate-100 dark:ring-gray-900'
              />
            </div>
          </div>
          {/* The submit button */}
          <button
            onClick={handleSignIn}
            className='flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
          >
            Sign In
          </button>
        </div>
      </div>
    </main>
  );
}
