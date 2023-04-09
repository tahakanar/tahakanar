import "./globals.css";

export const metadata = {
  title: "Taha Mutlu Kanar",
  description: "Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang='tr'>
      <body className=' bg-primary antialiased dark:bg-black'>{children}</body>
    </html>
  );
}
