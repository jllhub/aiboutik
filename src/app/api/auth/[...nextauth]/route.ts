import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { findUserByEmail } from "@/lib/users"

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }
        const user = findUserByEmail(credentials.email);

        // In a real app, you'd hash the password and compare the hashes
        if (user && user.password === credentials.password) {
          // Return a user object without the password
          return { id: user.id, name: user.name, email: user.email };
        } else {
          return null;
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET || "a-super-secret-key-for-development", // In production, use a real secret from env variables
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
