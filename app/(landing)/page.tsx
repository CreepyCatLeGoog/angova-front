
'use client';
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
// import { SignOut } from "@/components/auth-component";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from 'next-auth/react';

export default function LandingPage() {
  const { data } = useSession();
  const { accessToken } = data;
  console.log(accessToken);
  var user = false;
  return user ? (
    <div>
      <MaxWidthWrapper>
        <Navbar />
        <Hero />

        <h1>Logged in as ""</h1>
        <p>Email: user.email</p>
        <Avatar>
          <AvatarImage
            src={"https://github.com/shadcn.png"}
            alt="@shadcn"
            data-testid="avatar"
          />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        {/* <SignOut /> */}
      </MaxWidthWrapper>
    </div>
  ) : (
    <div>
      <MaxWidthWrapper>
        <Navbar />
        <Hero />
        <p>Welcome Angova</p>
      </MaxWidthWrapper>
    </div>
  );
}
