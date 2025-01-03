import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "EasyTask",
  description: "Generated by create next app",
  icons: {
    icon: '/assets/task-management-logo.png', 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full h-[100vh] items-center flex flex-col overflow-auto">
          <div className="xs:w-[94%] w-full max-w-[54rem] h-fit flex flex-col">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
