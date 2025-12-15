import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <div style={{ minHeight: "100vh", paddingBottom: "64px" }}>
          {children}
        </div>

        <nav
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: "64px",
            borderTop: "1px solid #ddd",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            background: "#fff",
          }}
        >
          <Link href="/library">🌶️ Library</Link>
          <Link href="/shelf">📚 Shelf</Link>
          <Link href="/search">🔍 Search</Link>
          <Link href="/profile">👤 Profile</Link>
        </nav>
      </body>
    </html>
  );
}
