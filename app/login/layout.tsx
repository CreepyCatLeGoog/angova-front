import MaxWidthWrapper from "@/components/MaxWidthWrapper";
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
