"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faStar, faArrowRight, faCheckCircle, faLocationDot, faPhone, faEnvelope, faShield, faBolt, faLeaf, faUserCheck, faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../../firebase";
import { useRouter } from "next/navigation";

const HomePage: React.FC = () => {
    const [barang, setBarang] = useState<any[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchBarang = async () => {
            try {
                const db = getFirestore(app);
                const querySnapshot = await getDocs(collection(db, "barang"));
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setBarang(data);
            } catch (error) {
                // Handle error
            }
        };
        fetchBarang();
    }, []);

    return (
        <div className="bg-background-light text-slate-900 font-display">
            <Navbar />
            <section className="relative h-[400px] sm:h-[500px] md:h-[650px] flex items-center overflow-hidden bg-[#003366]">
                <div className="absolute inset-0 z-0">
                    <img alt="Modern Luxury Interior with AC" className="w-full h-full object-cover" data-alt="Modern high-end living room with sleek air conditioning unit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWOi4-LO5WctUUwOpb3ZSqiLLelc3Su5VPPV16VBelniW2gQlo_O6NJbuG5nZbLKluTEGg-iu2lmj4ix54eIDYU9IaSyVE2nzOXZLgQomyKnr1JU30r4lIF_qtBKBf2AMHFysRi2r8A3ZKuBJufcOf1brje6RTRprw551RI9r2_tOIrsIJHwstRwM2LxBKFNHQj-Sdj-UttYLHUzOmnarcIft2ji2hIYX7IQWj5BmIE9AuLZZsQIr1LcXGr0avRHG_CmtDGYuRtA" />
                    <div className="absolute inset-0"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg">
                    <div className="max-w-2xl text-white">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6">
                            <FontAwesomeIcon icon={faShield} className= "text-sm" />
                            <span className="text-xs font-bold uppercase tracking-wider">Authorized HVAC Solutions</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                            Solusi Tata Udara <br /><span className="text-[#a5c9ea]">Profesional &amp; Terpercaya</span>
                        </h1>
                        <p className="text-base sm:text-lg text-slate-100 mb-10 leading-relaxed font-light">
                            Bergerak di bidang AC, supply, pemasangan, dan perbaikan AC split/package dan water chiller untuk berbagai merek ternama dengan standar kualitas industri tertinggi.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    className="bg-white text-[#003366] border-[1.5px] border-[#003366] px-8 py-4 rounded-xl font-bold text-center hover:bg-slate-100 transition-all shadow-xl flex items-center justify-center gap-2"
                                    href="#products"
                                >
                                    Explore Products
                                    <FontAwesomeIcon icon={faArrowRight} style={{ color: '#003366' }} className="text-lg" />
                                </a>
                                <a
                                    className="bg-[#003366] border border-[#003366] text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-opacity-90 transition-all"
                                    href="#contact"
                                >
                                    Contact Expert
                                </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Section */}
            <section className="py-12 sm:py-24 bg-white" id="products">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
                        <div className="max-w-xl">
                            <h2 className="text-primary text-sm font-black uppercase tracking-[0.2em] mb-3">Our Catalogue</h2>
                            <h3 className="text-4xl font-bold text-slate-900 leading-tight">Featured AC Units</h3>
                        </div>
                        <div className="relative w-full md:w-96 mt-4 md:mt-0">
                            <input className="w-full pl-12 pr-4 py-4 bg-slate-100 border-none rounded-2xl focus:ring-2 text-[#003366]" placeholder="Search brand or model..." type="text" />
                            <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#7bb6e9' }} />
                        </div>
                    </div>
                    {/* Filters */}
                    <div className="flex flex-col gap-6 mb-8 sm:mb-12">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest w-full md:w-auto mr-4">Type:</span>
                            <button className="px-5 py-2 rounded-full text-white text-sm font-semibold transition-all bg-[#003366]">All Types</button>
                            <button className="px-5 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm font-semibold transition-all">Wall Mounted</button>
                            <button className="px-5 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm font-semibold transition-all">Cassette</button>
                            <button className="px-5 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm font-semibold transition-all">Floor Standing</button>
                            <button className="px-5 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm font-semibold transition-all">Ducting</button>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest w-full md:w-auto mr-4">Brand:</span>
                            <button className="px-5 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm font-semibold transition-all">Daikin</button>
                            <button className="px-5 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm font-semibold transition-all">Panasonic</button>
                            <button className="px-5 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm font-semibold transition-all">Gree</button>
                            <button className="px-5 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm font-semibold transition-all">Mitsubishi</button>
                        </div>
                    </div>
                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {barang.length === 0 ? (
                            <div className="col-span-4 text-center text-slate-400 py-12">Tidak ada barang tersedia.</div>
                        ) : (
                            barang.map((item) => (
                                <div
                                    key={item.id}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
                                    onClick={() => router.push(`/user/order?id=${item.id}`)}
                                >
                                    <div className="aspect-square bg-slate-50 relative p-8 overflow-hidden">
                                        <img
                                            alt={item.nama || "Barang"}
                                            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                                            src={item.gambar || "https://via.placeholder.com/300x300?text=Barang"}
                                        />
                                        {item.label && (
                                            <span className="absolute top-4 left-4 text-white text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider bg-[#003366]">
                                                {item.label}
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-xs font-bold text-primary uppercase">{item.brand || "Brand"}</h4>
                                            <div className="flex items-center gap-1" style={{ color: '#facc15' }}>
                                                <FontAwesomeIcon icon={faStar} className="text-xs" />
                                                <span className="text-xs font-bold text-slate-500">{item.rating || "-"}</span>
                                            </div>
                                        </div>
                                        <h5 className="text-lg font-bold text-slate-900 mb-4">{item.nama || item.model || "Nama Barang"}</h5>
                                        <div className="flex items-center justify-between mt-auto">
                                            <span className="text-xl font-extrabold text-primary">{item.harga ? `Rp ${item.harga.toLocaleString()}` : "Harga tidak tersedia"}</span>
                                            <button className="size-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#003366] hover:text-white transition-all border-[1.5px] border-[#003366]">
                                                <FontAwesomeIcon icon={faArrowRight} className="text-lg" style={{ color: '#003366' }} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
            {/* Footer / Contact Section */}
            <footer className="pt-24 pb-12 bg-[#003366] text-white" id="contact">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
                        {/* Info Section */}
                        <div>
                            <div className="flex items-center gap-3 mb-10">
                                <div className="bg-white p-2 rounded-xl" style={{ color: '#fff' }}>
                                    <FontAwesomeIcon icon={faSnowflake} className="text-3xl" />
                                </div>
                                <div>
                                    <h2 className="font-extrabold text-2xl tracking-tight leading-none" style={{ color: '#fff' }}>ABTEKINDO</h2>
                                    <p className="text-[10px] text-[#7bb6e9] font-bold tracking-[0.3em] uppercase">PRIMA LESTARI</p>
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold mb-10 leading-snug" style={{ color: '#fff' }}>Butuh konsultasi untuk sistem tata udara Anda?</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="size-12 rounded-full bg-[#e3f0fa] flex items-center justify-center shrink-0">
                                        <FontAwesomeIcon icon={faLocationDot} className="text-blue-200 text-xl" style={{ color: '#a5c9ea' }} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest mb-1 text-[#a5c9ea]">OUR OFFICE</p>
                                        <p className="leading-relaxed text-[#a5c9ea] font-normal">Kawasan Industri &amp; Pergudangan, Jl. Raya Utama No. 88, Jakarta Barat, DKI Jakarta.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="size-12 rounded-full bg-[#e3f0fa] flex items-center justify-center shrink-0">
                                        <FontAwesomeIcon icon={faPhone} className="text-blue-200 text-xl" style={{ color: '#a5c9ea' }} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest mb-1 text-[#a5c9ea]">CONTACT DETAILS</p>
                                        <p className="text-[#a5c9ea]">(021) 5566-7788</p>
                                        <p className="text-[#a5c9ea]">info@abtekindo.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="size-12 rounded-full bg-[#e3f0fa] flex items-center justify-center shrink-0">
                                        <FontAwesomeIcon icon={faCircleNodes} className="text-blue-200 text-xl" style={{ color: '#a5c9ea' }} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest mb-1 text-[#a5c9ea]">CONNECT WITH US</p>
                                        <div className="flex gap-4 mt-2 items-center">
                                            <a className="hover:text-blue-300 transition-colors text-[#a5c9ea]" href="#">WhatsApp</a>
                                            <span className="text-slate-400">•</span>
                                            <a className="hover:text-blue-300 transition-colors text-[#a5c9ea]" href="#">Instagram</a>
                                            <span className="text-slate-400">•</span>
                                            <a className="hover:text-blue-300 transition-colors text-[#a5c9ea]" href="#">LinkedIn</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Form Section */}
                        <div className="backdrop-blur-lg rounded-[2.5rem] p-8 md:p-12 border border-white/10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                            <h4 className="text-2xl font-bold mb-8" style={{ color: '#fff' }}>Quick Inquiry</h4>
                            <form action="#" className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-[#a5c9ea] opacity-60">Full Name</label>
                                        <input className="w-full bg-[#b7d3ec]/70 border-[#b7d3ec] border rounded-xl px-4 py-3 text-[#003366]" placeholder="John Doe" type="text" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-[#a5c9ea] opacity-60">Phone Number</label>
                                        <input className="w-full bg-[#b7d3ec]/70 border-[#b7d3ec] border rounded-xl px-4 py-3 text-[#003366]" placeholder="+62..." type="tel" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-[#a5c9ea] opacity-60">Message</label>
                                    <textarea className="w-full bg-[#b7d3ec]/70 border-[#b7d3ec] border rounded-xl px-4 py-3 text-[#003366]" placeholder="Describe your requirement..." rows={4}></textarea>
                                </div>
                                <button className="w-full bg-white py-4 rounded-xl font-extrabold text-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-3 shadow-xl shadow-black/20 text-[#003366]" type="submit">
                                    Send Message
                                    <FontAwesomeIcon icon={faArrowRight} className="text-lg" style={{ color: '#003366' }} />
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-sm text-[#a5c9ea]">© 2026 PT ABTEKINDO PRIMA LESTARI. All Rights Reserved.</p>
                        <div className="flex gap-8 text-sm font-semibold text-[#a5c9ea]">
                            <a className="hover:text-primary text-[#a5c9ea]" href="#">Privacy Policy</a>
                            <a className="hover:text-primary text-[#a5c9ea]" href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Floating WhatsApp Button */}
            <a className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center" href="https://wa.me/628123456789">
                <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
            </a>
        </div>
    );
};

export default HomePage;