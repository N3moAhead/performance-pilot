import { GetServerSideProps } from "next";
import { DefaultSession } from "next-auth";
import { getSession } from "next-auth/react";

export default function UserDashboard({ session }: { session: DefaultSession}) {
  if (!session) {
    return <div>You have to login first!</div>
  }

  return (
    <div>{session.user?.name}</div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth/SignIn',
        permanent: false,
      }
    }
  }

  return {
    props: { session },
  }     
}