'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'inspiration' | 'agents' | 'output'>('inspiration');

  return (
    <div className="flex flex-col w-full">
      {/* ========================================== */}
      {/* SECTION 1: HERO                           */}
      {/* ========================================== */}
      <section className="relative px-4 sm:px-8 lg:px-14 pt-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eae8e5]/90 border border-[#c0c8c8]/40 text-[#404848] mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#d97706] animate-pulse"></span>
            <span className="font-label-caps text-xs uppercase tracking-wider text-[#0b3b3c] font-semibold">
              AI AGENTS + CON NGƯỜI ĐIỀU KHIỂN
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0b3b3c] tracking-tight max-w-4xl text-center leading-[1.15] mb-6">
            Biến cảm hứng du lịch thành chuyến đi bạn{' '}
            <span className="text-[#b45309] italic font-normal">thực sự có thể trải nghiệm.</span>
          </h1>

          {/* Supporting copy */}
          <p className="font-body-lg text-base sm:text-lg text-[#404848] max-w-2xl text-center leading-relaxed mb-8">
            Tải lên những địa điểm truyền cảm hứng cho bạn. Các AI Agent của VISTRA sẽ giải mã sở thích thị giác, nghiên cứu điểm đến, đối chiếu vi khí hậu thực tế và đồng hành cùng bạn xây dựng hành trình.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto mb-6">
            <Link
              href="/create-trip"
              className="inline-flex items-center justify-center gap-2 bg-[#0b3b3c] text-white font-label-lg text-sm px-7 py-3.5 rounded-lg shadow-sm hover:bg-[#124e50] transition-all font-semibold active:scale-[0.99]"
            >
              <span>Bắt đầu lập kế hoạch</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0b3b3c] border border-[#eae8e5] font-label-lg text-sm px-6 py-3.5 rounded-lg hover:bg-[#f5f3f0] transition-colors shadow-xs font-semibold"
            >
              <span className="material-symbols-outlined text-[18px] text-[#b45309]">explore</span>
              <span>Xem cách hoạt động</span>
            </a>
          </div>

          {/* Trust statement */}
          <div className="inline-flex items-center gap-2 text-xs font-label-caps uppercase tracking-wider text-[#404848]/80 mb-12">
            <span className="material-symbols-outlined text-sm text-[#d97706]">verified_user</span>
            <span>AI gợi ý · Bạn toàn quyền quyết định</span>
          </div>

          {/* Hero Visual Preview: 3-phase Interactive Canvas */}
          <div className="w-full bg-white rounded-2xl border border-[#eae8e5] p-5 sm:p-8 shadow-sm">
            {/* Interactive Phase Selector */}
            <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-[#efeeeb] gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d97706]"></span>
                <span className="font-label-caps uppercase tracking-wider text-[#0b3b3c] font-semibold">
                  Mô phỏng chu trình tương tác VISTRA
                </span>
              </div>
              <div className="flex items-center gap-1.5 p-1 bg-[#f5f3f0] rounded-lg">
                <button
                  onClick={() => setActiveTab('inspiration')}
                  className={`px-3 py-1.5 rounded-md font-label-md transition-all ${
                    activeTab === 'inspiration'
                      ? 'bg-[#0b3b3c] text-white font-medium shadow-xs'
                      : 'text-[#404848] hover:text-[#0b3b3c]'
                  }`}
                >
                  1. Đầu vào cảm hứng
                </button>
                <button
                  onClick={() => setActiveTab('agents')}
                  className={`px-3 py-1.5 rounded-md font-label-md transition-all ${
                    activeTab === 'agents'
                      ? 'bg-[#0b3b3c] text-white font-medium shadow-xs'
                      : 'text-[#404848] hover:text-[#0b3b3c]'
                  }`}
                >
                  2. Đa Agent phân tích
                </button>
                <button
                  onClick={() => setActiveTab('output')}
                  className={`px-3 py-1.5 rounded-md font-label-md transition-all ${
                    activeTab === 'output'
                      ? 'bg-[#0b3b3c] text-white font-medium shadow-xs'
                      : 'text-[#404848] hover:text-[#0b3b3c]'
                  }`}
                >
                  3. Lịch trình khả thi
                </button>
              </div>
            </div>

            {/* Stage 1: Inspiration Input */}
            {activeTab === 'inspiration' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
                <div className="space-y-3">
                  <div className="h-48 rounded-xl overflow-hidden relative shadow-sm border border-[#eae8e5]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPN5yjZ4_2ddr4jbSd40ZJyTlXybQh97VY5fXwC9yQZpYjZ2_OlrtKKKKlSTVAs8kGb29CSu_0FD9TT3XtpN8DS3eOGJIEc8Hfolwsv9NJNBg-fzNCTXMRC6XepNBLp8jiMOgU_B9pbUx7sdT2Zxbt-kZIfGDM3xsW5DCkglFVtg0GHPtF1vDWrjiK2F08F5ALXUGVOKJcyVXvEG2YRY9IIwmeU5ynP7wjBVOShMLL7u70IDnT5eozVw"
                      alt="Biển mây thung lũng"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[11px] px-2 py-0.5 rounded font-label-caps">
                      Ảnh 01 · Moodboard
                    </span>
                  </div>
                  <p className="font-body-sm text-xs text-[#404848] italic">
                    &ldquo;Thích cảm giác sương mù bao quanh ban công gỗ sáng sớm, tĩnh lặng không ồn ào.&rdquo;
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="h-48 rounded-xl overflow-hidden relative shadow-sm border border-[#eae8e5]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw7fycPldv6zjzmXnR_P-Y6m8EPzMPk_w_W3ElQp0yObpBAqZmYUSgldO_JtqNPNIfrrxPfpa0IYxfQi1MVIZjAkWdGBmlCE3WctbelvGM3saJCy0FjGtLpqxIKt2nk6UzAsSLPAmMuC_HuRkBHN_38GunDsJIAisl-Oy5w5mOYZuVJSWG5BjUnXlJ2fb8gjP0-poQNhrZvKMpWCivd2QzVcz01RDCVs2S-qKDufkPlLRQiM7Vmlte-Q"
                      alt="Lối đi bản làng"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[11px] px-2 py-0.5 rounded font-label-caps">
                      Ảnh 02 · Bản sắc văn hóa
                    </span>
                  </div>
                  <p className="font-body-sm text-xs text-[#404848] italic">
                    &ldquo;Lối đi lát đá tự nhiên, trải nghiệm làm thủ công dệt lanh cùng người bản xứ.&rdquo;
                  </p>
                </div>

                <div className="bg-[#f5f3f0] rounded-xl p-5 border border-[#eae8e5] flex flex-col justify-between">
                  <div>
                    <span className="font-label-caps text-xs text-[#b45309] font-bold uppercase tracking-wider block mb-2">
                      Ràng buộc thực tế người dùng
                    </span>
                    <ul className="space-y-2 text-xs font-body-sm text-[#404848]">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-[#0b3b3c]">location_on</span>
                        <span>Khởi hành: <strong>Hà Nội</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-[#0b3b3c]">calendar_month</span>
                        <span>Thời gian: <strong>4 ngày / 3 đêm (18–21 Th11)</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-[#0b3b3c]">payments</span>
                        <span>Ngân sách: <strong>Dưới 15.000.000 VND / 2 người</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-[#0b3b3c]">directions_walk</span>
                        <span>Nhịp độ: <strong>Thư thái (Tối đa 5km/ngày)</strong></span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => setActiveTab('agents')}
                    className="mt-4 w-full py-2 bg-[#0b3b3c] text-white text-xs font-label-lg rounded-lg hover:bg-[#124e50] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Xem AI Agent phân tích</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {/* Stage 2: Multi-Agent Analysis */}
            {activeTab === 'agents' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-300">
                <div className="p-4 rounded-xl bg-[#f5f3f0] border border-[#eae8e5] space-y-2">
                  <div className="flex items-center gap-2 text-[#0b3b3c]">
                    <span className="material-symbols-outlined text-[20px] text-[#3b6566]">fingerprint</span>
                    <h3 className="font-label-lg text-sm font-semibold">Visual Agent</h3>
                  </div>
                  <p className="text-xs text-[#404848]">
                    Giải mã vector thị giác: Núi cao 90%, Sương mù 88%, Tĩnh lặng 94%. Nhận diện gu thẩm mỹ thiên nhiên hoang sơ.
                  </p>
                  <span className="inline-block text-[11px] font-semibold text-[#0b3b3c] bg-white px-2 py-0.5 rounded border border-[#eae8e5]">
                    Khớp 96% DNA Du lịch
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#f5f3f0] border border-[#eae8e5] space-y-2">
                  <div className="flex items-center gap-2 text-[#0b3b3c]">
                    <span className="material-symbols-outlined text-[20px] text-[#3b6566]">search</span>
                    <h3 className="font-label-lg text-sm font-semibold">Search Agent</h3>
                  </div>
                  <p className="text-xs text-[#404848]">
                    Quét kho dữ liệu Tây Bắc: Lọc ra Sa Pa, Mù Cang Chải, Mộc Châu. Sa Pa đạt điểm số phù hợp địa hình cao nhất.
                  </p>
                  <span className="inline-block text-[11px] font-semibold text-[#0b3b3c] bg-white px-2 py-0.5 rounded border border-[#eae8e5]">
                    3 Ứng viên điểm đến
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#f5f3f0] border border-[#eae8e5] space-y-2">
                  <div className="flex items-center gap-2 text-[#0b3b3c]">
                    <span className="material-symbols-outlined text-[20px] text-[#b45309]">verified</span>
                    <h3 className="font-label-lg text-sm font-semibold">Reality Agent</h3>
                  </div>
                  <p className="text-xs text-[#404848]">
                    Kiểm tra vi khí hậu: Cuối tháng 11 có sương sớm nghịch nhiệt từ 05:30 đến 07:30. Khuyến nghị dậy sớm tại Ô Quy Hồ.
                  </p>
                  <span className="inline-block text-[11px] font-semibold text-[#b45309] bg-[#ffddb8] px-2 py-0.5 rounded">
                    Tin cậy thực tế: 84%
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#f5f3f0] border border-[#eae8e5] space-y-2">
                  <div className="flex items-center gap-2 text-[#0b3b3c]">
                    <span className="material-symbols-outlined text-[20px] text-[#3b6566]">alt_route</span>
                    <h3 className="font-label-lg text-sm font-semibold">Planning Agent</h3>
                  </div>
                  <p className="text-xs text-[#404848]">
                    Tối ưu tuyến đường: Gom cụm địa lý đèo Ô Quy Hồ & thung lũng Mường Hoa, tính toán thời gian xe limousine và đi bộ.
                  </p>
                  <span className="inline-block text-[11px] font-semibold text-[#0b3b3c] bg-white px-2 py-0.5 rounded border border-[#eae8e5]">
                    Lịch trình 4 ngày chuẩn xác
                  </span>
                </div>
              </div>
            )}

            {/* Stage 3: Feasible Output */}
            {activeTab === 'output' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center animate-in fade-in duration-300">
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#beebeb] text-[#002020] font-label-caps text-xs font-semibold">
                      ĐÃ TỐI ƯU HÓA HOÀN TOÀN
                    </span>
                    <span className="text-xs text-[#717978]">Sa Pa 4N3Đ · 18–21 Th11</span>
                  </div>
                  <h3 className="font-headline-sm text-xl text-[#0b3b3c] font-semibold">
                    Hành trình Sa Pa Mùa Mây & Làng Nghề Bản Địa
                  </h3>
                  <p className="text-xs sm:text-sm text-[#404848] leading-relaxed">
                    Hành trình được phân bổ vừa vặn với 15 triệu VND dự trù, gom hoạt động săn mây vào khung 05:30 sáng Ngày 2, bổ sung thời gian nghỉ đệm 35 phút đường đèo và bữa ăn tối thực dưỡng.
                  </p>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link
                      href="/planner"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#0b3b3c] text-white text-xs font-label-lg rounded-lg hover:bg-[#124e50] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px]">map</span>
                      <span>Mở Không gian lập kế hoạch</span>
                    </Link>
                    <Link
                      href="/trip-plan"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border border-[#eae8e5] text-[#0b3b3c] text-xs font-label-lg rounded-lg hover:bg-[#f5f3f0] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px]">description</span>
                      <span>Xem kế hoạch hoàn chỉnh</span>
                    </Link>
                  </div>
                </div>

                <div className="bg-[#f5f3f0] p-4 rounded-xl border border-[#eae8e5] space-y-3">
                  <span className="font-label-caps text-xs text-[#0b3b3c] font-bold uppercase block">
                    Chỉ số hành trình
                  </span>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-[#404848]">
                      <span>Độ khớp mong muốn:</span>
                      <strong className="text-[#0b3b3c]">94%</strong>
                    </div>
                    <div className="flex justify-between text-[#404848]">
                      <span>Dự toán ngân sách:</span>
                      <strong className="text-[#0b3b3c]">14.250.000 / 15.000.000 VND</strong>
                    </div>
                    <div className="flex justify-between text-[#404848]">
                      <span>Cự ly đi bộ trung bình:</span>
                      <strong className="text-[#0b3b3c]">3.8 km/ngày</strong>
                    </div>
                    <div className="flex justify-between text-[#404848]">
                      <span>Thời điểm săn mây:</span>
                      <strong className="text-[#b45309]">05:30 sáng 19 Th11</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: 4 CAPABILITIES                  */}
      {/* ========================================== */}
      <section id="capabilities" className="px-4 sm:px-8 lg:px-14 py-16 bg-[#efeeeb] border-y border-[#eae8e5]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="font-label-caps text-xs uppercase tracking-wider text-[#b45309] font-semibold block mb-2">
              NỀN TẢNG CÔNG NGHỆ KHÁC BIỆT
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#0b3b3c] tracking-tight">
              4 Giá trị cốt lõi giải quyết triệt để sự thất vọng khi đi du lịch
            </h2>
            <p className="font-body-md text-sm sm:text-base text-[#404848] mt-2">
              Khác với các ứng dụng du lịch truyền thống chỉ liệt kê danh sách điểm đến vô hồn, VISTRA kết hợp trực giác cảm xúc và dữ liệu thực tế.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl border border-[#eae8e5] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#beebeb]/50 text-[#0b3b3c] flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[26px]">photo_library</span>
                </div>
                <h3 className="font-headline-sm text-base text-[#0b3b3c] font-semibold mb-2">
                  Thấu hiểu cảm hứng (Visual DNA)
                </h3>
                <p className="font-body-sm text-xs text-[#404848] leading-relaxed">
                  Bạn không cần biết trước tên địa danh. Chỉ cần tải lên ảnh chụp màn hình, ảnh moodboard, AI sẽ giải mã phong cách, ánh sáng và cảm xúc bạn kiếm tìm.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#f5f3f0] flex items-center text-xs font-label-md text-[#0b3b3c] font-medium">
                <Link href="/create-trip" className="hover:text-[#b45309] flex items-center gap-1">
                  <span>Trải nghiệm Travel DNA</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl border border-[#eae8e5] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#beebeb]/50 text-[#0b3b3c] flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[26px]">balance</span>
                </div>
                <h3 className="font-headline-sm text-base text-[#0b3b3c] font-semibold mb-2">
                  Chọn điểm đến có cơ sở (Trade-offs)
                </h3>
                <p className="font-body-sm text-xs text-[#404848] leading-relaxed">
                  So sánh song song các ứng viên điểm đến dựa trên 3 trụ cột: Độ hợp thị giác, Hợp ngân sách và Hợp mùa khí hậu, đối chiếu ảnh kỳ vọng vs thực tế.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#f5f3f0] flex items-center text-xs font-label-md text-[#0b3b3c] font-medium">
                <Link href="/destinations" className="hover:text-[#b45309] flex items-center gap-1">
                  <span>Khám phá điểm đến</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl border border-[#eae8e5] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#beebeb]/50 text-[#0b3b3c] flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[26px]">timeline</span>
                </div>
                <h3 className="font-headline-sm text-base text-[#0b3b3c] font-semibold mb-2">
                  Lịch trình thực tế (Route-aware)
                </h3>
                <p className="font-body-sm text-xs text-[#404848] leading-relaxed">
                  Không còn cảnh lịch trình bất khả thi. AI tự động đo khoảng cách, thời gian di chuyển đường đèo, giờ mở cửa và năng lượng thể chất từng chặng.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#f5f3f0] flex items-center text-xs font-label-md text-[#0b3b3c] font-medium">
                <Link href="/planner" className="hover:text-[#b45309] flex items-center gap-1">
                  <span>Mở Planner Workspace</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl border border-[#eae8e5] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#beebeb]/50 text-[#0b3b3c] flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[26px]">handshake</span>
                </div>
                <h3 className="font-headline-sm text-base text-[#0b3b3c] font-semibold mb-2">
                  Cùng kiến tạo với AI (Human-in-the-loop)
                </h3>
                <p className="font-body-sm text-xs text-[#404848] leading-relaxed">
                  AI không tự ý thay đổi dữ liệu của bạn. Mọi điều chỉnh đều hiển thị bản xem trước tác động (thời gian tiết kiệm, chi phí chênh lệch) trước khi bạn xác nhận.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#f5f3f0] flex items-center text-xs font-label-md text-[#0b3b3c] font-medium">
                <Link href="/trip-plan" className="hover:text-[#b45309] flex items-center gap-1">
                  <span>Xem tài liệu mẫu</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: 5-STAGE PROCESS                 */}
      {/* ========================================== */}
      <section id="how-it-works" className="px-4 sm:px-8 lg:px-14 py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-label-caps text-xs uppercase tracking-wider text-[#b45309] font-semibold block mb-2">
              HÀNH TRÌNH 5 CHẶNG
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#0b3b3c] tracking-tight">
              Từ cảm hứng ban đầu đến từng bước chân thực tế
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-[#eae8e5] shadow-xs">
              <span className="w-10 h-10 rounded-full bg-[#0b3b3c] text-white flex items-center justify-center font-bold text-sm mb-4">
                1
              </span>
              <h3 className="font-headline-sm text-sm text-[#0b3b3c] font-semibold mb-1">Truyền cảm hứng</h3>
              <p className="text-xs text-[#404848] leading-relaxed">
                Tải lên moodboard, ảnh lưu trữ mạng xã hội hoặc mô tả tự nhiên bằng lời nói.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-[#eae8e5] shadow-xs">
              <span className="w-10 h-10 rounded-full bg-[#0b3b3c] text-white flex items-center justify-center font-bold text-sm mb-4">
                2
              </span>
              <h3 className="font-headline-sm text-sm text-[#0b3b3c] font-semibold mb-1">Thấu hiểu DNA</h3>
              <p className="text-xs text-[#404848] leading-relaxed">
                Hệ thống trích xuất chỉ số DNA du lịch và ghi nhận trần ngân sách, nhịp độ.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-[#eae8e5] shadow-xs">
              <span className="w-10 h-10 rounded-full bg-[#0b3b3c] text-white flex items-center justify-center font-bold text-sm mb-4">
                3
              </span>
              <h3 className="font-headline-sm text-sm text-[#0b3b3c] font-semibold mb-1">Đánh giá thực tế</h3>
              <p className="text-xs text-[#404848] leading-relaxed">
                So sánh điểm đến, xem dự báo giờ săn mây và đối chiếu ảnh kỳ vọng vs thực tế.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-[#eae8e5] shadow-xs">
              <span className="w-10 h-10 rounded-full bg-[#0b3b3c] text-white flex items-center justify-center font-bold text-sm mb-4">
                4
              </span>
              <h3 className="font-headline-sm text-sm text-[#0b3b3c] font-semibold mb-1">Lập tuyến đường</h3>
              <p className="text-xs text-[#404848] leading-relaxed">
                Phân bổ lịch trình chi tiết từng giờ, tính toán thời gian xe và đường bộ.
              </p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-[#eae8e5] shadow-xs">
              <span className="w-10 h-10 rounded-full bg-[#b45309] text-white flex items-center justify-center font-bold text-sm mb-4">
                5
              </span>
              <h3 className="font-headline-sm text-sm text-[#0b3b3c] font-semibold mb-1">Cùng hoàn thiện</h3>
              <p className="text-xs text-[#404848] leading-relaxed">
                Duyệt đề xuất AI, lưu trữ hoặc in bản kế hoạch cầm tay sẵn sàng lên đường.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 4: CALL TO ACTION BANNER           */}
      {/* ========================================== */}
      <section className="px-4 sm:px-8 lg:px-14 pb-20">
        <div className="max-w-[1440px] mx-auto bg-[#0b3b3c] text-white rounded-2xl p-8 sm:p-14 relative overflow-hidden shadow-lg">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="font-label-caps text-xs text-[#fec074] uppercase tracking-wider font-semibold">
              BẮT ĐẦU NGAY HÔM NAY
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Sẵn sàng biến những bức ảnh cảm hứng thành chuyến đi thực tế?
            </h2>
            <p className="font-body-md text-sm sm:text-base text-[#beebeb] leading-relaxed">
              Chỉ mất chưa đầy 3 phút để tải ảnh và thiết lập ràng buộc. AI của VISTRA sẽ hoàn thiện phần còn lại để bạn thảnh thơi tận hưởng.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/create-trip"
                className="inline-flex items-center gap-2 bg-[#d49b53] hover:bg-[#c88d42] text-white font-label-lg text-sm px-7 py-3.5 rounded-lg shadow-sm font-semibold transition-all active:scale-[0.99]"
              >
                <span>Bắt đầu tạo chuyến đi</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-label-lg text-sm px-6 py-3.5 rounded-lg transition-colors border border-white/20"
              >
                <span>Xem các điểm đến gợi ý</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
