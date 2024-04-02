import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AnimatedEarth from "@/components/animatedEarth";

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
