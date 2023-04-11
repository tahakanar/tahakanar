import "./globals.css";

export const metadata = {
  title: {
    default: "Taha Mutlu Kanar",
    template: "%s | Taha Mutlu Kanar",
  },
  description: "Software Developer",
  openGraph: {
    title: "Taha Mutlu Kanar",
    description: "Software Developer.",
    url: "https://tahakanar.com",
    siteName: "Taha Mutlu Kanar",
    images: [
      {
        url: "https://tahakanar.com/profile.png",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    title: "Taha Kanar",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className=' bg-primary antialiased dark:bg-black'>{children}</body>
    </html>
  );
}
