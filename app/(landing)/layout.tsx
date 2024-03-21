"use server";

import { auth } from "@/auth";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SessionProvider } from "next-auth/react";
export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (session?.user)
    session.user = {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    };

  return (
    <>
      <SessionProvider session={session}>
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
      </SessionProvider>
    </>
  );
}
