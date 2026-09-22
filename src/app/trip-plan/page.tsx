'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MOCK_PLANNER_DAYS, MOCK_COST_BREAKDOWN, Activity } from '@/data/mockData';
import Toast from '@/components/shared/Toast';
import Icon from '@/components/ui/Icon';

export default function TripPlanPage() {
  const [expandedDays, setExpandedDays] = useState<number[]>([1, 2]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleDay = (dayNum: number) => {
    if (expandedDays.includes(dayNum)) {
      setExpandedDays(expandedDays.filter((d) => d !== dayNum));
    } else {
      setExpandedDays([...expandedDays, dayNum]);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(window.location.href);
      setToastMessage('Đã sao chép liên kết chia sẻ hành trình vào khay nhớ tạm!');
    }
  };

  const handleExportPdf = () => {
    setToastMessage('Đang trích xuất tài liệu PDF hành trình bản in chuẩn editorial...');
    setTimeout(() => {
      window.print();
    }, 500);
  };

  return (
    <div className="flex flex-col w-full pb-20 print-page">
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Top Action Control Bar (Hidden on print) */}
      <section className="bg-white border-b border-[#eae8e5] py-3.5 px-4 sm:px-8 lg:px-14 sticky top-20 z-30 shadow-2xs no-print">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            href="/planner"
            className="inline-flex items-center gap-2 text-xs font-label-lg font-semibold text-[#0b3b3c] hover:text-[#b45309] transition-colors"
          >
            <Icon name="edit_calendar" className="size-[18px]" />
            <span>&larr; Quay lại chỉnh sửa tại Workspace</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#f5f3f0] hover:bg-[#eae8e5] text-[#0b3b3c] font-label-lg text-xs font-semibold transition-colors border border-[#eae8e5]"
            >
              <Icon name="print" className="size-4" />
              <span>In lịch trình</span>
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#f5f3f0] hover:bg-[#eae8e5] text-[#0b3b3c] font-label-lg text-xs font-semibold transition-colors border border-[#eae8e5]"
            >
              <Icon name="share" className="size-4" />
              <span>Chia sẻ</span>
            </button>

            <button
              onClick={handleExportPdf}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0b3b3c] hover:bg-[#124e50] text-white font-label-lg text-xs font-semibold transition-colors shadow-2xs"
            >
              <Icon name="download" className="size-4" />
              <span>Xuất PDF</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Document Container */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-14 py-8">
        {/* Editorial Hero Banner */}
        <div className="bg-white rounded-2xl border border-[#eae8e5] p-6 sm:p-10 mb-8 shadow-xs relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#beebeb] text-[#002020] text-xs font-label-caps font-bold">
                TÀI LIỆU HÀNH TRÌNH CHÍNH THỨC
              </span>
              <span className="text-xs text-[#717978]">Mã hồ sơ: VST-2026-SP4N</span>
            </div>

            <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0b3b3c] tracking-tight leading-tight">
              Mùa Mây Sa Pa &amp; Bản Làng Tây Bắc
            </h1>

            <p className="font-body-md text-sm sm:text-base text-[#404848] leading-relaxed">
              Hành trình 4 ngày 3 đêm được tuyển chọn theo phong cách Serene Editorial Voyage. Kết hợp nhịp điệu tĩnh lặng của thung lũng Mường Hoa, đỉnh mây Ô Quy Hồ và trải nghiệm văn hóa thủ công bản địa.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-label-md text-[#404848] border-t border-[#f5f3f0]">
              <span className="flex items-center gap-1.5">
                <Icon name="calendar_today" className="size-4 text-[#3b6566]" />
                <span>18–21 Th11 (Cuối thu)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="group" className="size-4 text-[#3b6566]" />
                <span>2 Người lớn</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="payments" className="size-4 text-[#b45309]" />
                <span>Tổng chi phí: <strong>14.250.000 VND</strong></span>
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="verified" className="size-4 text-[#2e7d32]" />
                <span>Khả năng xuất hiện sương mù: <strong>96%</strong></span>
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ========================================== */}
          {/* LEFT: Accordion Timeline (8 Cols)          */}
          {/* ========================================== */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex items-center justify-between mb-1">
              <h2 className="font-headline-sm text-xl text-[#0b3b3c] font-bold">
                Lịch trình chi tiết từng ngày
              </h2>
              <div className="flex items-center gap-2 text-xs font-label-md no-print">
                <button
                  onClick={() => setExpandedDays([1, 2, 3, 4])}
                  className="text-[#0b3b3c] hover:underline"
                >
                  Mở tất cả
                </button>
                <span>·</span>
                <button
                  onClick={() => setExpandedDays([])}
                  className="text-[#404848] hover:underline"
                >
                  Thu gọn
                </button>
              </div>
            </div>

            {MOCK_PLANNER_DAYS.map((day) => {
              const isExpanded = expandedDays.includes(day.dayNumber);
              return (
                <section
                  key={day.dayNumber}
                  className="bg-white rounded-2xl border border-[#eae8e5] shadow-xs overflow-hidden"
                >
                  {/* Day Accordion Header */}
                  <div
                    onClick={() => toggleDay(day.dayNumber)}
                    className="p-5 bg-[#f5f3f0] hover:bg-[#eae8e5]/60 transition-colors flex items-center justify-between cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-9 h-9 rounded-full bg-[#0b3b3c] text-white flex items-center justify-center font-bold text-sm">
                        {day.dayNumber}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-label-caps text-xs text-[#b45309] font-bold uppercase">
                            NGÀY 0{day.dayNumber} · {day.dayOfWeek}, {day.date}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c0c8c8]"></span>
                          <span className="text-xs text-[#404848] font-medium">{day.pace}</span>
                        </div>
                        <h3 className="font-headline-sm text-base sm:text-lg text-[#0b3b3c] font-bold mt-0.5">
                          {day.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline text-xs text-[#404848]">
                        {day.highlight}
                      </span>
                      <Icon name="expand_more" className={`size-5 text-[#404848] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {/* Day Content Body */}
                  {isExpanded && (
                    <div className="p-6 flex flex-col gap-6 animate-in fade-in duration-200">
                      {day.activities.map((item, idx) => {
                        if ('isTransit' in item && item.isTransit) {
                          return (
                            <div
                              key={`t-${idx}`}
                              className="ml-6 py-2 px-4 bg-[#f5f3f0] rounded-lg border-l-2 border-[#d49b53] text-xs text-[#404848] flex items-center gap-2"
                            >
                              <Icon name="swap_driving_apps" className="size-4 text-[#b45309]" />
                              <span>
                                <strong>{item.transit.type} ({item.transit.duration}):</strong> {item.transit.description}
                              </span>
                            </div>
                          );
                        }

                        const act = item as Activity;
                        return (
                          <div key={act.id} className="flex gap-4 relative">
                            {/* Step number circle */}
                            <div className="flex flex-col items-center">
                              <span className="w-7 h-7 rounded-full bg-[#efeeeb] text-[#0b3b3c] flex items-center justify-center text-xs font-bold">
                                0{idx + 1}
                              </span>
                              <div className="w-0.5 flex-1 bg-[#f5f3f0] my-1"></div>
                            </div>

                            <div className="flex-1 pb-4">
                              <div className="flex items-baseline justify-between flex-wrap gap-2">
                                <span className="font-label-caps text-xs text-[#b45309] font-bold uppercase">
                                  {act.timeStart} – {act.timeEnd} · {act.category}
                                </span>
                                <span className="text-xs text-[#3b6566] font-medium flex items-center gap-1">
                                  <Icon name="location_on" className="size-[14px]" />
                                  <span>{act.location}</span>
                                </span>
                              </div>

                              <h4 className="font-headline-sm text-base text-[#0b3b3c] font-bold mt-1">
                                {act.title}
                              </h4>
                              <p className="text-xs sm:text-sm text-[#404848] mt-1.5 leading-relaxed font-body-sm">
                                {act.description}
                              </p>

                              {/* Special Imagery for Day 1 */}
                              {day.dayNumber === 1 && idx === 3 && (
                                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  <div className="h-40 rounded-xl overflow-hidden border border-[#eae8e5]">
                                    <img
                                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCCq4LoWJv6LIWDiWBi2YoJT_8MBz1oXRtey5TupfI-I_ITtEG3JQaokAyT-ADtXxZyF6xQXMvJEKQqHbYe5Dl4ST0AbMIel6Fwv9j8RmUyJ1t2FjrTVEz-7WLFEEEESRTawdQufbO3E9D6-3rWDTKxW_GlTsYkcVL6Z8MlzYe3wpBoAty1Dn2dp92he6lD5rA6IT2x53nhiTIcBZ31Mu5E48oUyrWIM8nVwicxAykmhYIRotTl-as8w"
                                      alt="Guồng nước bản Cát Cát"
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="h-40 rounded-xl overflow-hidden border border-[#eae8e5]">
                                    <img
                                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw7fycPldv6zjzmXnR_P-Y6m8EPzMPk_w_W3ElQp0yObpBAqZmYUSgldO_JtqNPNIfrrxPfpa0IYxfQi1MVIZjAkWdGBmlCE3WctbelvGM3saJCy0FjGtLpqxIKt2nk6UzAsSLPAmMuC_HuRkBHN_38GunDsJIAisl-Oy5w5mOYZuVJSWG5BjUnXlJ2fb8gjP0-poQNhrZvKMpWCivd2QzVcz01RDCVs2S-qKDufkPlLRQiM7Vmlte-Q"
                                      alt="Vải chàm phơi nắng"
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </section>
              );
            })}
          </div>

          {/* ========================================== */}
          {/* RIGHT: Travel Dossier Sidebar (4 Cols)     */}
          {/* ========================================== */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            {/* Module 1: Dedicated Driver & Transport */}
            <div className="bg-white rounded-2xl border border-[#eae8e5] p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#0b3b3c]">
                <Icon name="directions_car" className="size-5 text-[#b45309]" />
                <h3 className="font-label-caps text-xs uppercase font-bold">
                  PHƯƠNG TIỆN &amp; TÀI XẾ CHUYÊN TRÁCH
                </h3>
              </div>
              <div className="p-3.5 bg-[#f5f3f0] rounded-xl space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#404848]">Tài xế đón tiếp:</span>
                  <strong className="text-[#0b3b3c]">Nguyễn Văn Hùng</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#404848]">Dòng xe:</span>
                  <strong className="text-[#0b3b3c]">DCar Limousine VIP 9 chỗ</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#404848]">Biển số đăng kiểm:</span>
                  <strong className="text-[#0b3b3c]">24B-018.99</strong>
                </div>
                <div className="flex justify-between pt-1 border-t border-[#eae8e5]">
                  <span className="text-[#404848]">Đón tại:</span>
                  <span className="text-[#0b3b3c] font-medium text-right">Khách sạn trung tâm Hà Nội (07:00 18 Th11)</span>
                </div>
              </div>
            </div>

            {/* Module 2: Weather & Outfit Guide */}
            <div className="bg-white rounded-2xl border border-[#eae8e5] p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#0b3b3c]">
                <Icon name="thermostat" className="size-5 text-[#3b6566]" />
                <h3 className="font-label-caps text-xs uppercase font-bold">
                  KHÍ HẬU &amp; TRANG PHỤC KHUYÊN DÙNG
                </h3>
              </div>
              <div className="space-y-2 text-xs text-[#404848]">
                <div className="p-3 bg-[#f5f3f0] rounded-xl">
                  <strong className="text-[#0b3b3c] block text-sm">11°C – 18°C (Se lạnh chớm đông)</strong>
                  <p className="mt-1 leading-relaxed">
                    Sương sớm nghịch nhiệt nhiều gió buốt tại đèo Ô Quy Hồ và đỉnh Fansipan.
                  </p>
                </div>
                <ul className="space-y-1.5 pl-1">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2e7d32] font-bold">✓</span>
                    <span>Áo ấm nhiều lớp dễ cởi khi đi bộ dốc bản làng.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2e7d32] font-bold">✓</span>
                    <span>Áo khoác gió có mũ chống thấm ẩm sương mù.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2e7d32] font-bold">✓</span>
                    <span>Giày đi bộ đế cao su gai chống trơn trượt trên lối đá lát suối.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Module 3: Budget Transparency Breakdown */}
            <div className="bg-white rounded-2xl border border-[#eae8e5] p-5 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#0b3b3c]">
                  <Icon name="receipt_long" className="size-5 text-[#b45309]" />
                  <h3 className="font-label-caps text-xs uppercase font-bold">
                    MINH BẠCH CHI PHÍ
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#0b3b3c]">14.250.000 VND</span>
              </div>

              <div className="space-y-2 text-xs">
                {MOCK_COST_BREAKDOWN.map((item) => (
                  <div key={item.category} className="p-2.5 bg-[#f5f3f0] rounded-xl">
                    <div className="flex justify-between font-medium text-[#0b3b3c]">
                      <span>{item.category}</span>
                      <span>{item.amount}</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-[#717978] mt-0.5">
                      <span>{item.detail}</span>
                      <span>{item.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Module 4: Cultural & Cash Advice */}
            <div className="bg-[#f5f3f0] rounded-2xl border border-[#eae8e5] p-5 space-y-2 text-xs text-[#404848]">
              <span className="font-label-caps text-xs text-[#b45309] font-bold uppercase flex items-center gap-1.5">
                <Icon name="info" className="size-4" />
                <span>LƯU Ý THỰC ĐỊA BẢN LÀNG</span>
              </span>
              <p className="leading-relaxed">
                Nên đổi trước khoảng <strong>3.000.000 VND tiền mặt</strong> tại trung tâm Sa Pa vì tại bản Tả Van và Cát Cát các quầy thủ công của đồng bào không nhận chuyển khoản ngân hàng do sóng yếu.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
