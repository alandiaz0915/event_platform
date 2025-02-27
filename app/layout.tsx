import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import { ClerkProvider, SignInButton,
  SignedIn,
  SignedOut,
  UserButton } from "@clerk/nextjs";

import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platform for event managament",
  icons: {
    icon: '/assets/images/logo.svg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider  afterSignOutUrl="/">
      <html lang="en">
        <body className={poppins.variable}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
