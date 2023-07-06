import { Inter } from "next/font/google";

interface Name {
  username: string;
}

const inter = Inter({ subsets: ["latin"] });

export default function Avatar(props: Name) {
  const { username} = props;
  const upperCaseLetter = username[0].toUpperCase();

  return (
    <div
      className='flex h-6 w-6 items-center justify-center rounded-full bg-blue-500'
    >
      <span className={`${inter.className} text-slate-50`}>
        {upperCaseLetter}
      </span>
    </div>
  );
}
