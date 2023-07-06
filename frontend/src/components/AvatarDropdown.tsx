import { useState, useEffect, useRef } from "react";
import { signOut } from "next-auth/react";
import Avatar from "./Avatar";

interface AvatarDropdownProps {
  username: string;
}

export default function AvatarDropdown(props: AvatarDropdownProps) {
  const { username } = props;
  const dropdownRef = useRef<any>();
  const [open, setOpen] = useState(false);

  const handleClickOutside = (event: Event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className='relative inline-block cursor-pointer text-left'
      onClick={() => setOpen((current) => !current)}
    >
      <Avatar username={username} />
      <div
        className={`dark:bg-gray-800 ${
          open ? "block" : "hidden"
        } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='menu-button'
      >
        <div className='py-1' role='none' tabIndex={-1}>
          <button
            type='button'
            className='p-2 w-full flex justify-start items-center hover:ring dark:ring-white rounded-md'
            onClick={() => signOut({ callbackUrl: "/auth/SignOut" })}
          >
            <div className='flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6 dark:text-white'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                />
              </svg>
              <span className='ml-2 dark:text-white'>Logout</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
