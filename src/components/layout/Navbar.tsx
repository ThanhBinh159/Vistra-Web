'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Chuyến đi của tôi', href: '/my-trips' },
    { label: 'Khám phá điểm đến', href: '/destinations' },
    { label: 'Không gian lập kế hoạch', href: '/planner' },
    { label: 'Kế hoạch hoàn chỉnh', href: '/trip-plan' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fbf9f6]/95 backdrop-blur-md border-b border-[#eae8e5]/80">
      <div className="h-20 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-6 lg:gap-10">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-[#0b3b3c] flex items-center justify-center text-white shadow-sm group-hover:bg-[#124e50] transition-colors">
              <span className="material-symbols-outlined text-[22px]">explore</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-xl tracking-tight text-[#0b3b3c] font-bold">VISTRA</span>
              <span className="text-[9px] uppercase tracking-widest text-[#b45309] font-medium -mt-1 font-mono">Travel Intelligence</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-label-lg text-sm px-3.5 py-2 rounded-lg transition-all font-medium ${
                    active
                      ? 'text-[#0b3b3c] bg-[#efeeeb] font-semibold'
                      : 'text-[#404848] hover:text-[#0b3b3c] hover:bg-[#f5f3f0]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Action Controls & Avatar */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/create-trip"
            className="inline-flex items-center justify-center gap-1.5 bg-[#0b3b3c] text-white font-label-lg text-sm px-4 sm:px-5 py-2.5 rounded-lg hover:bg-[#124e50] transition-all active:scale-[0.98] shadow-sm font-medium"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>+ Lên kế hoạch</span>
          </Link>

          {/* Avatar Profile */}
          <div className="hidden sm:flex items-center pl-1">
            <div className="w-8 h-8 rounded-full bg-[#efeeeb] border border-[#c0c8c8] flex items-center justify-center text-[#0b3b3c] font-semibold text-xs shadow-xs" title="Tài khoản cá nhân">
              AG
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#404848] hover:text-[#0b3b3c] hover:bg-[#efeeeb] transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fbf9f6] border-b border-[#eae8e5] px-4 py-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-label-lg text-sm px-3.5 py-2.5 rounded-lg transition-all font-medium ${
                    active
                      ? 'text-[#0b3b3c] bg-[#efeeeb] font-semibold'
                      : 'text-[#404848] hover:text-[#0b3b3c] hover:bg-[#f5f3f0]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
