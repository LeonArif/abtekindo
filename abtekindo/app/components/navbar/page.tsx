"use client";
import React from "react";

interface NavbarProps {
  variant?: "default" | "order";
  title?: string;
  navLinks?: { label: string; href: string }[];
  showSearch?: boolean;
  showLogin?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  variant = "default",
  title = "ABTEKINDO",
  navLinks,
  showSearch = false,
}) => {
  if (variant === "order") {
    return (
      <header className="sticky-nav glass-effect border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-20 gap-4 md:gap-0">
            <a href="/user/home" className="flex items-center gap-3">
              <div className="bg-primary p-1.5 rounded-lg text-white">
                <span className="material-symbols-outlined text-3xl">ac_unit</span>
              </div>
              <div>
                <h1 className="text-primary font-extrabold text-xl text-black tracking-tight leading-none">{title}</h1>
                <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">PRIMA LESTARI</p>
              </div>
            </a>
            <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
              {navLinks && navLinks.map((link) => (
                <a key={link.label} className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors" href={link.href}>{link.label}</a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {showSearch && (
                <div className="hidden sm:flex items-center bg-slate-100 rounded-lg px-3 py-1.5 border border-transparent focus-within:border-primary/30 transition-all">
                  <span className="material-symbols-outlined text-slate-400 text-sm">search</span>
                  <input className="bg-transparent border-none focus:ring-0 text-sm w-32 lg:w-48 placeholder:text-slate-400" placeholder="Cari AC impian..." type="text" />
                </div>
              )}
            </div>
            <div className="md:hidden mt-4">
              <span className="material-symbols-outlined text-slate-700">menu</span>
            </div>
          </div>
        </div>
      </header>
    );
  }
  // Default Navbar
  return (
    <nav className="sticky-nav glass-effect border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-20 gap-4 md:gap-0">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-1.5 rounded-lg text-white">
              <span className="material-symbols-outlined text-3xl">ac_unit</span>
            </div>
            <div>
              <h1 className="text-primary font-extrabold text-xl tracking-tight leading-none">{title}</h1>
              <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">PRIMA LESTARI</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            <a className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors" href="#">About Us</a>
            <a className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors" href="#products">Products</a>
            <a className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors" href="#contact">Contact</a>
          </div>
          <div className="md:hidden mt-4">
            <span className="material-symbols-outlined text-slate-700">menu</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
