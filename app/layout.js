import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { ViewTransitions } from "next-view-transitions";


export const metadata = {
  title: "NR Studio",
  description: "Every Innovation deserves thoughtful Developers",
  icons: {
    icon: "/Logo.png", // ✅ correct favicon path
  },
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
