import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: `An'gova`,
  description: "Code de la Route",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en"  className="overflow-hidden">
      <body >{children}</body>
    </html>
  );
}
