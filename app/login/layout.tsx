"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AnimatedEarth from "@/components/animatedEarth";

import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (session?.user) {
    session.user = {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    };
  }

  return (
    <>
      <MaxWidthWrapper>
        <SessionProvider session={session}>{children}</SessionProvider>
      </MaxWidthWrapper>
    </>
  );
}
