
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Scene from "../components/canvas/Scene";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <Scene />
        {children}
        <Footer />
      </body>
    </html>
  );
}
