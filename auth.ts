import NextAuth from "next-auth"
import authConfig from "./auth.config"

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  debug: true,
  session: { strategy: "jwt" },
  ...authConfig,
  secret: process.env.AUTH_SECRET,

})