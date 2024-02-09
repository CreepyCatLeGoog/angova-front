import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers: { GET, POST }, auth, signIn, signOut} = NextAuth({
  debug: true,
  
  providers: [    
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: { params: { prompt: 'consent' } },
      async profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      }
    }) as any,

    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "my.email@domain.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // The 'url' is pointing to a Rails API endpoint which returns a JWT Token
        const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/signin`;

        const res = await fetch(url, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account, isNewUser }) {// This user return by provider {} as you mentioned above MY CONTENT {token:}
      if (user && 'token' in user) {
        token = { accessToken: user.token };
      }
      return token;
    },

    // That token store in session
    async session({ session, token }) { // this token return above jwt()
      session.accessToken = token.accessToken;
      //if you want to add user details info
      session.user = { name: "name", email: "email" };//this user info get via API call or decode token. Anything you want you can add
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  session: {
    jwt: true,
  },
})

