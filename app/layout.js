import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Helpdesk Dashboard Demo",
  description: "Made by Anas using NextJS, React, Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen">
          <nav className="flex flex-row w-full justify-between">
            <a className="text-2xl font-bold m-5 cursor-pointer" href="/">
              Helpdesk Dashboard
            </a>
            <ul className="flex flex-row m-5 gap-2">
              <li>
                <a href="/">Tickets</a>
              </li>
              <li>
                <a href="/analytics">Analytics</a>
              </li>
              <li>
                <a href="/myaccount">My Account</a>
              </li>
            </ul>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
