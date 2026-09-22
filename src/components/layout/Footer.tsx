import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#efeeeb] border-t border-[#eae8e5] text-[#404848] pt-14 pb-12 transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0b3b3c] flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[20px]">explore</span>
              </div>
              <span className="font-headline-sm text-xl tracking-tight text-[#0b3b3c] font-bold">VISTRA</span>
            </Link>
            <p className="font-body-sm text-[#404848] max-w-md leading-relaxed">
              Biến cảm hứng du lịch thành chuyến đi bạn thực sự có thể trải nghiệm. Hệ thống AI đa tác nhân giải mã sở thích, đối chiếu thực tế và đồng hành cùng bạn thiết kế hành trình hoàn hảo.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbf9f6] border border-[#c0c8c8]/40 text-xs font-label-caps text-[#0b3b3c]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] animate-pulse"></span>
              <span>SERENE EDITORIAL VOYAGE · DESIGN SYSTEM</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-label-caps text-xs text-[#0b3b3c] font-bold uppercase tracking-wider">
              Khám phá hệ thống
            </h4>
            <ul className="space-y-2 font-label-lg text-sm">
              <li>
                <Link href="/" className="hover:text-[#0b3b3c] transition-colors">Trang chủ & Giới thiệu</Link>
              </li>
              <li>
                <Link href="/my-trips" className="hover:text-[#0b3b3c] transition-colors">Chuyến đi của tôi</Link>
              </li>
              <li>
                <Link href="/create-trip" className="hover:text-[#0b3b3c] transition-colors">Tạo chuyến đi & DNA du lịch</Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-[#0b3b3c] transition-colors">Khám phá điểm đến</Link>
              </li>
              <li>
                <Link href="/planner" className="hover:text-[#0b3b3c] transition-colors">Không gian lập kế hoạch</Link>
              </li>
              <li>
                <Link href="/trip-plan" className="hover:text-[#0b3b3c] transition-colors">Kế hoạch hoàn chỉnh</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Architecture & Agents */}
          <div className="space-y-3">
            <h4 className="font-label-caps text-xs text-[#0b3b3c] font-bold uppercase tracking-wider">
              Kiến trúc Đa Tác Nhân
            </h4>
            <div className="flex flex-col gap-1.5 font-label-md text-xs text-[#404848]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b6566]"></span>
                Visual Agent: Giải mã thẩm mỹ & phong cảnh
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b6566]"></span>
                Search Agent: Quét dữ liệu địa phương
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b6566]"></span>
                Reality Agent: Vi khí hậu & kiểm chứng thực tế
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b6566]"></span>
                Planning Agent: Tối ưu cung đường theo giờ
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b6566]"></span>
                Budget Guardian: Bảo vệ hạn mức ngân sách
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#eae8e5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-label-md text-[#717978]">
          <p>© 2026 VISTRA Inc. Tất cả quyền được bảo lưu. Bản quyền thuộc về Vistra Travel Atelier.</p>
          <div className="flex items-center gap-4">
            <span>Bảo mật dữ liệu</span>
            <span>·</span>
            <span>Điều khoản dịch vụ</span>
            <span>·</span>
            <span>Nguyên tắc biên tập</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
