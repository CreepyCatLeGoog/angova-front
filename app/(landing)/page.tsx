import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

// src/app/page.tsx
import { auth } from "@/auth";
import { SignOut } from "@/components/auth-component";

export default async function LandingPage() {
  const session = await auth();

  return session ? (
    <div>
      <MaxWidthWrapper>
        <Navbar />
        <Hero />

        <h1>Logged in as {session.user.name}</h1>
        <p>Email: {session.user.email}</p>
        <img src={session.user.image} alt="user image" />
        <SignOut />
      </MaxWidthWrapper>
    </div>
  ) : (
    <div>
      <MaxWidthWrapper>
        <Navbar />
        <Hero />
      </MaxWidthWrapper>
    </div>
  );
}
