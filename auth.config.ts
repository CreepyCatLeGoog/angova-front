import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import Apple from "next-auth/providers/apple"
import CredentialsProvider from "next-auth/providers/credentials"
import type { JWT } from "next-auth/jwt"
import type { Session } from "next-auth"


export default {
  providers: [
    Apple({
      clientId: process.env.APPLE_CLIENT_ID,
      clientSecret: process.env.APPLE_CLIENT_SECRET as string,
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
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: any, req) {
        console.log('credentials: ' + credentials.username)
        // Add logic here to look up the user from the credentials supplied
        const payload = {
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,

        }
        if (payload.name === "mat" || payload.email === "mat@mat.com") {
          const user = { id: "1", name: "Mat", email: "mat@mat.com" }
          return user
        } else {
          // api call to backend
          const res = await fetch("http://localhost:3001/api/auth/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          })

          const data = await res.json()


          if (!res.ok) {
            throw new Error(JSON.stringify({ errors: { ...res } }))
          }
          return data
        }
      }
    })
  ],

  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: { token: string } | null }) {
      if (user) {
        token.accessToken = user.token;
      }
      console.log("token", token);
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      console.log("session", session);
      console.log("token", token);
      // this user info get via API call or decode token. Anything you want you can add
      // session.user = { name: session.user.name, email: session.user.email };
      return session;
    },
  }
}


// CredentialsProvider({
//   id: "custom-signup",
//   name: "Credentials",
//   credentials: {
//     username: { label: "Username", type: "text", placeholder: "jsmith" },
//     password: { label: "Password", type: "password" }
//   },
//   async authorize(credentials: any, req) {
//     const payload = {
//       name: credentials.name,
//       email: credentials.email,
//       password: credentials.password,

//     }

//     // api call to backend
//     // const res = await registerUser(payload)
//     const res = await fetch("http://localhost:3001/api/auth/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     })

//     const data = await res.json()


//     if (!res.ok) {
//       throw new Error(JSON.stringify({ errors: { ...res } }))
//     }
//     return data
//   }
// })