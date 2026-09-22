'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MOCK_PLANNER_DAYS, DayItinerary, Activity } from '@/data/mockData';
import Toast from '@/components/shared/Toast';

export default function PlannerPage() {
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(2);
  const [showAiModal, setShowAiModal] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [appliedAiOptimization, setAppliedAiOptimization] = useState<boolean>(false);

  const currentDay: DayItinerary =
    MOCK_PLANNER_DAYS.find((d) => d.dayNumber === selectedDayNumber) || MOCK_PLANNER_DAYS[1];

  const handleApplyAi = () => {
    setAppliedAiOptimization(true);
    setShowAiModal(false);
    setToastMessage('Đã áp dụng đề xuất tối ưu của AI: Tiết kiệm 45 phút di chuyển!');
  };

  return (
    <div className="flex flex-col w-full pb-20">
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Top Workspace Header Bar */}
      <section className="bg-white border-b border-[#eae8e5] py-4 px-4 sm:px-8 lg:px-14 sticky top-20 z-30 shadow-2xs">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/destinations"
              className="p-1.5 rounded-lg text-[#404848] hover:text-[#0b3b3c] hover:bg-[#f5f3f0] transition-colors"
              title="Quay lại chọn điểm đến"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-label-caps text-xs text-[#b45309] uppercase font-semibold">
                  KHÔNG GIAN LẬP KẾ HOẠCH
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c0c8c8]"></span>
                <span className="text-xs font-label-md text-[#404848]">Bản nháp tự động lưu</span>
              </div>
              <h1 className="font-headline-sm text-lg sm:text-xl text-[#0b3b3c] font-bold">
                Sa Pa Mùa Mây &amp; Làng Nghề Bản Địa (4N3Đ)
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={() => setShowAiModal(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#efeeeb] hover:bg-[#eae8e5] text-[#0b3b3c] font-label-lg text-xs font-semibold transition-colors border border-[#c0c8c8]/60"
            >
              <span className="material-symbols-outlined text-[16px] text-[#b45309]">auto_fix_high</span>
              <span>Đề xuất tối ưu ({appliedAiOptimization ? 'Đã áp dụng' : '1 đề xuất'})</span>
            </button>

            <Link
              href="/trip-plan"
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#0b3b3c] hover:bg-[#124e50] text-white font-label-lg text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-all active:scale-[0.98]"
            >
              <span>Hoàn tất kế hoạch</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3-Column Layout Workspace */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-14 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ========================================== */}
          {/* LEFT COLUMN: Day Rail Navigation (2 Cols)  */}
          {/* ========================================== */}
          <aside className="lg:col-span-3 flex flex-col gap-3 lg:sticky lg:top-40">
            <span className="font-label-caps text-xs uppercase tracking-wider text-[#404848]/70 px-2 font-semibold">
              CÁC CHẶNG THỜI GIAN
            </span>

            {/* Day list buttons */}
            {MOCK_PLANNER_DAYS.map((day) => {
              const isSelected = selectedDayNumber === day.dayNumber;
              return (
                <button
                  key={day.dayNumber}
                  type="button"
                  onClick={() => setSelectedDayNumber(day.dayNumber)}
                  className={`w-full text-left p-3 rounded-xl transition-all border flex flex-col gap-1 relative overflow-hidden ${
                    isSelected
                      ? 'bg-white border-[#0b3b3c] shadow-sm'
                      : 'bg-[#f5f3f0] hover:bg-[#eae8e5] border-transparent'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#b45309]"></div>
                  )}
                  <div className="flex items-center justify-between pl-1">
                    <span className={`font-label-lg text-xs font-bold ${isSelected ? 'text-[#0b3b3c]' : 'text-[#1e293b]'}`}>
                      Ngày {day.dayNumber} · {day.dayOfWeek}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                        day.pace === 'Bận rộn'
                          ? 'bg-[#ffddb8] text-[#653e00]'
                          : day.pace === 'Thư thái'
                          ? 'bg-[#beebeb] text-[#002020]'
                          : 'bg-[#eae8e5] text-[#404848]'
                      }`}
                    >
                      {day.pace}
                    </span>
                  </div>
                  <span className="text-xs text-[#404848] pl-1 truncate font-medium">
                    {day.title}
                  </span>
                  <div className="flex items-center gap-1.5 pl-1 text-[10px] text-[#404848]/80">
                    <span>{day.activities.length} trạm dừng</span>
                    <span>•</span>
                    <span className="text-[#b45309] font-medium">{day.date}</span>
                  </div>
                </button>
              );
            })}

            {/* Quick Weather Tile */}
            <div className="mt-4 p-3 bg-white border border-[#eae8e5] rounded-xl flex items-center gap-3 shadow-2xs">
              <span className="material-symbols-outlined text-[#b45309] text-2xl">cloud_queue</span>
              <div className="text-xs">
                <div className="font-bold text-[#0b3b3c]">{currentDay.weather.split('·')[0]}</div>
                <div className="text-[11px] text-[#404848] leading-tight">
                  {currentDay.weather.split('·')[1] || 'Trời mát mẻ, có sương mù'}
                </div>
              </div>
            </div>
          </aside>

          {/* ========================================== */}
          {/* CENTER COLUMN: Itinerary Timeline (6 Cols) */}
          {/* ========================================== */}
          <main className="lg:col-span-6 flex flex-col gap-6">
            {/* Day Header */}
            <div className="bg-white p-5 rounded-2xl border border-[#eae8e5] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-label-caps text-xs uppercase text-[#b45309] font-bold">
                    CHẶNG ĐANG XỬ LÝ
                  </span>
                  <span className="px-2 py-0.5 text-[11px] rounded-full bg-[#f5f3f0] text-[#0b3b3c] font-medium">
                    {currentDay.highlight}
                  </span>
                </div>
                <h2 className="font-headline-sm text-lg sm:text-xl text-[#0b3b3c] font-bold mt-1">
                  Ngày {currentDay.dayNumber} — {currentDay.title}
                </h2>
                <p className="text-xs text-[#404848] mt-0.5">
                  {currentDay.dayOfWeek}, {currentDay.date} · Tuyến đường tối ưu theo giờ
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowAiModal(true)}
                  className="p-2 rounded-lg bg-[#f5f3f0] hover:bg-[#eae8e5] text-[#0b3b3c] transition-colors"
                  title="Tự động kiểm tra xung đột"
                >
                  <span className="material-symbols-outlined text-[18px]">auto_fix_high</span>
                </button>
              </div>
            </div>

            {/* Timeline Stream */}
            <div className="flex flex-col gap-4 relative">
              {currentDay.activities.map((item, index) => {
                // If it is a transit card
                if ('isTransit' in item && item.isTransit) {
                  return (
                    <div
                      key={`transit-${index}`}
                      className="ml-6 sm:ml-24 py-2 px-4 bg-[#f5f3f0] rounded-xl border border-dashed border-[#c0c8c8] flex items-center justify-between text-xs text-[#404848]"
                    >
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-[#b45309]">
                          {item.transit.type.includes('bộ') ? 'directions_walk' : 'directions_car'}
                        </span>
                        <span className="font-medium text-[#0b3b3c]">
                          {item.transit.type}: {item.transit.duration} ({item.transit.distance})
                        </span>
                      </div>
                      <span className="text-[11px] text-[#717978] hidden sm:inline">
                        {item.transit.description}
                      </span>
                    </div>
                  );
                }

                // If it is a regular activity card
                const act = item as Activity;
                const isSelected = act.id === 'd2-a1';

                return (
                  <div key={act.id} className="flex flex-col sm:flex-row gap-4 items-start group">
                    {/* Time indicator */}
                    <div className="sm:w-20 pt-1 shrink-0 flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-start gap-1">
                      <span className="font-label-md text-sm font-bold text-[#0b3b3c]">
                        {act.timeStart}
                      </span>
                      <span className="text-[11px] font-label-caps text-[#404848]/70">
                        {act.timeEnd}
                      </span>
                    </div>

                    {/* Activity Body */}
                    <div
                      className={`flex-1 w-full bg-white rounded-xl p-4 sm:p-5 border transition-all ${
                        isSelected
                          ? 'border-[#0b3b3c] ring-2 ring-[#0b3b3c]/20 shadow-md'
                          : 'border-[#eae8e5] shadow-xs hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {isSelected && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase font-label-caps bg-[#0b3b3c] text-white">
                              ĐANG CHỌN
                            </span>
                          )}
                          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#f5f3f0] text-[#0b3b3c]">
                            {act.category}
                          </span>
                        </div>

                        <div className="flex items-center gap-1 text-[#404848]">
                          {act.isLocked && (
                            <span className="material-symbols-outlined text-[16px] text-[#b45309]" title="Hoạt động chốt cứng theo giờ vàng">
                              lock
                            </span>
                          )}
                          <button className="p-1 hover:text-[#0b3b3c] transition-colors" title="Kéo thả hoặc thay đổi thứ tự">
                            <span className="material-symbols-outlined text-[18px]">drag_indicator</span>
                          </button>
                        </div>
                      </div>

                      <h3 className="font-headline-sm text-base text-[#0b3b3c] font-bold">
                        {act.title}
                      </h3>
                      <p className="text-xs text-[#404848] mt-1.5 leading-relaxed font-body-sm">
                        {act.description}
                      </p>

                      <div className="mt-3 pt-3 border-t border-[#f5f3f0] flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="text-[#3b6566] flex items-center gap-1 font-medium text-[11px]">
                          <span className="material-symbols-outlined text-[14px]">location_on</span>
                          <span>{act.location}</span>
                        </span>
                        <div className="flex items-center gap-1.5">
                          {act.tags.map((tag) => (
                            <span key={tag} className="text-[10px] font-label-caps text-[#717978] bg-[#f5f3f0] px-1.5 py-0.5 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Add stop button stub */}
            <button
              onClick={() => setToastMessage('Đã mở gợi ý trạm dừng tương thích trên cung đường này!')}
              className="py-3 px-4 rounded-xl border-2 border-dashed border-[#c0c8c8] hover:border-[#0b3b3c] text-xs font-label-lg font-semibold text-[#0b3b3c] bg-white hover:bg-[#f5f3f0] transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">add_location_alt</span>
              <span>+ Thêm trạm dừng vào Ngày {currentDay.dayNumber}</span>
            </button>
          </main>

          {/* ========================================== */}
          {/* RIGHT COLUMN: Map, Budget & AI (3 Cols)    */}
          {/* ========================================== */}
          <aside className="lg:col-span-3 flex flex-col gap-6">
            {/* Visual Route Map Widget */}
            <div className="bg-white rounded-2xl border border-[#eae8e5] p-4 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-xs text-[#0b3b3c] uppercase font-bold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#3b6566]">map</span>
                  <span>BẢN ĐỒ TUYẾN ĐƯỜNG</span>
                </span>
                <span className="text-[11px] text-[#b45309] font-semibold">18.5 km</span>
              </div>

              {/* Simulated Map Canvas */}
              <div className="h-44 rounded-xl bg-[#efeeeb] border border-[#eae8e5] relative overflow-hidden flex flex-col justify-between p-3">
                <div className="flex justify-between items-start text-[10px] font-mono text-[#404848]">
                  <span className="bg-white/80 px-1.5 py-0.5 rounded">Cổng Trời 2.035m</span>
                  <span className="bg-white/80 px-1.5 py-0.5 rounded">Tả Van 1.200m</span>
                </div>

                {/* SVG Route Topology Simulation */}
                <svg className="w-full h-20" viewBox="0 0 200 80">
                  <path
                    d="M 10 20 Q 60 70 100 30 T 190 60"
                    fill="none"
                    stroke="#0b3b3c"
                    strokeWidth="3"
                    strokeDasharray="4 2"
                  />
                  <circle cx="10" cy="20" r="5" fill="#d49b53" />
                  <circle cx="100" cy="30" r="4" fill="#0b3b3c" />
                  <circle cx="190" cy="60" r="5" fill="#2e7d32" />
                </svg>

                <div className="flex items-center justify-between text-[10px] text-[#404848]">
                  <span>Đèo Ô Quy Hồ</span>
                  <span>Mường Hoa</span>
                  <span>Bản Tả Van</span>
                </div>
              </div>

              <div className="text-[11px] text-[#404848] space-y-1 pt-1">
                <div className="flex justify-between">
                  <span>Chênh lệch độ cao:</span>
                  <strong className="text-[#0b3b3c]">835m (Hạ dốc)</strong>
                </div>
                <div className="flex justify-between">
                  <span>Điều kiện đường:</span>
                  <strong className="text-[#0b3b3c]">Đường đèo bê tông &amp; Lối đá</strong>
                </div>
              </div>
            </div>

            {/* Budget Guardian Widget */}
            <div className="bg-white rounded-2xl border border-[#eae8e5] p-4 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-xs text-[#0b3b3c] uppercase font-bold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#b45309]">payments</span>
                  <span>BUDGET GUARDIAN</span>
                </span>
                <span className="text-[11px] font-semibold text-[#2e7d32] bg-[#2e7d32]/10 px-2 py-0.5 rounded">
                  Vùng an toàn
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-label-md">
                  <span className="text-[#404848]">Dự toán hiện tại:</span>
                  <strong className="text-[#0b3b3c]">14.250.000 / 15.000.000 VND</strong>
                </div>
                <div className="w-full h-2 bg-[#f5f3f0] rounded-full overflow-hidden">
                  <div className="h-full bg-[#0b3b3c] rounded-full" style={{ width: '95%' }}></div>
                </div>
                <span className="text-[10px] text-[#717978] block">
                  Còn dư 750.000 VND cho khoản dự phòng phát sinh
                </span>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-[#f5f3f0] text-xs">
                <div className="flex justify-between text-[#404848]">
                  <span>Lưu trú:</span>
                  <span className="font-medium text-[#0b3b3c]">6.200.000 VND</span>
                </div>
                <div className="flex justify-between text-[#404848]">
                  <span>Di chuyển xe riêng:</span>
                  <span className="font-medium text-[#0b3b3c]">4.500.000 VND</span>
                </div>
                <div className="flex justify-between text-[#404848]">
                  <span>Ăn uống &amp; Trải nghiệm:</span>
                  <span className="font-medium text-[#0b3b3c]">3.550.000 VND</span>
                </div>
              </div>
            </div>

            {/* AI Change Preview Callout */}
            <div className="bg-[#f5f3f0] rounded-2xl border border-[#eae8e5] p-4 space-y-3">
              <div className="flex items-center gap-2 text-[#b45309]">
                <span className="material-symbols-outlined text-[18px]">psychology</span>
                <span className="font-label-caps text-xs font-bold uppercase">
                  TRỢ LÝ AI ĐỀ XUẤT
                </span>
              </div>
              <p className="text-xs text-[#404848] leading-relaxed">
                {appliedAiOptimization
                  ? 'Đã áp dụng thành công: Hoạt động dệt lanh đã dời sang chiều Ngày 3, giúp tuyến đường Ngày 2 thư thái hơn.'
                  : 'Phát hiện nguy cơ tắc đường dốc Tả Van lúc trưa: Đề xuất chuyển trạm dệt lanh sang chiều Ngày 3 để tiết kiệm 45 phút di chuyển.'}
              </p>

              {!appliedAiOptimization && (
                <button
                  onClick={() => setShowAiModal(true)}
                  className="w-full py-2 px-3 bg-[#0b3b3c] hover:bg-[#124e50] text-white text-xs font-label-lg font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <span>Xem trước tác động</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* AI CHANGE PREVIEW MODAL */}
      {showAiModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b3b3c]/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white max-w-lg w-full rounded-2xl shadow-2xl p-6 border border-[#eae8e5] space-y-5">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-caps text-xs uppercase tracking-wider text-[#b45309] font-bold">
                  BẢN XEM TRƯỚC ĐIỀU CHỈNH LỊCH TRÌNH
                </span>
                <h3 className="font-headline-sm text-lg text-[#0b3b3c] font-bold">
                  Tối ưu hóa tuyến đường Ngày 2
                </h3>
              </div>
              <button
                onClick={() => setShowAiModal(false)}
                className="w-8 h-8 rounded-full bg-[#f5f3f0] hover:bg-[#eae8e5] flex items-center justify-center text-[#404848]"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <p className="text-xs text-[#404848] leading-relaxed">
              Planning Agent phát hiện cung đường từ đèo Ô Quy Hồ xuống Tả Van lúc 11:30 thường có xe tải nông sản di chuyển chậm.
            </p>

            <div className="p-4 bg-[#f5f3f0] rounded-xl space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[#404848]">Thời gian di chuyển tiết kiệm:</span>
                <strong className="text-[#2e7d32]">+45 phút thư thái</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-[#404848]">Chênh lệch chi phí dịch vụ:</span>
                <strong className="text-[#0b3b3c]">0 VND</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-[#404848]">Độ tin cậy khả thi tuyến đường:</span>
                <strong className="text-[#0b3b3c]">Tăng từ 76% &rarr; 93%</strong>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowAiModal(false)}
                className="flex-1 py-2.5 px-4 bg-[#f5f3f0] hover:bg-[#eae8e5] text-[#0b3b3c] font-label-lg text-xs font-semibold rounded-lg transition-colors"
              >
                Giữ nguyên
              </button>
              <button
                onClick={handleApplyAi}
                className="flex-1 py-2.5 px-4 bg-[#0b3b3c] hover:bg-[#124e50] text-white font-label-lg text-xs font-semibold rounded-lg transition-colors shadow-xs"
              >
                Xác nhận áp dụng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
