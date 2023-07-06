import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth ({
  pages: {
    signIn: '/auth/SignIn',
    signOut: '/auth/SignOut',
    error: '/auth/Error',
  },
  providers: [
    CredentialsProvider({
      name: 'SignIn',
      type: 'credentials',
      credentials: {
        username: { label: "Username", type: "text"},
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string,
          password: string,
        };

        const res = await fetch(`http://localhost:9500/login/${username}/${password}`);
        const user = await res.json();

        if (res.ok && user) {
          return user;
        }

        return null;
      },
    }),
  ],
});
