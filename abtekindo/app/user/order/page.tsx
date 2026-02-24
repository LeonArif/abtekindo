import React from "react";
import Navbar from "../../components/navbar/page";

const OrderPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
      {/* Sticky Navbar */}
      <Navbar
        variant="order"
        title="ABTEKINDO"
        navLinks={[
          { label: "Produk", href: "#" },
          { label: "Layanan", href: "#" },
          { label: "Bantuan", href: "#" },
        ]}
        showSearch={true}
      />
        <main className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-40 py-6">
                {/* Breadcrumb */}
                <nav>
                    <a href="/user/home#products" className="flex items-center gap-2 mb-8 text-slate-500 hover:text-primary transition-colors cursor-pointer group">
                        <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        <span className="text-sm font-medium">Kembali ke Produk</span>
                    </a>
                </nav>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Product Showcase */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        <div className="relative aspect-[4/3] bg-white rounded-xl border border-slate-200 overflow-hidden group">
                            <img alt="Panasonic AC Main View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern white split AC unit mounted on wall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaIc4x-jvYckWigHa5jM9lUgFtg1NKgkhYcaPzCziANcpI14P5-roST0xrLNU3sqaQsXz6onB5k_ratJu2RnNUpb2Xf87218JB03dYlftJLakWUU8Ci8jXpsH3S-_u4uhm9W0lhZ4a4gfkGghBsiW6Ivef49tnQ1lMPun8htqW8jEXRAMyZO19n5s1lS3byAPq3RbcrIK3Og4CsVlb-HMKoE68xptxtkx-akkq4_o86zVhN5RByRGDZX05yEEu2xR5v7yDjUm5bw" />
                            <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Ready Stock
                            </div>
                        </div>
                        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                            <div className="min-w-[100px] aspect-square bg-white rounded-lg border-2 border-primary overflow-hidden cursor-pointer">
                                <img className="w-full h-full object-cover" data-alt="Close up of AC unit display" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7Zq5eKialPW497mRGwN9vcAdcB99DP0hLxIoL3y261FjyfP4r32NwvycYA9RO2pzrgl92lFi7JbfmT75lPrLl1KthIo21OZw5QCjQxqY2kBa9SAJ-PwFf2wSNYRMaZ9Rzu83jQWfE1lW2-J_gBwJyLanBtVVfZW5G6Q2mx8g9CPJFJ6PTfRK1EU0wAQlhaId0froH0SLzR1Bbe1M9YBQaQOeNcfrxCWm4NaZB0J0gQbcyhJQQ0oTezZMcHQiABzfFPEVnXk13SA" />
                            </div>
                            <div className="min-w-[100px] aspect-square bg-white rounded-lg border border-slate-200 overflow-hidden cursor-pointer hover:border-primary/50 transition-colors">
                                <img className="w-full h-full object-cover" data-alt="Remote control for air conditioner" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhjgW4pvQVOfO12frYsuc4qHPw0CtNCNqhXINzXmHRuXfPF2hUK80hL6RyHD4XalDvYcItcb7tCO3jZVqJqDmjFnorUu2qBzqUDCOSXhiM5pLwZCLWm2T2FWMJK0SQG6zdjCFSC_ZuaPB6w6-bCvUiSlY2n7I10i-wYZcRxv0gYByCayCc-3bswcVfcd8JK7UqPiXfYQ4L3_j7L0JRNk0N8SA3E6x8RlomOTMGuJDngyyHA6z0pxAh1GOOwpm7L7oXOR361lwVcA" />
                            </div>
                            <div className="min-w-[100px] aspect-square bg-white rounded-lg border border-slate-200 overflow-hidden cursor-pointer hover:border-primary/50 transition-colors">
                                <img className="w-full h-full object-cover" data-alt="AC outdoor unit installation view" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgrQWxR8mTr11ksmyTkrvScDMQaAtr7Zd1WMMoxGH3ZHizbiUy3Vdi6gGpm3v1M5kGLfLmLnGPvak88mkhKwiyEHP4E9msn9H2nUhkSd-6WBsGSeVlos8aIuW5JCrSCV_w_RaLvwU9tDNOrQ4Mh68vUG8QthRC4Wtn68qh0R66C4kzvFKAoA1oJ4V6nzf8w9ZYkbRCwcTlMS1dqoMHnaXq_ApYz0-GsIpfduaiNG3XvIXMu8dpVD41D1mNi8UPZdiYDQCokN_tHQ" />
                            </div>
                            <div className="min-w-[100px] aspect-square bg-white rounded-lg border border-slate-200 overflow-hidden cursor-pointer hover:border-primary/50 transition-colors">
                                <img className="w-full h-full object-cover" data-alt="Energy efficiency rating label on AC" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDshnvcreCxnkU_A76P8PUJEoBGlmNGsNcjz3Lkv44gALbOk_9nq6Pj1rUcM2zO8U5OBsmW0MG4marSObD_c2BxuAgCpc8ZefmC-FizjZe4yVcjbT8iJSZIrheQNJmuIJu_0Th_gToPc6g5hmlf3lLxxwD68po1vzHje0Q117QjCzYG3lK15ktE8baz0V0zoRpkJ605YMzlmAAu1vi7aoscPnE_NiLQVNWWSlWLljqmcEExq7bYt_61RCjml1RNOVmyMbTiMuNA9g" />
                            </div>
                        </div>
                        {/* Product Specs Summary */}
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-center text-center gap-1">
                                <span className="material-symbols-outlined text-primary">bolt</span>
                                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Kapasitas</span>
                                <span className="text-sm font-bold">1 PK (9,000 BTU)</span>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-center text-center gap-1">
                                <span className="material-symbols-outlined text-primary">verified_user</span>
                                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Garansi</span>
                                <span className="text-sm font-bold">3 Tahun Kompresor</span>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-center text-center gap-1">
                                <span className="material-symbols-outlined text-primary">eco</span>
                                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Listrik</span>
                                <span className="text-sm font-bold">800 Watt (Standard)</span>
                            </div>
                        </div>
                    </div>
                    {/* Right: Action Zone */}
                    <div className="lg:col-span-5 flex flex-col">
                        <div className="mb-2 flex items-center gap-2">
                            <div className="bg-slate-100 px-2 py-1 rounded text-[10px] font-bold text-slate-600 uppercase">Panasonic Indonesia</div>
                            <div className="flex text-amber-400">
                                <span className="material-symbols-outlined text-sm">star</span>
                                <span className="material-symbols-outlined text-sm">star</span>
                                <span className="material-symbols-outlined text-sm">star</span>
                                <span className="material-symbols-outlined text-sm">star</span>
                                <span className="material-symbols-outlined text-sm">star_half</span>
                            </div>
                            <span className="text-xs text-slate-400">(4.8/5)</span>
                        </div>
                        <h1 className="text-3xl font-black text-primary leading-tight mb-2">Panasonic Split AC Standard 1PK</h1>
                        <p className="text-slate-500 text-sm mb-6">Model: CS-PN9WKJ - Garansi Resmi Panasonic Indonesia. Unit original, efisien, dan tahan lama untuk kenyamanan keluarga Anda.</p>
                        <div className="mb-8">
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-4">Pilih Opsi Pembelian</p>
                            <div className="flex flex-col gap-4">
                                {/* Option: Unit Only */}
                                <label className="relative flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-xl cursor-pointer hover:border-slate-300 transition-all group">
                                    <input className="mt-1 text-primary focus:ring-primary h-4 w-4" name="purchase_option" type="radio" />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="font-bold text-slate-900 group-hover:text-primary">Produk Saja</span>
                                            <span className="font-black text-slate-900">Rp 3.450.000</span>
                                        </div>
                                        <p className="text-xs text-slate-500">Hanya unit AC (indoor + outdoor) tanpa jasa pemasangan dan material pendukung.</p>
                                    </div>
                                </label>
                                {/* Option: Unit + Installation */}
                                <label className="relative flex items-start gap-4 p-4 bg-primary/5 border-2 border-primary rounded-xl cursor-pointer transition-all">
                                    <div className="absolute -top-3 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm">Paling Populer</div>
                                    <input checked className="mt-1 text-primary focus:ring-primary h-4 w-4" name="purchase_option" type="radio" />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="font-bold text-primary">Paket Produk + Pemasangan</span>
                                            <span className="font-black text-primary">Rp 4.150.000</span>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-xs text-slate-600 font-medium">Sudah termasuk:</p>
                                            <ul className="grid grid-cols-1 gap-1">
                                                <li className="flex items-center gap-2 text-[11px] text-slate-600">
                                                    <span className="material-symbols-outlined text-[14px] text-green-600">check_circle</span>
                                                    Jasa Pasang Teknisi Profesional
                                                </li>
                                                <li className="flex items-center gap-2 text-[11px] text-slate-600">
                                                    <span className="material-symbols-outlined text-[14px] text-green-600">check_circle</span>
                                                    Pipa AC 3 Meter (High Quality)
                                                </li>
                                                <li className="flex items-center gap-2 text-[11px] text-slate-600">
                                                    <span className="material-symbols-outlined text-[14px] text-green-600">check_circle</span>
                                                    Kabel Listrik 3 Meter &amp; Bracket Outdoor
                                                </li>
                                                <li className="flex items-center gap-2 text-[11px] text-slate-600">
                                                    <span className="material-symbols-outlined text-[14px] text-green-600">check_circle</span>
                                                    Garansi Pemasangan 30 Hari
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        {/* Price Summary & CTA */}
                        <div className="mt-auto bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <div className="flex items-end justify-between mb-6">
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase">Total Pembayaran</p>
                                    <p className="text-3xl font-black text-slate-900 tracking-tight">Rp 4.150.000</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] text-green-600 font-bold bg-green-100 px-2 py-0.5 rounded inline-block">Free Delivery</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <button className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-primary/95 transition-all shadow-lg flex items-center justify-center gap-2">
                                    Pesan Sekarang
                                    <span className="material-symbols-outlined">shopping_cart</span>
                                </button>
                                <div className="flex items-center justify-center gap-6">
                                    <div className="flex items-center gap-1.5 grayscale opacity-60">
                                        <span className="material-symbols-outlined text-sm">verified</span>
                                        <span className="text-[10px] font-bold">100% Original</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 grayscale opacity-60">
                                        <span className="material-symbols-outlined text-sm">security</span>
                                        <span className="text-[10px] font-bold">Secure Payment</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Trust Section */}
                <section className="mt-20 border-t border-slate-200 pt-10">
                    <h3 className="text-xl font-bold text-primary mb-8 text-center">Kenapa Belanja di AC Store?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined">engineering</span>
                            </div>
                            <h4 className="font-bold text-sm mb-1">Teknisi Sertifikasi</h4>
                            <p className="text-xs text-slate-500">Semua teknisi kami memiliki sertifikasi resmi dari brand.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined">local_shipping</span>
                            </div>
                            <h4 className="font-bold text-sm mb-1">Pengiriman Cepat</h4>
                            <p className="text-xs text-slate-500">Pengiriman area Jakarta &amp; Tangerang dalam 24 jam.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined">payments</span>
                            </div>
                            <h4 className="font-bold text-sm mb-1">Cicilan 0%</h4>
                            <p className="text-xs text-slate-500">Tersedia cicilan 0% hingga 12 bulan dari berbagai bank.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined">support_agent</span>
                            </div>
                            <h4 className="font-bold text-sm mb-1">Support 24/7</h4>
                            <p className="text-xs text-slate-500">Bantuan teknis dan pemesanan tersedia setiap saat.</p>
                        </div>
                    </div>
                </section>
            </main>
            {/* Floating WhatsApp Button */}
            <a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group flex items-center gap-2" href="#">
                <span className="material-symbols-outlined text-2xl">chat</span>
                <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 font-bold text-sm whitespace-nowrap">Tanya CS</span>
            </a>
            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-12 px-4 md:px-10 lg:px-40 mt-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <div className="flex items-center gap-3 text-white mb-6">
                            <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-sm">ac_unit</span>
                            </div>
                            <h2 className="text-lg font-bold leading-tight">AC Store</h2>
                        </div>
                        <p className="text-sm leading-relaxed">Spesialis pendingin ruangan terpercaya sejak 2010. Melayani penjualan, pemasangan, dan perawatan AC untuk hunian dan komersial.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">Navigasi Cepat</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a className="hover:text-white transition-colors" href="#">Semua Produk</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Paket Pemasangan</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Layanan Service</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Tentang Kami</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">Hubungi Kami</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">location_on</span>
                                Jl. Sudirman No. 123, Jakarta Selatan
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">call</span>
                                (021) 555-0123
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-slate-800 text-xs text-center">
                    © 2026 AC Store Indonesia. Seluruh hak cipta dilindungi.
                </div>
            </footer>
        </div>
    );
};

export default OrderPage;