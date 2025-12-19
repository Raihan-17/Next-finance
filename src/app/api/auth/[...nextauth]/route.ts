import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { users } from "@/src/lib/userStore";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const user = users.find(
          (u) => u.email === credentials?.email
        );

        if (!user) return null;

        const isValid = user.password === credentials?.password;
        if (!isValid) return null;

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };