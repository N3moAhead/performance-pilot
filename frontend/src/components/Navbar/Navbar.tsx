import { useSession } from "next-auth/react";
import DarkmodeButton from "./DarkModeButton";
import Avatar from "../Avatar";
import AvatarDropdown from "../AvatarDropdown";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className='fixed left-0 top-0 flex right-0 flex-wrap items-center justify-between py-5 px-2 sm:px-10'>
      {/* Left Side */}
      <DarkmodeButton />
      {/* Right Side */}
      <div>
        {
          session
            ? <AvatarDropdown username={session?.user?.name || ''} />
            : <div />
        }
      </div>
    </div>
  );
}
