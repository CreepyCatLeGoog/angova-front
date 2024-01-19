import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AnimatedEarth from "@/components/animatedEarth";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MaxWidthWrapper>
        <section>{children}</section>
      </MaxWidthWrapper>
    </>
  );
}
