import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

// src/app/page.tsx
import { SignOut } from "@/components/auth-component";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/auth";

export default async function LandingPage() {
  const session = await auth();
  const user = session?.user;
  return user ? (
    <div>
      <MaxWidthWrapper>
        <Navbar />
        <Hero />

        <h1>Logged in as {user.name}</h1>
        <p>Email: {user.email}</p>
        <Avatar>
          <AvatarImage
            src={user.image ?? "https://github.com/shadcn.png"}
            alt="@shadcn"
            data-testid="avatar"
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
        <Hero />
        <p>Welcome Angova</p>
      </MaxWidthWrapper>
    </div>
  );
}
