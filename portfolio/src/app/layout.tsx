import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huzaifa Khan — Flutter Developer",
  description:
    "Flutter and full-stack mobile engineer with 3+ years of experience. Three live apps on Google Play, building subscriptions and wallets at SporTech and a Node.js and Flutter restaurant platform at Surge.",
  keywords: ["Flutter", "Mobile Developer", "Dart", "Firebase", "Portfolio", "Huzaifa Khan", "Islamabad"],
  authors: [{ name: "Huzaifa Khan" }],
  openGraph: {
    title: "Huzaifa Khan — Flutter Developer",
    description: "Building beautiful, performant mobile experiences with Flutter.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="glow-blob-1" />
        <div className="glow-blob-2" />
        {children}
      </body>
    </html>
  );
}
