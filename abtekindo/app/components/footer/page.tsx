"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone, faCircleNodes, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => (
  <footer className="pt-24 pb-12 bg-[#003366] text-white" id="contact">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
        {/* Info Section */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-white p-2 rounded-xl text-white">
              <FontAwesomeIcon icon={faSnowflake} className="text-3xl" />
            </div>
            <div>
              <h2 className="font-extrabold text-2xl tracking-tight leading-none text-white">ABTEKINDO</h2>
              <p className="text-[10px] text-[#7bb6e9] font-bold tracking-[0.3em] uppercase">PRIMA LESTARI</p>
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-10 leading-snug text-white">Butuh konsultasi untuk sistem tata udara Anda?</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-full bg-[#e3f0fa] flex items-center justify-center shrink-0">
                <FontAwesomeIcon icon={faLocationDot} className="text-blue-200 text-xl" style={{ color: '#a5c9ea' }} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest mb-1 text-[#a5c9ea]">OUR OFFICE</p>
                <p className="leading-relaxed text-[#a5c9ea] font-normal">Kawasan Industri & Pergudangan, Jl. Raya Utama No. 88, Jakarta Barat, DKI Jakarta.</p>
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
          <h4 className="text-2xl font-bold mb-8 text-white">Quick Inquiry</h4>
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
    {/* Floating WhatsApp Button */}
    <a className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center" href="https://wa.me/628123456789">
      <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
    </a>
  </footer>
);

export default Footer;
