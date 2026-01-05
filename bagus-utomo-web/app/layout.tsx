import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script"; // Masalah 1: Tambahkan import ini
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['400', '600', '700', '800'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: "Bagus Utomo Mentoring | Partner Perjalanan Bisnis Anda",
  description: "Bukan sekadar teori. Temani perjalanan bisnis Anda dari titik paling bawah bersama Bagus Utomo. Mentoring intensif 3 bulan untuk hasil nyata.",
  keywords: ["mentoring bisnis", "bisnis dari nol", "Bagus Utomo", "Xander Systems", "belajar bisnis intensif"],
  authors: [{ name: "Bagus Utomo" }],
  openGraph: {
    title: "Bagus Utomo Mentoring - Saya Pernah di Titik Paling Bawah",
    description: "Selama 1 tahun, kamu tidak akan berjalan sendirian dalam membangun bisnis.",
    url: "https://bagus-utomo-web.vercel.app",
    siteName: "Bagus Utomo Mentoring",
    images: [
      {
        url: "/sukses.jpg",
        width: 1200,
        height: 630,
        alt: "Bagus Utomo Mentoring",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bagus Utomo Mentoring",
    description: "Mentoring bisnis nyata dari praktisi yang merangkak dari bawah.",
    images: ["/sukses.jpg"],
  },
  icons: {
    icon: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      {/* Masalah 2: Tag <head> manual dihapus, Script dipindah ke dalam body */}
      <body className={`${jakarta.variable} font-sans antialiased bg-black text-white overflow-x-hidden`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        
        {children}
      </body>
    </html>
  );
}