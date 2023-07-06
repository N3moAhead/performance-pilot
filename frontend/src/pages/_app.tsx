import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { useSession } from "next-auth/react";
import { ReactElement, ReactFragment, ReactNode } from 'react';

import { ThemeProvider } from '@/contexts/ThemeContext';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ThemeProvider>
      <SessionProvider session={session}>
        {/* <Auth> */}
          <Component {...pageProps} />
        {/* </Auth> */}
      </SessionProvider>
    </ThemeProvider>
  );
}


function Auth({ children }: { children?:ReactElement}): ReactElement {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true })

  if (status === "loading") {
    return <div>Ich lade weil ich laden kann!...</div>
  }
  if (status === "authenticated") {
    return (<div>{children}</div>);
  }

  return <div></div>;
}