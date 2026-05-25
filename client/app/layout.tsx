import "./globals.css";

export const metadata = {
  title: "Groot AI",
  description: "AI Incident Root Cause Analyzer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}