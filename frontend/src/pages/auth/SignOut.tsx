import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function SignOut() {
  return (
    <main
      className={`${inter.className} flex h-screen w-screen items-center justify-center bg-slate-100 dark:bg-black`}
    >
      <Head>
        <title>Sign Out</title>
      </Head>
      <Navbar />
      <div>
        <h2 className='letter text-grey-900 w-full text-4xl font-bold leading-9 tracking-tight  dark:text-slate-50'>
          See you soon 👋
        </h2>
        <Link
          href='/auth/SignIn'
          className='group mt-6 flex w-full items-center justify-start text-blue-600 transition hover:-translate-y-1'
        >
          <span className='font-semibold tracking-wider group-hover:underline'>
            Still something to do
          </span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='ml-1 h-6 w-6 text-blue-600 transition'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
            />
          </svg>
        </Link>
      </div>
    </main>
  );
}
