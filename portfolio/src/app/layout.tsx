import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huzaifa Khan — Flutter Developer",
  description:
    "Portfolio of Huzaifa Khan, a Flutter Developer specializing in cross-platform mobile applications with Firebase, REST APIs, and stunning UI/UX.",
  keywords: ["Flutter", "Mobile Developer", "Dart", "Firebase", "Portfolio", "Huzaifa Khan"],
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
