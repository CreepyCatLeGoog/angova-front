import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import Apple from "next-auth/providers/apple"
import CredentialsProvider from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"

export default {
  providers: [
    Apple({
      clientId: process.env.APPLE_CLIENT_ID,
      clientSecret: process.env.APPLE_CLIENT_SECRET,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),

        Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: { params: { prompt: 'consent' } },
                  async profile(profile) {
                    return {
                      id: profile.id,
                      name: profile.name,
                      email: profile.email,
                      image: profile.picture,
                    };
                  }
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: {  label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      // Add logic here to look up the user from the credentials supplied
      const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        console.log("credentials :", credentials);
        
      if (user) {
        // Any object returned will be saved in `user` property of the JWT
        return user
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    }
  })
    ],
    
     callbacks: {
        async jwt({ token, user }) {// This user return by provider {} as you mentioned above MY CONTENT {token:}
          if (user && 'token' in user) {
              token = { accessToken: user.token };
              console.log("token", token);
          }
          return token;
        },
    
        // That token store in session
        async session({ session, token }) { // this token return above jwt()
          session.accessToken = token.accessToken;
          //if you want to add user details info
          session.user = { name: session.user.name, email: session.user.email };//this user info get via API call or decode token. Anything you want you can add
          return session;
        },
      },
} satisfies NextAuthConfig