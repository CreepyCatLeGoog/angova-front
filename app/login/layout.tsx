"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AnimatedEarth from "@/components/animatedEarth";
import { Toaster } from "@/components/ui/toaster";

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
      <Toaster />
    </>
  );
}
