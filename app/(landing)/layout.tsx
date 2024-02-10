"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SessionWrapper from "@/components/SessionWrapper";
export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SessionWrapper>
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
      </SessionWrapper>
    </>
  );
}
