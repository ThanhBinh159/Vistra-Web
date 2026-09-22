'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { MOCK_TRIPS } from '@/data/mockData';
import Icon from '@/components/ui/Icon';

export default function MyTripsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'planning' | 'upcoming' | 'past'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortAsc, setSortAsc] = useState(false);

  // Filter & Search logic
  const filteredTrips = useMemo(() => {
    return MOCK_TRIPS.filter((trip) => {
      const matchesFilter = activeFilter === 'all' || trip.status === activeFilter;
      const matchesQuery =
        trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.dates.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, searchQuery]);

  // Counts
  const counts = {
    all: MOCK_TRIPS.length,
    planning: MOCK_TRIPS.filter((t) => t.status === 'planning').length,
    upcoming: MOCK_TRIPS.filter((t) => t.status === 'upcoming').length,
    past: MOCK_TRIPS.filter((t) => t.status === 'past').length,
  };

  const planningTrips = filteredTrips.filter((t) => t.status === 'planning');
  const upcomingTrips = filteredTrips.filter((t) => t.status === 'upcoming');
  const pastTrips = filteredTrips.filter((t) => t.status === 'past');

  return (
    <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-14 py-8 sm:py-12">
      {/* Top Editorial Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#eae8e5]">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#b45309]"></span>
            <span className="font-label-caps text-xs text-[#b45309] uppercase tracking-widest font-semibold">
              KHO LƯU TRỮ HÀNH TRÌNH CÁ NHÂN
            </span>
          </div>
          <h1 className="font-headline-lg text-2xl sm:text-4xl text-[#0b3b3c] tracking-tight font-bold">
            Chuyến đi của tôi
          </h1>
          <p className="font-body-md text-sm sm:text-base text-[#404848] mt-2">
            Quản lý các bản nháp đang hoàn thiện và các tài liệu hành trình đã xác nhận của bạn.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/create-trip"
            className="inline-flex items-center gap-2 bg-[#0b3b3c] text-white font-label-lg text-sm px-5 py-2.5 rounded-lg hover:bg-[#124e50] transition-all active:scale-[0.99] shadow-sm font-semibold"
          >
            <Icon name="add" className="size-[18px]" />
            <span>+ Lên kế hoạch mới</span>
          </Link>
        </div>
      </div>

      {/* Filter Bar & Search Utility */}
      <div className="bg-[#f5f3f0] rounded-xl p-3 my-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
        {/* Segmented Tabs */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0" id="filter-tabs">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-lg font-label-lg text-xs sm:text-sm transition-all whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-[#0b3b3c] text-white font-semibold shadow-xs'
                : 'text-[#404848] hover:text-[#0b3b3c] hover:bg-[#eae8e5]'
            }`}
          >
            Tất cả <span className="ml-1 opacity-75 font-normal text-xs">({counts.all})</span>
          </button>
          <button
            onClick={() => setActiveFilter('planning')}
            className={`px-4 py-2 rounded-lg font-label-lg text-xs sm:text-sm transition-all whitespace-nowrap ${
              activeFilter === 'planning'
                ? 'bg-[#0b3b3c] text-white font-semibold shadow-xs'
                : 'text-[#404848] hover:text-[#0b3b3c] hover:bg-[#eae8e5]'
            }`}
          >
            Đang lên kế hoạch <span className="ml-1 opacity-75 font-normal text-xs">({counts.planning})</span>
          </button>
          <button
            onClick={() => setActiveFilter('upcoming')}
            className={`px-4 py-2 rounded-lg font-label-lg text-xs sm:text-sm transition-all whitespace-nowrap ${
              activeFilter === 'upcoming'
                ? 'bg-[#0b3b3c] text-white font-semibold shadow-xs'
                : 'text-[#404848] hover:text-[#0b3b3c] hover:bg-[#eae8e5]'
            }`}
          >
            Sắp tới <span className="ml-1 opacity-75 font-normal text-xs">({counts.upcoming})</span>
          </button>
          <button
            onClick={() => setActiveFilter('past')}
            className={`px-4 py-2 rounded-lg font-label-lg text-xs sm:text-sm transition-all whitespace-nowrap ${
              activeFilter === 'past'
                ? 'bg-[#0b3b3c] text-white font-semibold shadow-xs'
                : 'text-[#404848] hover:text-[#0b3b3c] hover:bg-[#eae8e5]'
            }`}
          >
            Đã qua <span className="ml-1 opacity-75 font-normal text-xs">({counts.past})</span>
          </button>
        </div>

        {/* Live Search */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-72">
            <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 size-[18px] text-[#404848]/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo điểm đến hoặc ngày..."
              className="w-full bg-white text-[#1e293b] placeholder:text-[#404848]/60 text-xs sm:text-sm pl-9 pr-3 py-2 rounded-lg border border-[#eae8e5] focus:outline-none focus:ring-2 focus:ring-[#0b3b3c]/20 transition-all"
            />
          </div>
          <button
            onClick={() => setSortAsc(!sortAsc)}
            className="p-2 text-[#404848] hover:text-[#0b3b3c] rounded-lg bg-white border border-[#eae8e5] hover:bg-[#eae8e5] transition-colors"
            title="Thứ tự sắp xếp"
          >
            <Icon name="swap_vert" className="size-5" />
          </button>
        </div>
      </div>

      {/* SECTION 1: PLANNING (In-progress) */}
      {(activeFilter === 'all' || activeFilter === 'planning') && planningTrips.length > 0 && (
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-baseline gap-3">
              <h2 className="font-headline-sm text-xl text-[#0b3b3c] font-semibold tracking-tight">
                Đang lên kế hoạch
              </h2>
              <span className="font-label-md text-xs text-[#404848]">
                Bản nháp &amp; không gian làm việc hành trình
              </span>
            </div>
            <span className="font-label-caps text-xs text-[#404848]/70 uppercase font-semibold">
              {planningTrips.length} HÀNH TRÌNH ĐANG XỬ LÝ
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {planningTrips.map((trip) => (
              <article
                key={trip.id}
                className="bg-white rounded-xl border border-[#eae8e5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={trip.coverImage}
                    alt={trip.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-xs text-white text-[11px] font-label-caps font-semibold">
                      BẢN NHÁP
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white/90 text-[#0b3b3c] text-[11px] font-label-caps font-semibold">
                      {trip.duration}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white drop-shadow-md">
                    <span className="text-xs font-label-md">{trip.dates}</span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-headline-sm text-lg text-[#0b3b3c] font-semibold mb-1">
                      {trip.title}
                    </h3>
                    <p className="text-xs text-[#404848] font-body-sm flex items-center gap-1.5">
                      <Icon name="location_on" className="size-4 text-[#3b6566]" />
                      <span>{trip.destination} · {trip.travelers}</span>
                    </p>
                  </div>

                  {trip.progress && (
                    <div className="space-y-1.5 bg-[#f5f3f0] p-3 rounded-lg">
                      <div className="flex justify-between text-xs font-label-md">
                        <span className="text-[#404848]">Tiến độ hành trình:</span>
                        <strong className="text-[#0b3b3c]">
                          Hoàn tất {trip.progress.current}/{trip.progress.total} ngày
                        </strong>
                      </div>
                      <div className="w-full h-2 bg-[#eae8e5] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#0b3b3c] rounded-full"
                          style={{ width: `${(trip.progress.current / trip.progress.total) * 100}%` }}
                        ></div>
                      </div>
                      {trip.note && (
                        <p className="text-[11px] text-[#b45309] font-medium italic pt-1 flex items-center gap-1">
                          <Icon name="info" className="size-[13px]" />
                          <span>{trip.note}</span>
                        </p>
                      )}
                    </div>
                  )}

                  <div className="pt-2 flex items-center gap-3">
                    <Link
                      href="/planner"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-[#0b3b3c] text-white text-xs font-label-lg rounded-lg hover:bg-[#124e50] transition-colors font-medium shadow-xs"
                    >
                      <Icon name="edit_calendar" className="size-4" />
                      <span>Tiếp tục lên kế hoạch</span>
                    </Link>
                    <Link
                      href="/trip-plan"
                      className="inline-flex items-center justify-center py-2.5 px-3 bg-[#f5f3f0] text-[#0b3b3c] hover:bg-[#eae8e5] text-xs font-label-lg rounded-lg transition-colors border border-[#eae8e5]"
                      title="Xem trước tài liệu"
                    >
                      <Icon name="visibility" className="size-[18px]" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2: UPCOMING */}
      {(activeFilter === 'all' || activeFilter === 'upcoming') && upcomingTrips.length > 0 && (
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-baseline gap-3">
              <h2 className="font-headline-sm text-xl text-[#0b3b3c] font-semibold tracking-tight">
                Chuyến đi sắp tới
              </h2>
              <span className="font-label-md text-xs text-[#404848]">
                Đã chốt lịch &amp; đồng bộ dịch vụ
              </span>
            </div>
            <span className="font-label-caps text-xs text-[#404848]/70 uppercase font-semibold">
              {upcomingTrips.length} HÀNH TRÌNH ĐÃ XÁC NHẬN
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingTrips.map((trip) => (
              <article
                key={trip.id}
                className="bg-white rounded-xl border border-[#eae8e5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={trip.coverImage}
                    alt={trip.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#2e7d32] text-white text-[11px] font-label-caps font-semibold">
                      SẮP DIỄN RA
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white/90 text-[#0b3b3c] text-[11px] font-label-caps font-semibold">
                      {trip.duration}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-headline-sm text-lg text-[#0b3b3c] font-semibold mb-1">
                      {trip.title}
                    </h3>
                    <p className="text-xs text-[#404848] font-body-sm flex items-center gap-1.5">
                      <Icon name="calendar_today" className="size-4 text-[#3b6566]" />
                      <span>{trip.dates} · {trip.travelers}</span>
                    </p>
                    {trip.note && (
                      <p className="text-xs text-[#2e7d32] font-medium mt-2 flex items-center gap-1">
                        <Icon name="check_circle" className="size-[15px]" />
                        <span>{trip.note}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <Link
                      href="/trip-plan"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-[#0b3b3c] text-white text-xs font-label-lg rounded-lg hover:bg-[#124e50] transition-colors font-medium shadow-xs"
                    >
                      <Icon name="description" className="size-4" />
                      <span>Mở tài liệu hành trình đầy đủ</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: PAST */}
      {(activeFilter === 'all' || activeFilter === 'past') && pastTrips.length > 0 && (
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-baseline gap-3">
              <h2 className="font-headline-sm text-xl text-[#0b3b3c] font-semibold tracking-tight">
                Chuyến đi đã qua
              </h2>
              <span className="font-label-md text-xs text-[#404848]">
                Lưu trữ kỷ niệm &amp; nhật ký hành trình
              </span>
            </div>
            <span className="font-label-caps text-xs text-[#404848]/70 uppercase font-semibold">
              {pastTrips.length} HÀNH TRÌNH ĐÃ HOÀN TẤT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastTrips.map((trip) => (
              <article
                key={trip.id}
                className="bg-white rounded-xl border border-[#eae8e5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden opacity-90 hover:opacity-100"
              >
                <div className="relative h-44 w-full overflow-hidden grayscale-20">
                  <img
                    src={trip.coverImage}
                    alt={trip.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-[#30312f]/80 text-white text-[11px] font-label-caps">
                      LƯU TRỮ
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-headline-sm text-lg text-[#0b3b3c] font-semibold mb-1">
                      {trip.title}
                    </h3>
                    <p className="text-xs text-[#404848] font-body-sm">
                      {trip.destination} · {trip.dates}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <Link
                      href="/create-trip"
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-4 bg-[#f5f3f0] hover:bg-[#eae8e5] text-[#0b3b3c] text-xs font-label-lg rounded-lg transition-colors border border-[#eae8e5]"
                    >
                      <Icon name="replay" className="size-4" />
                      <span>Lên kế hoạch tương tự</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {filteredTrips.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl border border-[#eae8e5] p-8">
          <Icon name="travel_explore" className="size-9 text-[#717978] mb-3" />
          <h3 className="font-headline-sm text-lg text-[#0b3b3c] font-semibold mb-1">
            Không tìm thấy chuyến đi nào
          </h3>
          <p className="text-xs text-[#404848] max-w-sm mx-auto mb-6">
            Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm để xem danh sách hành trình của bạn.
          </p>
          <button
            onClick={() => {
              setActiveFilter('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-[#f5f3f0] hover:bg-[#eae8e5] text-[#0b3b3c] text-xs font-label-lg rounded-lg transition-colors"
          >
            Xóa bộ lọc
          </button>
        </div>
      )}
    </div>
  );
}
