import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "600",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Project Demo Videos",
  description: "Demo videos of my projects that are not deployed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="https://res.cloudinary.com/drynqkitl/image/upload/v1740764217/logo_dvg1ol.svg" type="image/x-icon" />
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
