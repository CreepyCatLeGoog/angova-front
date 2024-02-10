"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

// src/app/page.tsx
import { auth, signOut } from "@/auth";

export default async function LandingPage() {
  console.log("Server Side Rendering");
  const session = await auth();
  console.log(session);
  return session ? (
    <div>
      <MaxWidthWrapper>
        <Navbar />
        <Hero />
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <h1>Logged in as {session.user.email}</h1>
          <br />
          <button>Log Out</button>
          <br />
        </form>
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
