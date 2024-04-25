import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import AppleProvider from "next-auth/providers/apple"
import axios from 'axios';
import Credentials from "next-auth/providers/credentials";
// import jwt from 'jsonwebtoken';

type LoginResponse = {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
};

async function login(credentials: any) {
  
}


const handler = NextAuth({
  pages: {
    signIn: '/login',
  },
    providers: [
        AppleProvider({
          clientId: process.env.APPLE_CLIENT_ID as string,
          clientSecret: process.env.APPLE_CLIENT_SECRET as string,
        }),
        FacebookProvider({
          clientId: process.env.FACEBOOK_CLIENT_ID as string, 
          clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        Credentials({
          name: "Credentials",
          credentials: {
            id:  {},
            name:  {},
            email:  {},
            roleId: {},
            
            token: {},
            
          },
          async authorize(credentials) {
              try {       
                return {
                  id:credentials?.id,
                  name:credentials?.name,
                  email:credentials?.email,
                  role:credentials?.roleId,
                  picture:"picture",
                  token: credentials?.token,
                };;
              } catch (e) {
                  return {};
              }
          },
        }),
       
          
    ],
   
    callbacks: {
      async jwt({user, token}) {
          if (user) {
              token.user = user;
          }
          return token;
      },
      async session({session, token}: any) {
          session.user = token.user;
          return session;
      },
  },
  debug: process.env.NODE_ENV === "development",
  
});
    


export { handler as GET, handler as POST }