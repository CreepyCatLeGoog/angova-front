import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MaxWidthWrapper>
      <section>{children}</section>
    </MaxWidthWrapper>
  );
}
