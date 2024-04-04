import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function ChooseLanguageLayout({
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
