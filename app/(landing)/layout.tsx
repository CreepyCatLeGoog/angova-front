'use client';
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react"
export default function LoginLayout({
  
  children,
  
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SessionProvider>
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
        <Toaster />
      </SessionProvider>
      
    </>
  );
}
