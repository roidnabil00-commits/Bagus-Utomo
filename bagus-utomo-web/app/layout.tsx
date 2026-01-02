import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['400', '600', '700', '800'],
  variable: '--font-jakarta',
});

// --- UPDATE BAGIAN INI ---
export const metadata: Metadata = {
  title: "Bagus Utomo Mentoring | Partner Perjalanan Bisnis Anda",
  description: "Bukan sekadar teori. Temani perjalanan bisnis Anda dari titik paling bawah bersama Bagus Utomo. Mentoring intensif 3 bulan untuk hasil nyata.",
  keywords: ["mentoring bisnis", "bisnis dari nol", "Bagus Utomo", "Xander Systems", "belajar bisnis intensif"],
  authors: [{ name: "Bagus Utomo" }],
  openGraph: {
    title: "Bagus Utomo Mentoring - Saya Pernah di Titik Paling Bawah",
    description: "Selama 1 tahun, kamu tidak akan berjalan sendirian dalam membangun bisnis.",
    url: "https://bagus-utomo-web.vercel.app", // Nanti ganti jika sudah punya domain custom
    siteName: "Bagus Utomo Mentoring",
    images: [
      {
        url: "/sukses.jpg", // Gambar ini yang akan muncul saat link di-share di WA/IG
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
    icon: "/favicon.ico", // Pastikan ada file favicon di folder public
  },
};
// --------------------------

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans antialiased bg-black text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}