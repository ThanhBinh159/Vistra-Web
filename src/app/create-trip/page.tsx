'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MOCK_TRAVEL_DNA } from '@/data/mockData';
import Toast from '@/components/shared/Toast';

interface MoodPhoto {
  id: string;
  url: string;
  caption: string;
  tags: string[];
}

export default function CreateTripPage() {
  const [photos, setPhotos] = useState<MoodPhoto[]>([
    {
      id: 'p1',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPN5yjZ4_2ddr4jbSd40ZJyTlXybQh97VY5fXwC9yQZpYjZ2_OlrtKKKKlSTVAs8kGb29CSu_0FD9TT3XtpN8DS3eOGJIEc8Hfolwsv9NJNBg-fzNCTXMRC6XepNBLp8jiMOgU_B9pbUx7sdT2Zxbt-kZIfGDM3xsW5DCkglFVtg0GHPtF1vDWrjiK2F08F5ALXUGVOKJcyVXvEG2YRY9IIwmeU5ynP7wjBVOShMLL7u70IDnT5eozVw',
      caption: 'Biển mây thung lũng Mường Hoa lúc bình minh',
      tags: ['Thanh bình', 'Sương mù', 'Núi non'],
    },
    {
      id: 'p2',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBId3SEsE_eVNlUFOMkPBrr_5xjm109Sz2r1nwrXTj0qPo7JBw9hsO6oDiqXIu6jUtUaQNQJBK6SfYQa7VM1sHJrRP-o1vM3Ud7XiDtuXAgiwaroG9tY39vYc0qYLfHE3bvMCsfBj-XqjjUiDC2-Eh7BTFWd8wxt0OI-tbivDsgE9eCjh6vZpCKblKWVXoBt2LBNwLdwXHYYlRfnDcqqttso7lj42EIWC0lCGkLtkhsErLA-RIr5YyqBg',
      caption: 'Ban công ngắm cảnh phong cách Indochine hoài niệm',
      tags: ['Cổ điển', 'Ban công ngắm cảnh'],
    },
    {
      id: 'p3',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw7fycPldv6zjzmXnR_P-Y6m8EPzMPk_w_W3ElQp0yObpBAqZmYUSgldO_JtqNPNIfrrxPfpa0IYxfQi1MVIZjAkWdGBmlCE3WctbelvGM3saJCy0FjGtLpqxIKt2nk6UzAsSLPAmMuC_HuRkBHN_38GunDsJIAisl-Oy5w5mOYZuVJSWG5BjUnXlJ2fb8gjP0-poQNhrZvKMpWCivd2QzVcz01RDCVs2S-qKDufkPlLRQiM7Vmlte-Q',
      caption: 'Lối mòn lát đá và xưởng dệt lanh thủ công bản làng',
      tags: ['Bản làng', 'Lối đi thuận tiện'],
    },
  ]);

  const [narrative, setNarrative] = useState(
    'Tôi muốn một nơi giống như những bức ảnh này. Núi non yên tĩnh, thời tiết mát mẻ, chụp ảnh đẹp, khoảng 4 ngày, không quá đông đúc. Ưu tiên đồ ăn địa phương chuẩn vị và những điểm ngắm cảnh tĩnh lặng hơn là các điểm du lịch thương mại.'
  );

  const [pace, setPace] = useState<'Thư thái' | 'Cân bằng' | 'Năng động'>('Thư thái');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form parameters
  const [startCity, setStartCity] = useState('Hà Nội, Việt Nam');
  const [dates, setDates] = useState('18–21 Th11 (Cuối thu)');
  const [duration, setDuration] = useState('4 ngày / 3 đêm');
  const [travelers, setTravelers] = useState('2 Người lớn');
  const [budget, setBudget] = useState('15.000.000 VND (~$600 USD tổng)');

  const handleAddPhoto = () => {
    const newPhoto: MoodPhoto = {
      id: `p-${Date.now()}`,
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCCq4LoWJv6LIWDiWBi2YoJT_8MBz1oXRtey5TupfI-I_ITtEG3JQaokAyT-ADtXxZyF6xQXMvJEKQqHbYe5Dl4ST0AbMIel6Fwv9j8RmUyJ1t2FjrTVEz-7WLFEEEESRTawdQufbO3E9D6-3rWDTKxW_GlTsYkcVL6Z8MlzYe3wpBoAty1Dn2dp92he6lD5rA6IT2x53nhiTIcBZ31Mu5E48oUyrWIM8nVwicxAykmhYIRotTl-as8w',
      caption: 'Guồng nước mộc bên dòng suối bản Cát Cát',
      tags: ['Thiên nhiên', 'Dòng suối', 'Bản địa'],
    };
    setPhotos([...photos, newPhoto]);
    setToastMessage('Đã thêm 1 ảnh mới vào Moodboard!');
  };

  const handleRemovePhoto = (id: string) => {
    if (photos.length <= 1) {
      setToastMessage('Cần giữ ít nhất 1 ảnh cảm hứng để AI phân tích.');
      return;
    }
    setPhotos(photos.filter((p) => p.id !== id));
    setToastMessage('Đã xóa ảnh khỏi Moodboard.');
  };

  return (
    <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-14 py-8 sm:py-12">
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Top Editorial Header */}
      <div className="pb-8 mb-8 border-b border-[#eae8e5]">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#b45309]"></span>
          <span className="font-label-caps text-xs text-[#b45309] uppercase tracking-widest font-semibold">
            01 / NGUỒN CẢM HỨNG ĐA PHƯƠNG THỨC
          </span>
        </div>
        <h1 className="font-headline-lg text-2xl sm:text-4xl text-[#0b3b3c] tracking-tight font-bold">
          Tạo chuyến đi &amp; Giải mã DNA Du lịch
        </h1>
        <p className="font-body-md text-sm sm:text-base text-[#404848] mt-2 max-w-3xl">
          Tải lên ảnh moodboard, ảnh lưu trữ mạng xã hội hoặc nhập ngôn ngữ đời thường. Visual Agent của VISTRA sẽ giải mã gu thẩm mỹ và tính toán mức độ hòa hợp với các ràng buộc thực tế.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form & Moodboard (8 Cols) */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          {/* SECTION 1: Moodboard Photo Tiles */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-sm text-lg text-[#0b3b3c] font-semibold">
                Bộ sưu tập ảnh cảm hứng ({photos.length} ảnh)
              </h2>
              <span className="text-xs text-[#404848]">
                Visual Agent đã giải mã 9 chiều vector thẩm mỹ
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="bg-white rounded-xl border border-[#eae8e5] p-3 shadow-xs flex flex-col justify-between group"
                >
                  <div className="relative h-44 rounded-lg overflow-hidden mb-3">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={() => handleRemovePhoto(photo.id)}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 hover:bg-black text-white text-xs transition-colors"
                      title="Gỡ ảnh này"
                    >
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  </div>
                  <div className="space-y-1.5">
                    <p className="font-body-sm text-xs font-medium text-[#1e293b]">
                      {photo.caption}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {photo.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-label-caps bg-[#f5f3f0] text-[#0b3b3c]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Add Photo Button Tile */}
              <button
                type="button"
                onClick={handleAddPhoto}
                className="rounded-xl border-2 border-dashed border-[#c0c8c8] hover:border-[#0b3b3c] bg-[#f5f3f0]/50 hover:bg-[#f5f3f0] transition-all p-6 flex flex-col items-center justify-center text-center min-h-[220px] group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0b3b3c] shadow-xs group-hover:scale-110 transition-transform mb-3">
                  <span className="material-symbols-outlined text-[20px]">add_photo_alternate</span>
                </div>
                <span className="font-label-lg text-sm text-[#0b3b3c] font-semibold">
                  + Thêm ảnh khác
                </span>
                <span className="text-xs text-[#404848]/80 mt-1 max-w-[200px]">
                  Tải lên ảnh phong cảnh, reels Instagram hoặc ảnh kỷ niệm
                </span>
              </button>
            </div>
          </section>

          {/* SECTION 2: Natural Language Narrative */}
          <section className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between">
              <div className="flex items-center gap-2">
                <span className="font-label-caps text-xs text-[#b45309] font-bold uppercase tracking-wider">
                  02 / MONG MUỐN BẰNG LỜI
                </span>
                <h2 className="font-headline-sm text-lg text-[#0b3b3c] font-semibold">
                  Mô tả chuyến đi lý tưởng của bạn
                </h2>
              </div>
              <span className="text-xs text-[#b45309] font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">mic</span>
                <span>Hỗ trợ nhập bằng giọng nói</span>
              </span>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#eae8e5] shadow-xs flex flex-col gap-3">
              <textarea
                value={narrative}
                onChange={(e) => setNarrative(e.target.value)}
                rows={4}
                className="w-full bg-transparent text-[#1e293b] font-body-md text-sm sm:text-base placeholder:text-[#404848]/50 focus:outline-none resize-none leading-relaxed"
                placeholder="Chia sẻ những gì bạn mong muốn bằng lời văn của riêng mình..."
              />
              <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#f5f3f0]">
                <div className="flex items-center gap-2 text-[#404848] text-xs font-label-md">
                  <span className="material-symbols-outlined text-[16px] text-[#b45309]">insights</span>
                  <span>Đã tổng hợp 5 sở thích: Phi thương mại, Sắc thu, Cung đường đẹp, Ẩm thực bản địa</span>
                </div>
                <div className="text-[#404848]/70 font-label-caps text-xs">
                  {narrative.length} KÝ TỰ
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: Trip Parameters & Constraints */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-label-caps text-xs text-[#b45309] font-bold uppercase tracking-wider">
                03 / KHUNG ĐIỀU KIỆN THỰC TẾ
              </span>
              <h2 className="font-headline-sm text-lg text-[#0b3b3c] font-semibold">
                Chi tiết chuyến đi &amp; Ràng buộc
              </h2>
            </div>

            <div className="bg-white rounded-xl border border-[#eae8e5] p-6 shadow-xs flex flex-col gap-6">
              {/* 5 Core Inputs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Starting From */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-caps text-xs text-[#404848] uppercase font-semibold">
                    XUẤT PHÁT TỪ
                  </label>
                  <div className="flex items-center gap-2 bg-[#f5f3f0] px-3.5 py-2.5 rounded-lg border border-[#eae8e5]">
                    <span className="material-symbols-outlined text-[#0b3b3c] text-[18px]">location_on</span>
                    <input
                      type="text"
                      value={startCity}
                      onChange={(e) => setStartCity(e.target.value)}
                      className="bg-transparent text-xs sm:text-sm text-[#0b3b3c] font-medium w-full focus:outline-none"
                    />
                  </div>
                </div>

                {/* Travel Dates */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-caps text-xs text-[#404848] uppercase font-semibold">
                    KHOẢNG THỜI GIAN / NGÀY ĐI
                  </label>
                  <div className="flex items-center gap-2 bg-[#f5f3f0] px-3.5 py-2.5 rounded-lg border border-[#eae8e5]">
                    <span className="material-symbols-outlined text-[#0b3b3c] text-[18px]">calendar_today</span>
                    <input
                      type="text"
                      value={dates}
                      onChange={(e) => setDates(e.target.value)}
                      className="bg-transparent text-xs sm:text-sm text-[#0b3b3c] font-medium w-full focus:outline-none"
                    />
                  </div>
                </div>

                {/* Duration */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-caps text-xs text-[#404848] uppercase font-semibold">
                    THỜI LƯỢNG
                  </label>
                  <div className="flex items-center gap-2 bg-[#f5f3f0] px-3.5 py-2.5 rounded-lg border border-[#eae8e5]">
                    <span className="material-symbols-outlined text-[#0b3b3c] text-[18px]">schedule</span>
                    <input
                      type="text"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="bg-transparent text-xs sm:text-sm text-[#0b3b3c] font-medium w-full focus:outline-none"
                    />
                  </div>
                </div>

                {/* Travelers */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-caps text-xs text-[#404848] uppercase font-semibold">
                    SỐ NGƯỜI ĐI
                  </label>
                  <div className="flex items-center gap-2 bg-[#f5f3f0] px-3.5 py-2.5 rounded-lg border border-[#eae8e5]">
                    <span className="material-symbols-outlined text-[#0b3b3c] text-[18px]">group</span>
                    <input
                      type="text"
                      value={travelers}
                      onChange={(e) => setTravelers(e.target.value)}
                      className="bg-transparent text-xs sm:text-sm text-[#0b3b3c] font-medium w-full focus:outline-none"
                    />
                  </div>
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="font-label-caps text-xs text-[#404848] uppercase font-semibold">
                    NGÂN SÁCH DỰ KIẾN (TỔNG CỘNG)
                  </label>
                  <div className="flex items-center gap-2 bg-[#f5f3f0] px-3.5 py-2.5 rounded-lg border border-[#eae8e5]">
                    <span className="material-symbols-outlined text-[#b45309] text-[18px]">payments</span>
                    <input
                      type="text"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="bg-transparent text-xs sm:text-sm text-[#0b3b3c] font-medium w-full focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Pace & Physical Health */}
              <div className="pt-4 border-t border-[#f5f3f0] flex flex-col gap-4">
                <span className="font-label-caps text-xs text-[#404848] uppercase font-semibold">
                  NHỊP ĐỘ DI CHUYỂN &amp; SỨC KHỎE THỂ CHẤT
                </span>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Pace */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-label-md text-[#404848]">Nhịp độ hành trình</span>
                    <div className="flex items-center gap-1 p-1 bg-[#efeeeb] rounded-lg">
                      {(['Thư thái', 'Cân bằng', 'Năng động'] as const).map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setPace(p)}
                          className={`flex-1 py-1.5 text-center text-xs font-label-md rounded-md transition-colors ${
                            pace === p
                              ? 'bg-[#0b3b3c] text-white font-semibold shadow-xs'
                              : 'text-[#404848] hover:text-[#0b3b3c]'
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Walking Tolerance */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-label-md text-[#404848]">Mục tiêu đi bộ hàng ngày</span>
                    <div className="bg-[#f5f3f0] px-3 py-2 rounded-lg text-[#0b3b3c] text-xs font-body-sm flex items-center justify-between border border-[#eae8e5]">
                      <span>Vừa phải · tối đa 5km/ngày</span>
                      <span className="material-symbols-outlined text-[16px] text-[#404848]">nordic_walking</span>
                    </div>
                  </div>

                  {/* Accessibility Profile */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-label-md text-[#404848]">Địa hình &amp; Tiếp cận</span>
                    <div className="bg-[#f5f3f0] px-3 py-2 rounded-lg text-[#0b3b3c] text-xs font-body-sm flex items-center justify-between border border-[#eae8e5]">
                      <span>Địa hình tiêu chuẩn</span>
                      <span className="material-symbols-outlined text-[16px] text-[#2e7d32]">check_circle</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Interactive TRAVEL DNA Component (4 Cols) */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col gap-6">
          <div className="bg-white rounded-xl border border-[#eae8e5] shadow-md p-6 flex flex-col gap-5">
            {/* Component Header */}
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-[#b45309] font-label-caps text-xs uppercase font-semibold mb-1">
                  <span className="material-symbols-outlined text-[16px]">fingerprint</span>
                  <span>Vistra Intelligence Engine</span>
                </div>
                <h3 className="font-headline-sm text-lg text-[#0b3b3c] font-bold">
                  TỔNG HỢP DNA DU LỊCH
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#beebeb] text-[#002020] font-label-caps text-xs font-semibold">
                ĐỘ TIN CẬY 96%
              </span>
            </div>

            <p className="font-body-sm text-xs text-[#404848] leading-relaxed">
              Được giải mã trực tiếp từ {photos.length} hình ảnh, ghi chú và các tham số thực tế bạn đã thiết lập.
            </p>

            {/* Score Metrics Visualization */}
            <div className="flex flex-col gap-3 py-2 border-y border-[#f5f3f0]">
              {MOCK_TRAVEL_DNA.map((metric) => (
                <div key={metric.label} className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-xs font-label-md text-[#1e293b]">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[15px] text-[#3b6566]">{metric.icon}</span>
                      <span>{metric.label}</span>
                    </span>
                    <span className="font-semibold text-[#0b3b3c]">
                      {metric.score}%{' '}
                      <span className="text-[#404848]/70 font-normal">· {metric.rating}</span>
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-[#f5f3f0] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        metric.score >= 80 ? 'bg-[#0b3b3c]' : 'bg-[#c0c8c8]'
                      }`}
                      style={{ width: `${metric.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Curator's Synthesis Note */}
            <div className="bg-[#f5f3f0] p-4 rounded-lg flex flex-col gap-1.5 border-l-3 border-[#d49b53]">
              <span className="font-label-caps text-xs uppercase text-[#b45309] font-bold">
                TỔNG HỢP CỦA ATELIER
              </span>
              <p className="font-body-sm text-xs text-[#404848] italic leading-relaxed">
                &ldquo;Dựa trên ảnh biển mây và mong muốn không gian tĩnh lặng, hệ thống đề xuất ưu tiên các cung đường cao nguyên Tây Bắc trên 1.500m vào cuối thu.&rdquo;
              </p>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/destinations"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-[#0b3b3c] hover:bg-[#124e50] text-white font-label-lg text-sm font-semibold transition-all shadow-sm active:scale-[0.99]"
              >
                <span>Khám phá điểm đến phù hợp</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <span className="text-center text-[11px] text-[#717978]">
                AI đã chuẩn bị 3 phương án đối chiếu kèm Reality Check
              </span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
