import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Result Check",
  description: "10th & 12th",
  openGraph: {
    title: '10th & 12th बोर्ड का रिजल्ट घोषित 2024 ...',
    description: 'जल्दी Result यहाँ देखे...',
    url: 'result-check.vercel.app',
    siteName: "Result check",
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
