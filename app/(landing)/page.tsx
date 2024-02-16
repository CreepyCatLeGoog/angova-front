import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import LandingForm from "@/components/landingform"
import Navbar from "@/components/navbar"

// src/app/page.tsx
import { auth } from "@/auth";
import { SignOut } from "@/components/auth-component";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function LandingPage() {
  const session = await auth();
  const user = session?.user;
  return user ? (
    <div>
      <MaxWidthWrapper>
        <Navbar />
      

        {/* TEST PURPOSES ONLY */}
        <h1>Logged in as {user.name}</h1>
        <p>Email: {user.email}</p>
        <Avatar>
          <AvatarImage
            src={user.image ?? "https://github.com/shadcn.png"}
            alt="@shadcn"
          />
          <AvatarFallback>{user.name.substring(0, 1)}</AvatarFallback>
        </Avatar>
        <SignOut />
      </MaxWidthWrapper>
    </div>
  ) : (
    <div>
      <MaxWidthWrapper>
        <Navbar />
        <LandingForm /> 
      </MaxWidthWrapper>
    </div>
  );
}
