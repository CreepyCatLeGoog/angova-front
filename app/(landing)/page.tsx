
'use client';
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
// import { SignOut } from "@/components/auth-component";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession, signIn, signOut } from "next-auth/react"

export default function LandingPage() {
  const { data: session } = useSession()
  if(session == null){
    //localStorage.getItem()
  }

  return session ? (
    <div>
      <MaxWidthWrapper>
        <Navbar />
        <p>Welcome {session.user?.name}. Signed In As</p>
        <p>{session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </MaxWidthWrapper>
    </div>
  ) : (
    <div>
      <MaxWidthWrapper>
        <Navbar />
        <Hero />
        <p>Not Signed In</p>
        <button onClick={() => signIn('google')}>Sign in with google</button>
        {/* <button onClick={() => signIn('facebook')}>Sign in with Facebook</button> */}
        <button onClick={() => signIn('facebook')}>Sign in with Facebook</button>
      </MaxWidthWrapper>
    </div>
  );
}
