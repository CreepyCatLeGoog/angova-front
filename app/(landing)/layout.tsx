"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </>
  );
}
