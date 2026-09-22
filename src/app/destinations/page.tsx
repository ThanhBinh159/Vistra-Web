'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MOCK_DESTINATIONS } from '@/data/mockData';

export default function DestinationsPage() {
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>(['sapa', 'dalat']);
  const [expandedDetails, setExpandedDetails] = useState<string | null>('sapa');
  const [showComparisonModal, setShowComparisonModal] = useState(false);

  const toggleCompare = (id: string) => {
    if (selectedForCompare.includes(id)) {
      if (selectedForCompare.length <= 1) return;
      setSelectedForCompare(selectedForCompare.filter((item) => item !== id));
    } else {
      if (selectedForCompare.length >= 3) {
        setSelectedForCompare([selectedForCompare[1], selectedForCompare[2], id]);
      } else {
        setSelectedForCompare([...selectedForCompare, id]);
      }
    }
  };

  const toggleDetails = (id: string) => {
    setExpandedDetails(expandedDetails === id ? null : id);
  };

  const comparedDestinations = MOCK_DESTINATIONS.filter((d) => selectedForCompare.includes(d.id));

  return (
    <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-14 py-8 sm:py-12 pb-28">
      {/* Top Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#eae8e5]">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#b45309]"></span>
            <span className="font-label-caps text-xs text-[#b45309] uppercase tracking-widest font-semibold">
              04 / ĐỐI CHIẾU &amp; LỰA CHỌN ĐIỂM ĐẾN
            </span>
          </div>
          <h1 className="font-headline-lg text-2xl sm:text-4xl text-[#0b3b3c] tracking-tight font-bold">
            Khám phá các điểm đến tối ưu
          </h1>
          <p className="font-body-md text-sm sm:text-base text-[#404848] mt-2">
            3 ứng viên được chọn lọc kỹ càng dựa trên bộ ảnh cảm hứng và các ràng buộc thực tế của bạn. So sánh song song để chọn phương án hoàn hảo nhất.
          </p>
        </div>

        <button
          onClick={() => setShowComparisonModal(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#efeeeb] hover:bg-[#eae8e5] text-[#0b3b3c] font-label-lg text-xs sm:text-sm font-semibold transition-colors border border-[#c0c8c8]/60"
        >
          <span className="material-symbols-outlined text-[18px]">compare_arrows</span>
          <span>Bảng so sánh chi tiết ({selectedForCompare.length})</span>
        </button>
      </div>

      {/* Destination Cards Stream */}
      <div className="flex flex-col gap-10 mt-8">
        {MOCK_DESTINATIONS.map((dest) => {
          const isSelected = selectedForCompare.includes(dest.id);
          const isExpanded = expandedDetails === dest.id;

          return (
            <article
              key={dest.id}
              className="bg-white rounded-2xl border border-[#eae8e5] shadow-xs hover:shadow-md transition-all overflow-hidden"
            >
              {/* Card Hero Photo Header */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={dest.coverImage}
                  alt={dest.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b3b3c]/90 via-[#0b3b3c]/30 to-black/20"></div>

                {/* Match Score Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[#0b3b3c] font-label-caps text-xs font-semibold shadow-xs">
                    Độ hợp thị giác: {dest.visualMatch}%
                  </span>
                  <span className="px-3 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[#0b3b3c] font-label-caps text-xs font-semibold shadow-xs">
                    Hợp ngân sách: {dest.budgetMatch}%
                  </span>
                  <span className="px-3 py-1 rounded-md bg-[#ffddb8] text-[#653e00] font-label-caps text-xs font-semibold shadow-xs">
                    Hợp mùa: {dest.seasonMatch}%
                  </span>
                </div>

                {/* Destination Title & Estimated Cost */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                  <div>
                    <p className="font-label-caps text-xs text-[#beebeb] tracking-widest uppercase">
                      {dest.region}, {dest.country}
                    </p>
                    <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold tracking-tight text-white mt-0.5">
                      {dest.name}
                    </h2>
                  </div>
                  <div className="text-right">
                    <span className="font-label-caps text-[11px] text-[#eae8e5] uppercase block">
                      Ước tính tổng chi phí
                    </span>
                    <span className="font-headline-sm text-xl sm:text-2xl font-bold text-white">
                      {dest.estimatedCost}
                    </span>
                    <span className="font-label-md text-xs text-[#eae8e5] block">
                      / {dest.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Summary Body */}
              <div className="p-6 space-y-5">
                {/* Metric Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 bg-[#f5f3f0] rounded-xl border border-[#eae8e5]">
                  <div>
                    <span className="block font-label-caps text-[11px] text-[#404848] uppercase font-semibold">
                      Di chuyển
                    </span>
                    <span className="font-label-lg text-xs sm:text-sm text-[#1e293b] font-medium flex items-center gap-1.5 mt-0.5">
                      <span className="material-symbols-outlined text-[16px] text-[#b45309]">
                        {dest.transport.icon}
                      </span>
                      <span>{dest.transport.level} ({dest.transport.description})</span>
                    </span>
                  </div>
                  <div>
                    <span className="block font-label-caps text-[11px] text-[#404848] uppercase font-semibold">
                      Thời điểm vàng
                    </span>
                    <span className="font-label-lg text-xs sm:text-sm text-[#1e293b] font-medium flex items-center gap-1.5 mt-0.5">
                      <span className="material-symbols-outlined text-[16px] text-[#3b6566]">calendar_month</span>
                      <span>{dest.goldenHour}</span>
                    </span>
                  </div>
                  <div>
                    <span className="block font-label-caps text-[11px] text-[#404848] uppercase font-semibold">
                      Bầu không khí
                    </span>
                    <span className="font-label-lg text-xs sm:text-sm text-[#1e293b] font-medium flex items-center gap-1.5 mt-0.5">
                      <span className="material-symbols-outlined text-[16px] text-[#3b6566]">{dest.vibe.icon}</span>
                      <span>{dest.vibe.title}</span>
                    </span>
                  </div>
                </div>

                {/* Rationale */}
                <p className="font-body-md text-xs sm:text-sm text-[#404848] leading-relaxed">
                  <strong className="text-[#0b3b3c] font-semibold">Lý do phù hợp: </strong>
                  {dest.rationale}
                </p>

                {/* Card Action Controls */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#f5f3f0]">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleCompare(dest.id)}
                      className="w-4 h-4 rounded text-[#0b3b3c] accent-[#0b3b3c] cursor-pointer"
                    />
                    <span className="font-label-md text-xs text-[#1e293b] font-medium">
                      So sánh song song
                    </span>
                  </label>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => toggleDetails(dest.id)}
                      className="px-4 py-2 rounded-lg bg-[#efeeeb] hover:bg-[#eae8e5] text-[#0b3b3c] font-label-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <span>{isExpanded ? 'Thu gọn hồ sơ' : 'Xem hồ sơ tình báo'}</span>
                      <span className={`material-symbols-outlined text-[18px] transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                        keyboard_arrow_down
                      </span>
                    </button>

                    <Link
                      href="/planner"
                      className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-[#0b3b3c] hover:bg-[#124e50] text-white font-label-lg text-xs font-semibold transition-all active:scale-[0.98] shadow-xs"
                    >
                      <span>Lên kế hoạch ở đây</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* EXPANDABLE INTELLIGENCE DOSSIER SECTION */}
              {isExpanded && (
                <div className="px-6 pb-6 pt-2 bg-[#f5f3f0]/50 border-t border-[#eae8e5] space-y-6 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-xs font-label-caps text-[#b45309] font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[16px]">verified_user</span>
                    <span>HỒ SƠ TÌNH BÁO DU LỊCH (INTELLIGENCE DOSSIER)</span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Module 1: Best Moment & Crowd */}
                    <div className="bg-white p-5 rounded-xl border border-[#eae8e5] space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-headline-sm text-sm text-[#0b3b3c] font-semibold flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#3b6566] text-[18px]">wb_twilight</span>
                          <span>Thời điểm lý tưởng nhất (Best Moment)</span>
                        </h4>
                        <span className="text-xs text-[#2e7d32] font-semibold bg-[#2e7d32]/10 px-2 py-0.5 rounded">
                          Khuyên dùng
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="p-3 bg-[#f5f3f0] rounded-lg">
                          <span className="text-[#404848] block text-[11px] font-label-caps">Khung giờ săn mây:</span>
                          <strong className="text-[#0b3b3c] text-sm">{dest.bestMoments.peakHours}</strong>
                          <p className="text-[11px] text-[#404848] mt-0.5">{dest.bestMoments.sunDirection}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <div className="p-2.5 bg-[#f5f3f0] rounded-lg">
                            <span className="text-[11px] text-[#404848] block font-label-caps">Độ phù hợp thời tiết:</span>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex-1 bg-[#eae8e5] h-1.5 rounded-full overflow-hidden">
                                <div
                                  className="bg-[#0b3b3c] h-full rounded-full"
                                  style={{ width: `${dest.bestMoments.weatherSuitability}%` }}
                                ></div>
                              </div>
                              <span className="font-semibold text-xs text-[#0b3b3c]">
                                {dest.bestMoments.weatherSuitability}%
                              </span>
                            </div>
                          </div>
                          <div className="p-2.5 bg-[#f5f3f0] rounded-lg">
                            <span className="text-[11px] text-[#404848] block font-label-caps">Mật độ du khách:</span>
                            <span className="font-semibold text-xs text-[#0b3b3c] block mt-1">
                              {dest.bestMoments.crowdLevel}
                            </span>
                          </div>
                        </div>

                        {/* Forecast Trend Bars */}
                        <div className="pt-2">
                          <span className="text-[11px] font-label-caps text-[#404848] block mb-1">
                            Dự báo chỉ số thuận lợi theo từng ngày:
                          </span>
                          <div className="grid grid-cols-4 gap-2 text-center">
                            {dest.bestMoments.dailyForecast.map((fc) => (
                              <div key={fc.day} className="p-2 bg-[#f5f3f0] rounded">
                                <span className="block text-[10px] text-[#404848]">{fc.day}</span>
                                <strong className="block text-xs text-[#0b3b3c] mt-0.5">{fc.score}%</strong>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Module 2: Reality Check */}
                    <div className="bg-white p-5 rounded-xl border border-[#eae8e5] space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-headline-sm text-sm text-[#0b3b3c] font-semibold flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#b45309] text-[18px]">verified</span>
                          <span>Kiểm chứng thực tế (Kỳ vọng vs Thực tế)</span>
                        </h4>
                        <span className="text-xs font-semibold text-[#b45309] bg-[#ffddb8] px-2 py-0.5 rounded">
                          Độ tin cậy: {dest.realityCheck.confidence}%
                        </span>
                      </div>

                      {/* Side by side photos */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                          <div className="h-28 rounded-lg overflow-hidden relative border border-[#eae8e5]">
                            <img
                              src={dest.realityCheck.expectationImage}
                              alt="Kỳ vọng"
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute bottom-1 left-1 bg-black/70 text-white text-[9px] font-label-caps px-1.5 py-0.5 rounded">
                              Kỳ vọng
                            </span>
                          </div>
                          <p className="text-[11px] text-[#404848] leading-tight">
                            {dest.realityCheck.expectationDesc}
                          </p>
                        </div>

                        <div className="space-y-1.5">
                          <div className="h-28 rounded-lg overflow-hidden relative border border-[#eae8e5]">
                            <img
                              src={dest.realityCheck.realityImage}
                              alt="Thực tế"
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute bottom-1 left-1 bg-[#b45309] text-white text-[9px] font-label-caps px-1.5 py-0.5 rounded">
                              Thực tế mùa đi
                            </span>
                          </div>
                          <p className="text-[11px] text-[#404848] leading-tight">
                            {dest.realityCheck.realityDesc}
                          </p>
                        </div>
                      </div>

                      {/* Things to know bullet points */}
                      <div className="p-3 bg-[#f5f3f0] rounded-lg space-y-1.5 text-xs text-[#404848]">
                        <span className="font-label-caps text-[10px] text-[#0b3b3c] font-bold block uppercase">
                          Lưu ý quan trọng trên thực địa:
                        </span>
                        {dest.realityCheck.keyPoints.map((pt, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-[11px]">
                            <span className="text-[#b45309] font-bold">•</span>
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* STICKY BOTTOM COMPARISON DOCK */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#eae8e5] py-3.5 shadow-xl">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-label-caps text-xs text-[#404848] uppercase font-semibold">
              ĐÃ CHỌN ĐỂ SO SÁNH:
            </span>
            <div className="flex items-center gap-2">
              {comparedDestinations.map((d) => (
                <span
                  key={d.id}
                  className="px-2.5 py-1 rounded-md bg-[#0b3b3c] text-white text-xs font-label-md font-medium flex items-center gap-1.5 shadow-2xs"
                >
                  <span>{d.name.split(',')[0]}</span>
                  <button
                    onClick={() => toggleCompare(d.id)}
                    className="hover:text-[#beebeb]"
                    aria-label={`Bỏ chọn ${d.name}`}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowComparisonModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#d49b53] hover:bg-[#c88d42] text-white text-xs sm:text-sm font-label-lg font-semibold rounded-lg shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">balance</span>
              <span>So sánh chi tiết ngay ({selectedForCompare.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* COMPARISON MODAL */}
      {showComparisonModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b3b3c]/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-[#eae8e5]">
            {/* Modal Header */}
            <div className="p-5 bg-[#f5f3f0] border-b border-[#eae8e5] flex items-center justify-between">
              <div>
                <span className="font-label-caps text-xs uppercase tracking-wider text-[#b45309] font-bold">
                  BẢNG ĐỐI CHIẾU TIÊU CHÍ TRỰC QUAN
                </span>
                <h3 className="font-headline-md text-xl text-[#0b3b3c] font-bold">
                  Phân tích so sánh song song ({comparedDestinations.length} điểm đến)
                </h3>
              </div>
              <button
                onClick={() => setShowComparisonModal(false)}
                className="w-8 h-8 rounded-full bg-white hover:bg-[#eae8e5] flex items-center justify-center text-[#404848] transition-colors border border-[#eae8e5]"
                aria-label="Đóng bảng so sánh"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Modal Table Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="grid grid-cols-3 gap-4 pb-4 border-b border-[#eae8e5]">
                <div className="text-xs font-label-caps text-[#404848] font-bold">TIÊU CHÍ / ĐIỂM ĐẾN</div>
                {comparedDestinations.map((d) => (
                  <div key={d.id} className="text-center">
                    <h4 className="font-headline-sm text-sm text-[#0b3b3c] font-bold">{d.name}</h4>
                    <span className="text-[11px] text-[#404848]">{d.duration} · {d.estimatedCost}</span>
                  </div>
                ))}
              </div>

              {/* Criteria 1: Visual Match */}
              <div className="grid grid-cols-3 gap-4 items-center text-xs py-2 border-b border-[#f5f3f0]">
                <span className="font-medium text-[#404848]">Độ hợp thị giác DNA</span>
                {comparedDestinations.map((d) => (
                  <div key={d.id} className="text-center font-bold text-[#0b3b3c]">
                    <span className="px-2 py-0.5 rounded bg-[#f5f3f0] text-xs">
                      {d.visualMatch}%
                    </span>
                  </div>
                ))}
              </div>

              {/* Criteria 2: Budget Match */}
              <div className="grid grid-cols-3 gap-4 items-center text-xs py-2 border-b border-[#f5f3f0]">
                <span className="font-medium text-[#404848]">Hợp ngân sách (15M)</span>
                {comparedDestinations.map((d) => (
                  <div key={d.id} className="text-center font-bold text-[#0b3b3c]">
                    <span className="px-2 py-0.5 rounded bg-[#f5f3f0] text-xs">
                      {d.budgetMatch}%
                    </span>
                  </div>
                ))}
              </div>

              {/* Criteria 3: Transport Ease */}
              <div className="grid grid-cols-3 gap-4 items-center text-xs py-2 border-b border-[#f5f3f0]">
                <span className="font-medium text-[#404848]">Độ thuận tiện di chuyển</span>
                {comparedDestinations.map((d) => (
                  <div key={d.id} className="text-center text-[#1e293b]">
                    {d.transport.level}
                  </div>
                ))}
              </div>

              {/* Criteria 4: Golden Hour */}
              <div className="grid grid-cols-3 gap-4 items-center text-xs py-2 border-b border-[#f5f3f0]">
                <span className="font-medium text-[#404848]">Thời điểm săn mây / vàng</span>
                {comparedDestinations.map((d) => (
                  <div key={d.id} className="text-center text-[#b45309] font-medium">
                    {d.goldenHour}
                  </div>
                ))}
              </div>

              {/* Criteria 5: Action Choice */}
              <div className="grid grid-cols-3 gap-4 items-center pt-4">
                <span className="font-medium text-[#404848]">Chọn làm kế hoạch chính</span>
                {comparedDestinations.map((d) => (
                  <div key={d.id} className="text-center">
                    <Link
                      href="/planner"
                      className="inline-flex items-center justify-center gap-1 w-full py-2 px-3 bg-[#0b3b3c] hover:bg-[#124e50] text-white text-xs font-label-lg font-semibold rounded-lg shadow-xs transition-colors"
                    >
                      <span>Chọn {d.name.split(',')[0]}</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
