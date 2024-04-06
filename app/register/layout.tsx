import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function SignupLayout({
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
