import localFont from "next/font/local";
import "./globals.css";
import { JiraProvider } from "@/components/JiraContex";

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

export const metadata = {
  title: "Jira Copilot",
  description: "Effortless Agile Estimation using Gen-AI",
};

export default function RootLayout({ children }) {
  return (
    <JiraProvider>
    <html lang="en">
      <body
       suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </JiraProvider>
  );
}
