"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { 
  Leaf, 
  ChevronDown, 
  XCircle, 
  ZapOff, 
  Tablets as Road, // Menggunakan icon Road alternatif
  WifiOff, 
  Quote, 
  RefreshCw, 
  Check, 
  AlertTriangle, 
  DollarSign, 
  Shield, 
  HelpCircle, 
  UserX, 
  Compass, 
  ShieldCheck, 
  HeartHandshake, 
  Instagram, 
  MessageCircle, 
  Mail, 
  ArrowUpRight 
} from 'lucide-react';

export default function Home() {
  // Inisialisasi Lucide Icons (Opsional di React jika pakai komponen langsung)
  return (
    <main className="antialiased overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-9 md:h-9 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <Leaf className="text-black w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-lg md:text-xl font-black tracking-tighter uppercase italic">BAGUS UTOMO</span>
          </div>
          <a href="#daftar" className="bg-gradient-to-br from-emerald-400 to-emerald-600 text-black px-4 md:px-8 py-2.5 md:py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] hover:scale-105 transition active:scale-95 shadow-xl shadow-emerald-500/10">
            GABUNG SEKARANG
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-44 pb-12 md:pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div>
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-[#10B981] text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 md:mb-10">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Partner Perjalanan Bisnis Anda
          </div>
          <h1 className="text-4xl md:text-8xl font-black leading-[1] md:leading-[0.9] tracking-tighter mb-8 md:mb-10 uppercase italic">
            SAYA PERNAH HIDUP <br /> DI <span className="text-[#10B981] [text-shadow:0_0_20px_rgba(16,185,129,0.4)]">TITIK PALING BAWAH.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-10 md:mb-12 italic">
            "Dan karena itu, saya mengerti perjuanganmu."
          </p>
          <a href="#cerita" className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-white/10 transition">
            Dengarkan Cerita Saya <ChevronDown className="w-5 h-5" />
          </a>
        </div>
        <div className="relative group h-[400px] md:h-[600px]">
          <div className="bg-[#0A0A0A] border border-[#1A1A1A] h-full border-emerald-500/20 relative rounded-[40px] overflow-hidden transition-all duration-500 hover:border-emerald-500">
            <Image 
              src="/baguskecil.png" 
              alt="Bagus Utomo" 
              priority
              fill
              className="object-cover object-[center_20%] transition duration-700 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-[40px]"></div>
          </div>
        </div>
      </section>

      {/* Cerita Section */}
      <section id="cerita" className="py-12 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0A0A0A] border border-[#1A1A1A] md:col-span-2 relative min-h-[400px] md:min-h-[500px] group rounded-[32px] overflow-hidden">
            <Image src="/lulussd.jpg" alt="Lulus SD" fill className="object-cover object-top opacity-80 group-hover:scale-105 transition duration-1000" />
            <div className="relative p-8 md:p-12 h-full flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tighter text-white">Hanya Anak Lulusan SD</h3>
              <p className="text-zinc-200 text-base md:text-lg leading-relaxed max-w-xl font-medium">
                Saya hanyalah anak lulusan SD. Tidak punya apa-apa. Tidak punya siapa-siapa. Bahkan untuk bermimpi pun, hidup saya dulu terasa terlalu berat.
              </p>
            </div>
          </div>

          <div className="bg-zinc-950 border border-[#1A1A1A] p-8 md:p-10 flex flex-col justify-between rounded-[32px]">
            <XCircle className="text-[#10B981] w-10 h-10 md:w-12 md:h-12" />
            <div>
              <h4 className="text-xl md:text-2xl font-black uppercase mt-8 md:mt-0 mb-4 tracking-tighter leading-tight">Tidak Bisa Lanjut Sekolah</h4>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                Setelah lulus SD, hidup langsung berubah. Saya tidak bisa lanjut sekolah. Bukan karena tidak mau, tapi karena tidak mampu.
              </p>
            </div>
          </div>

          {/* Sisa konten lainnya di-porting dengan pola yang sama... */}
          {/* Untuk mempersingkat, saya fokus pada bagian yang memerlukan komponen khusus */}
          
          <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-8 md:p-10 text-black flex flex-col justify-center min-h-[200px] md:min-h-0 rounded-[32px]">
            <p className="text-2xl md:text-3xl font-black italic tracking-tighter leading-none mb-6 uppercase">
              "Hidup tidak peduli kita siap atau tidak."
            </p>
            <p className="text-black/70 font-bold text-[10px] md:text-sm uppercase tracking-widest leading-none">Pelajaran Berharga #01</p>
          </div>

          <div className="bg-[#0A0A0A] border border-[#1A1A1A] md:col-span-2 relative min-h-[350px] md:min-h-[400px] group rounded-[32px] overflow-hidden">
            <Image src="/berkebun.jpg" alt="Berkebun" fill className="object-cover object-[center_30%] opacity-70 group-hover:scale-105 transition duration-1000" />
            <div className="relative p-8 md:p-12 h-full flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <h4 className="text-2xl md:text-3xl font-black uppercase mb-4 tracking-tighter text-white">Kerja Serabutan</h4>
              <p className="text-zinc-200 italic text-lg md:text-xl leading-relaxed font-medium">
                "Membersihkan kebun orang. Mengandalkan tenaga. Pulang capek. Besok ulang lagi. Seperti tidak ada jalan keluar."
              </p>
            </div>
          </div>

          <div className="bg-zinc-950 border border-[#1A1A1A] md:col-span-2 p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center rounded-[32px]">
            <div className="space-y-6">
              <h4 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.8]">Jauh dari Nyaman</h4>
              <div className="space-y-3">
                 <p className="text-[#10B981] font-bold text-sm md:text-base uppercase tracking-widest flex items-center gap-3"><ZapOff className="w-5 h-5" /> Tidak ada listrik.</p>
                 <p className="text-[#10B981] font-bold text-sm md:text-base uppercase tracking-widest flex items-center gap-3"><Road className="w-5 h-5" /> Tidak ada aspal.</p>
                 <p className="text-[#10B981] font-bold text-sm md:text-base uppercase tracking-widest flex items-center gap-3"><WifiOff className="w-5 h-5" /> Tidak ada jaringan.</p>
              </div>
            </div>
            <div className="h-48 md:h-64 rounded-[32px] overflow-hidden border-2 border-white/10 relative">
              <Image src="/b612bagus.jpg" alt="Bagus" fill className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-emerald-500/30 p-8 md:p-10 flex flex-col justify-center rounded-[32px]">
            <div className="p-6 md:p-8 bg-emerald-500/10 rounded-[32px] border border-emerald-500/20 text-center relative">
              <Quote className="text-[#10B981] w-8 h-8 md:w-10 md:h-10 mx-auto mb-6 opacity-40 absolute top-4 left-4" />
              <p className="text-[#10B981] font-black italic text-xl md:text-2xl leading-tight uppercase tracking-tight py-4 relative z-10">
                “SAYA INGIN HIDUP BERUBAH.”
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 border border-[#1A1A1A] md:col-span-3 p-8 md:p-12 rounded-[32px]">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="space-y-8 md:space-y-10">
                <div className="space-y-4">
                  <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 italic text-[#10B981]">Usaha Warung 24 Jam</h4>
                  <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-medium">
                    Saya coba usaha kecil-kecilan. Warung buka 24 jam. Kerja keras tanpa libur. Tapi hasilnya? Masih begitu-begitu saja.
                  </p>
                </div>
                <div className="p-8 md:p-10 bg-[#050505] rounded-[2.5rem] md:rounded-[3rem] border-l-8 border-emerald-500 shadow-2xl shadow-emerald-900/20">
                  <p className="text-[#10B981] font-black text-xl md:text-3xl italic tracking-tight leading-tight uppercase mb-4">
                    "MENANGIS DALAM DIAM"
                  </p>
                  <p className="text-white font-bold text-base md:text-lg leading-relaxed">
                    Karena saya sadar: bukan saya yang kurang usaha, tapi saya yang tidak tahu CARANYA.
                  </p>
                </div>
              </div>
              <div className="h-[300px] md:h-[500px] rounded-[3rem] overflow-hidden group relative border-2 border-white/5 mt-6 md:mt-0">
                <Image src="/unnamed(3).jpg" alt="Warung" fill className="object-cover object-top scale-105 group-hover:scale-100 transition duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950 border border-emerald-500/20 p-8 md:p-12 flex flex-col justify-between rounded-[32px]">
            <RefreshCw className="text-[#10B981] w-12 h-12 md:w-14 md:h-14" />
            <div>
              <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6">Belajar Sendiri</h4>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 font-bold">Jatuh. Bangun. Salah. Ulangi.</p>
              <p className="text-white font-black italic uppercase tracking-widest text-[10px] md:text-sm leading-relaxed bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20">"Semua saya bayar dengan waktu dan luka."</p>
            </div>
          </div>

          <div className="bg-[#0A0A0A] border border-[#1A1A1A] md:col-span-2 relative min-h-[350px] md:min-h-[450px] group rounded-[32px] overflow-hidden">
            <Image src="/brosur sb30.jpg" alt="Brosur" fill className="object-cover object-center opacity-80 transition duration-700 group-hover:scale-105" />
            <div className="relative p-8 md:p-12 h-full flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <h4 className="text-3xl md:text-4xl font-black uppercase mb-6 tracking-tighter text-white">Hidup Mulai Berubah</h4>
              <p className="text-zinc-100 text-lg md:text-xl leading-relaxed max-w-2xl mb-8 font-medium">
                Orderan masuk. Kepercayaan diri tumbuh. Saya mulai paham arah. Bukan karena saya pintar, tapi karena saya tidak berhenti melangkah.
              </p>
            </div>
          </div>

          {/* Section Bisnis Saya Tumbuh */}
          <div className="bg-emerald-600 md:col-span-3 p-8 md:p-12 text-black relative overflow-hidden rounded-[32px]">
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center relative z-10">
              <div className="md:w-2/3">
                <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-6 md:mb-8 italic text-white">Bisnis Saya Tumbuh</h4>
                <p className="text-black font-extrabold text-xl md:text-2xl leading-relaxed italic mb-0 md:mb-10">
                  "Ada sistem. Ada alur. Ada harapan. Dan di titik ini, saya terdiam cukup lama… Karena saya sadar: banyak orang seperti saya dulu, berjuang sendirian."
                </p>
              </div>
              <div className="w-full md:w-1/3 aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-black/20 shadow-2xl relative">
                <Image src="/nateshmall.jpg" alt="Bisnis" fill className="object-cover object-top" />
              </div>
            </div>
          </div>

          <div className="bg-[#080808] border border-[#1A1A1A] md:col-span-3 p-8 md:p-12 flex flex-col md:flex-row gap-10 md:gap-16 items-center rounded-[32px]">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-[#10B981]">Mimpi Menjadi Nyata</h4>
              <p className="text-zinc-300 text-xl md:text-2xl font-bold italic leading-relaxed">
                "Hal-hal yang dulu terasa mustahil, pelan-pelan jadi nyata. Bukan hidup mewah. Tapi hidup yang lebih tenang. Lebih terarah. Lebih bermakna."
              </p>
            </div>
            <div className="w-full md:w-1/2 h-[300px] md:h-[400px] rounded-[3rem] overflow-hidden border-2 border-white/5 order-1 md:order-2 bg-emerald-900/20 flex items-end justify-center relative">
              <Image src="mobilpenuhpaket.jpg" alt="Sukses" width={400} height={500} className="w-auto h-[90%] object-contain relative z-10 drop-shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Alasan Section */}
      <section className="py-20 md:py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-8 md:mb-12 italic">INI ALASAN <br /> <span className="text-emerald-600">SAYA.</span></h2>
            <p className="text-gray-500 text-2xl md:text-3xl font-black uppercase tracking-tight mb-8 md:mb-12 italic leading-none">SAYA MEMBUKA MENTORING 3 BULAN</p>
            <p className="text-xl md:text-2xl font-bold leading-relaxed mb-10 md:mb-12">Saya tidak sedang jual mimpi. Saya hanya ingin:</p>
            <div className="space-y-4 md:space-y-8">
              {[
                "Kamu tidak mengulang luka yang sama",
                "Kamu tidak jalan sendirian",
                "Punya tempat bertanya dan bersandar"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 md:gap-6 p-5 md:p-6 bg-zinc-50 rounded-3xl border border-zinc-200">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-200 flex-shrink-0">
                    <Check className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <span className="text-base md:text-xl font-black uppercase tracking-tight">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0A0A0A] border border-zinc-200 h-[400px] md:h-[700px] relative group mt-10 md:mt-0 rounded-[32px] overflow-hidden">
            <Image src="/sukses.jpg" alt="Sukses" fill className="object-cover object-top transition duration-700 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Mentoring Style Section */}
      <section className="py-20 md:py-32 px-6 bg-[#050505]">
        <div className="max-w-5xl mx-auto text-center mb-16 md:mb-24">
          <h3 className="text-4xl md:text-8xl font-black uppercase tracking-tighter mb-6 md:mb-8 italic leading-[0.9] text-white">SAYA TIDAK MENGAJARI <br /> DARI <span className="text-[#10B981] [text-shadow:0_0_20px_rgba(16,185,129,0.4)]">ATAS</span></h3>
          <p className="text-zinc-500 text-lg md:text-2xl font-black uppercase tracking-widest italic leading-none">"SAYA MENEMANI DARI SAMPING"</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: AlertTriangle, label: "Pengalaman Gagal" },
            { icon: DollarSign, label: "Kesalahan Mahal" },
            { icon: Shield, label: "Jalan Lebih Aman" },
            { icon: HelpCircle, label: "Arah Saat Bingung" }
          ].map((item, i) => (
            <div key={i} className="bg-zinc-900 border border-emerald-500/20 p-10 md:p-12 hover:bg-emerald-600 group transition duration-500 text-center rounded-[32px]">
              <item.icon className="text-[#10B981] group-hover:text-black w-12 h-12 md:w-14 md:h-14 mb-8 mx-auto transition" />
              <p className="text-white group-hover:text-black font-black uppercase tracking-tighter text-xl md:text-2xl italic leading-none transition">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- START SECTION INSPIRASI HARIAN --- */}
      <section className="py-20 md:py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto mb-12 md:mb-16 text-center">
             <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic text-white mb-4">INSPIRASI <span className="text-[#10B981]">HARIAN</span></h2>
             <p className="text-zinc-500 text-sm md:text-xl font-bold tracking-widest uppercase">Update Terbaru & Cerita Pendek</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* Item 1 */}
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] aspect-[9/16] relative group cursor-pointer rounded-[32px] overflow-hidden transition-all duration-500 hover:border-emerald-500/50">
                <a href="https://www.instagram.com/reel/Ct_7x7WLSrr/" target="_blank" className="block h-full w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
                    <Image src="/baguskecil.png" alt="Inspirasi 1" fill className="w-full h-full object-cover object-[center_20%] opacity-80 group-hover:opacity-100 transition duration-500" />
                    <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition duration-500">
                            <Instagram className="text-white w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <h4 className="text-white font-bold text-sm md:text-base leading-tight mb-2 line-clamp-2">Perjalanan dari Nol: Simak Cerita Lengkapnya di Instagram</h4>
                        <p className="text-[#10B981] text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">Klik Untuk Tonton</p>
                    </div>
                </a>
            </div>

            {/* Item 2 */}
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] aspect-[9/16] relative group cursor-pointer rounded-[32px] overflow-hidden transition-all duration-500 hover:border-emerald-500/50">
                <a href="https://www.instagram.com/reel/DS-BRZQAWlu/" target="_blank" className="block h-full w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
                    <Image src="/sukses.jpg" alt="Inspirasi 2" fill className="w-full h-full object-cover object-[center_20%] opacity-80 group-hover:opacity-100 transition duration-500" />
                    <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition duration-500">
                            <Instagram className="text-white w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <h4 className="text-white font-bold text-sm md:text-base leading-tight mb-2 line-clamp-2">Mentalitas "Orang Bawah" yang Justru Bikin Sukses</h4>
                        <p className="text-[#10B981] text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">Klik Untuk Tonton</p>
                    </div>
                </a>
            </div>

            {/* Item 3 */}
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] aspect-[9/16] relative group cursor-pointer rounded-[32px] overflow-hidden transition-all duration-500 hover:border-emerald-500/50">
                <a href="https://www.instagram.com/reel/DS4eJU5gf-4/" target="_blank" className="block h-full w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
                    <Image src="/nateshmall.jpg" alt="Inspirasi 3" fill className="w-full h-full object-cover object-[center_20%] opacity-80 group-hover:opacity-100 transition duration-500" />
                    <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition duration-500">
                            <Instagram className="text-white w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <h4 className="text-white font-bold text-sm md:text-base leading-tight mb-2 line-clamp-2">Strategi Menghadapi Masalah dalam Membangun Bisnis</h4>
                        <p className="text-[#10B981] text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">Klik Untuk Tonton</p>
                    </div>
                </a>
            </div>

            {/* Item 4 */}
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] aspect-[9/16] relative group cursor-pointer rounded-[32px] overflow-hidden transition-all duration-500 hover:border-emerald-500/50">
                <a href="https://www.instagram.com/p/DL9-EVxhCAB/" target="_blank" className="block h-full w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
                    <Image src="/baguskeluarga.png" alt="Inspirasi 4" fill className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition duration-500" />
                    <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition duration-500">
                            <Instagram className="text-white w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <h4 className="text-white font-bold text-sm md:text-base leading-tight mb-2 line-clamp-2">Kunci Konsistensi: Hasil Tidak Akan Mengkhianati Proses</h4>
                        <p className="text-[#10B981] text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">Klik Untuk Lihat</p>
                    </div>
                </a>
            </div>

        </div>
      </section>
      {/* --- END SECTION INSPIRASI HARIAN --- */}

      {/* CTA Section */}
      <section id="daftar" className="py-24 md:py-40 px-6 bg-[#050505] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[1000px] bg-emerald-500/5 rounded-full blur-[200px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16 md:mb-24">
            <p className="text-xl md:text-2xl font-black uppercase italic tracking-widest mb-6 md:mb-8 text-[#10B981]">JIKA KAMU MERASA</p>
            <h2 className="text-4xl md:text-[10rem] font-black uppercase tracking-tighter italic leading-[1] md:leading-[0.8] mb-12 md:mb-16 text-white relative inline-block">
              <span className="relative z-10">“INI CERITA HIDUP SAYA”</span>
              <div className="absolute bottom-2 md:bottom-4 left-0 w-full h-4 md:h-8 bg-emerald-500/40 -skew-x-12 -z-10"></div>
            </h2>
            <p className="text-zinc-400 text-xl md:text-3xl font-black uppercase tracking-tight">Maka mungkin, mentoring ini memang untuk kamu.</p>
          </div>
          
          <div className="inline-block p-2 bg-emerald-500/20 rounded-[2.5rem] md:rounded-[3rem] backdrop-blur-xl w-full md:w-auto">
            <a href="https://wa.me/6282256123667?text=Halo%20saya%20mau%20daftar%20mentoring%203%20bulan%20intensif" 
               className="block px-6 md:px-16 py-8 md:py-10 bg-gradient-to-br from-emerald-400 to-emerald-600 text-[#050505] font-black text-xl md:text-5xl rounded-[2rem] md:rounded-[2.5rem] hover:scale-105 transition shadow-[0_0_80px_rgba(16,185,129,0.4)] uppercase italic tracking-tighter relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-4 md:gap-6 justify-center">
                DAFTAR MENTORING SEKARANG <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 group-hover:translate-x-2 group-hover:-translate-y-2 transition" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Connect */}
      <footer className="py-16 md:py-24 bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic text-white mb-10 md:mb-12">Let&apos;s <span className="text-emerald-500">Connect</span></h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {/* TikTok Custom SVG */}
            <a href="https://www.tiktok.com/@muhamadbagusutomo" target="_blank" className="group flex flex-col items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-900 border border-[#1A1A1A] rounded-[32px] flex items-center justify-center group-hover:bg-[#000000] group-hover:border-[#FE2C55] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-[#FE2C55] transition"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </div>
              <span className="text-zinc-500 font-bold uppercase tracking-widest text-[9px] md:text-xs group-hover:text-white transition">TikTok</span>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/muhamad.bagus.utomo/" target="_blank" className="group flex flex-col items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-900 border border-[#1A1A1A] rounded-[32px] flex items-center justify-center group-hover:bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] group-hover:border-transparent transition-all duration-300">
                <Instagram className="w-7 h-7 md:w-8 md:h-8 text-zinc-400 group-hover:text-white transition" />
              </div>
              <span className="text-zinc-500 font-bold uppercase tracking-widest text-[9px] md:text-xs group-hover:text-white transition">Instagram</span>
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/6282256123667" target="_blank" className="group flex flex-col items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-900 border border-[#1A1A1A] rounded-[32px] flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-all duration-300">
                <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-zinc-400 group-hover:text-white transition" />
              </div>
              <span className="text-zinc-500 font-bold uppercase tracking-widest text-[9px] md:text-xs group-hover:text-white transition">WhatsApp</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}