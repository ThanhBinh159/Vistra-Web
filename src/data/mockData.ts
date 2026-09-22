export interface Trip {
  id: string;
  title: string;
  destination: string;
  duration: string;
  dates: string;
  travelers: string;
  budget: string;
  status: 'planning' | 'upcoming' | 'past';
  progress?: {
    current: number;
    total: number;
  };
  note?: string;
  coverImage: string;
  tags: string[];
}

export interface TravelDnaMetric {
  label: string;
  score: number;
  rating: string;
  icon: string;
}

export interface Destination {
  id: string;
  name: string;
  region: string;
  country: string;
  visualMatch: number;
  budgetMatch: number;
  seasonMatch: number;
  estimatedCost: string;
  duration: string;
  transport: {
    level: string;
    description: string;
    icon: string;
  };
  goldenHour: string;
  vibe: {
    title: string;
    icon: string;
  };
  rationale: string;
  coverImage: string;
  realityCheck: {
    confidence: number;
    expectationImage: string;
    expectationDesc: string;
    realityImage: string;
    realityDesc: string;
    keyPoints: string[];
  };
  bestMoments: {
    peakHours: string;
    sunDirection: string;
    weatherSuitability: number;
    crowdLevel: string;
    dailyForecast: { day: string; score: number }[];
  };
}

export interface Activity {
  id: string;
  timeStart: string;
  timeEnd: string;
  title: string;
  category: string;
  description: string;
  location: string;
  tags: string[];
  isLocked?: boolean;
  notes?: string;
  images?: string[];
}

export interface TransitItem {
  duration: string;
  type: string;
  distance: string;
  description: string;
}

export interface DayItinerary {
  dayNumber: number;
  dayOfWeek: string;
  date: string;
  title: string;
  pace: 'Thư thái' | 'Cân bằng' | 'Bận rộn' | 'Nhẹ nhàng';
  highlight: string;
  weather: string;
  activities: (Activity | { isTransit: true; transit: TransitItem })[];
}

export const MOCK_TRIPS: Trip[] = [
  {
    id: 'sapa-cloud-hunt',
    title: 'Sa Pa Mùa Mây & Ruộng Bậc Thang',
    destination: 'Sa Pa, Lào Cai',
    duration: '4 ngày / 3 đêm',
    dates: '18–21 Th11 (Cuối thu)',
    travelers: '2 Người lớn',
    budget: '7.400.000 VND / người (Tổng 14.8M VND)',
    status: 'planning',
    progress: { current: 3, total: 4 },
    note: 'Cần chốt giờ đón limousine & vé xe lửa leo núi Mường Hoa',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcc9y9R1pM5QpQ534ZkG0h4lJ9H6m0iG_U7yqC4f1k3_B0c-v5m6L8m7K0d8=w1200',
    tags: ['Núi non', 'Săn mây', 'Nghỉ dưỡng', 'Bản làng'],
  },
  {
    id: 'moc-chau-autumn',
    title: 'Cao nguyên Mộc Châu Mùa Cải Trắng',
    destination: 'Mộc Châu, Sơn La',
    duration: '3 ngày / 2 đêm',
    dates: '05–07 Th12',
    travelers: '4 Người lớn',
    budget: '5.200.000 VND / người',
    status: 'planning',
    progress: { current: 1, total: 3 },
    note: 'Đang phân tích thời tiết vi khí hậu đồi chè và bản Pa Phách',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPN5yjZ4_2ddr4jbSd40ZJyTlXybQh97VY5fXwC9yQZpYjZ2_OlrtKKKKlSTVAs8kGb29CSu_0FD9TT3XtpN8DS3eOGJIEc8Hfolwsv9NJNBg-fzNCTXMRC6XepNBLp8jiMOgU_B9pbUx7sdT2Zxbt-kZIfGDM3xsW5DCkglFVtg0GHPtF1vDWrjiK2F08F5ALXUGVOKJcyVXvEG2YRY9IIwmeU5ynP7wjBVOShMLL7u70IDnT5eozVw',
    tags: ['Hoa cải', 'Thung lũng', 'Cắm trại'],
  },
  {
    id: 'dalat-pine-hills',
    title: 'Đà Lạt Sương Mù & Di Sản Biệt Thự Pháp',
    destination: 'Đà Lạt, Lâm Đồng',
    duration: '4 ngày / 3 đêm',
    dates: '28–31 Th10',
    travelers: '2 Người lớn',
    budget: '6.900.000 VND / người',
    status: 'upcoming',
    note: 'Đã hoàn tất vé bay VN128 & Ana Mandara Villas',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBId3SEsE_eVNlUFOMkPBrr_5xjm109Sz2r1nwrXTj0qPo7JBw9hsO6oDiqXIu6jUtUaQNQJBK6SfYQa7VM1sHJrRP-o1vM3Ud7XiDtuXAgiwaroG9tY39vYc0qYLfHE3bvMCsfBj-XqjjUiDC2-Eh7BTFWd8wxt0OI-tbivDsgE9eCjh6vZpCKblKWVXoBt2LBNwLdwXHYYlRfnDcqqttso7lj42EIWC0lCGkLtkhsErLA-RIr5YyqBg',
    tags: ['Đồi thông', 'Ẩm thực', 'Cổ điển'],
  },
  {
    id: 'ninh-binh-heritage',
    title: 'Tràng An Sơn Thủy & Cố Đô Hoa Lư',
    destination: 'Ninh Bình',
    duration: '2 ngày / 1 đêm',
    dates: '14–15 Th08',
    travelers: '2 Người lớn',
    budget: '3.800.000 VND / người',
    status: 'past',
    note: 'Chuyến đi hoàn tất trọn vẹn, đã lưu trữ nhật ký',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw7fycPldv6zjzmXnR_P-Y6m8EPzMPk_w_W3ElQp0yObpBAqZmYUSgldO_JtqNPNIfrrxPfpa0IYxfQi1MVIZjAkWdGBmlCE3WctbelvGM3saJCy0FjGtLpqxIKt2nk6UzAsSLPAmMuC_HuRkBHN_38GunDsJIAisl-Oy5w5mOYZuVJSWG5BjUnXlJ2fb8gjP0-poQNhrZvKMpWCivd2QzVcz01RDCVs2S-qKDufkPlLRQiM7Vmlte-Q',
    tags: ['Di sản', 'Chèo thuyền', 'Hang động'],
  },
];

export const MOCK_TRAVEL_DNA: TravelDnaMetric[] = [
  { label: 'Thiên nhiên & Hoang dã', score: 94, rating: 'Rất cao', icon: 'forest' },
  { label: 'Chất lượng Nhiếp ảnh', score: 92, rating: 'Rất cao', icon: 'photo_camera' },
  { label: 'Đồi núi & Vùng cao', score: 90, rating: 'Rất cao', icon: 'terrain' },
  { label: 'Thanh tĩnh & Yên bình', score: 88, rating: 'Cao', icon: 'volume_off' },
  { label: 'Mát mẻ & Ôn hòa', score: 85, rating: 'Cao', icon: 'thermostat' },
  { label: 'Khám phá nhẹ nhàng', score: 54, rating: 'Trung bình', icon: 'explore' },
  { label: 'Sang trọng tối thượng', score: 28, rating: 'Thấp', icon: 'diamond' },
  { label: 'Thích chỗ đông vui', score: 20, rating: 'Thấp', icon: 'groups' },
  { label: 'Cuộc sống về đêm', score: 15, rating: 'Thấp', icon: 'nightlife' },
];

export const MOCK_DESTINATIONS: Destination[] = [
  {
    id: 'sapa',
    name: 'Sa Pa, Lào Cai',
    region: 'Tây Bắc Bộ',
    country: 'Việt Nam',
    visualMatch: 94,
    budgetMatch: 91,
    seasonMatch: 96,
    estimatedCost: '7.400.000 VND',
    duration: '4 ngày / 3 đêm',
    transport: {
      level: 'Trung bình',
      description: '6h xe limousine cao tốc hoặc tàu hỏa đêm',
      icon: 'swap_driving_apps',
    },
    goldenHour: '18–22 Th11 (Cuối thu)',
    vibe: {
      title: 'Sương sớm dày đặc & Thung lũng mây',
      icon: 'cloud',
    },
    rationale: 'Khả năng xuất hiện sương mù biển mây rất cao vào cuối tháng 11, các góc chụp thung lũng Mường Hoa ngoạn mục, bản làng Tả Van giữ được nét tĩnh lặng bình yên.',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPN5yjZ4_2ddr4jbSd40ZJyTlXybQh97VY5fXwC9yQZpYjZ2_OlrtKKKKlSTVAs8kGb29CSu_0FD9TT3XtpN8DS3eOGJIEc8Hfolwsv9NJNBg-fzNCTXMRC6XepNBLp8jiMOgU_B9pbUx7sdT2Zxbt-kZIfGDM3xsW5DCkglFVtg0GHPtF1vDWrjiK2F08F5ALXUGVOKJcyVXvEG2YRY9IIwmeU5ynP7wjBVOShMLL7u70IDnT5eozVw',
    realityCheck: {
      confidence: 84,
      expectationImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPN5yjZ4_2ddr4jbSd40ZJyTlXybQh97VY5fXwC9yQZpYjZ2_OlrtKKKKlSTVAs8kGb29CSu_0FD9TT3XtpN8DS3eOGJIEc8Hfolwsv9NJNBg-fzNCTXMRC6XepNBLp8jiMOgU_B9pbUx7sdT2Zxbt-kZIfGDM3xsW5DCkglFVtg0GHPtF1vDWrjiK2F08F5ALXUGVOKJcyVXvEG2YRY9IIwmeU5ynP7wjBVOShMLL7u70IDnT5eozVw',
      expectationDesc: 'Khung cảnh biển mây cô độc trên ban công gỗ cổ điển',
      realityImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIT1JIDghDUYdb71JnGDzytu8VwAQgW20eSCqJM7TZZWgcZw9K2T17R4v3V8juWKuK4XBIK8I1iqBrZYKCRhrQo1iuE1Vcl1rNVdy2cZ5xm2BkyRHFAbG73m4YtCjKhLQY1WzcHj9vWJx1RfilbVwByJH3DriFXb70dnOq3UTztLWy_OgE0R0sWEtv6usp5vAW-n3h_ork5EPutIJwK1ffapj9W1va7qgvoYtcIDMco8u3ED5GLekbTg',
      realityDesc: 'Ruộng bậc thang cuối thu chân thực, sương sớm thường tan sau 08:30',
      keyPoints: [
        'Sương mù phụ thuộc nhiều vào hiện tượng nghịch nhiệt sáng sớm; thời điểm đẹp nhất 05:30 – 07:00.',
        'Các góc ngắm cảnh đẹp nhất tập trung quanh đèo Ô Quy Hồ và các nếp nhà Tả Van trên cao.',
        'Đường sỏi dốc giữa các bản làng; khuyến nghị mang giày đế gai bám dốc và gửi hành lý xe hỗ trợ.',
      ],
    },
    bestMoments: {
      peakHours: '05:30 – 07:00 (Săn mây bình minh)',
      sunDirection: 'Ánh nắng xiên từ phía Đông Bắc chiếu thung lũng',
      weatherSuitability: 82,
      crowdLevel: 'Thấp trước 07:00 sáng tại các đỉnh cao',
      dailyForecast: [
        { day: '18 Th11', score: 89 },
        { day: '19 Th11', score: 74 },
        { day: '20 Th11', score: 51 },
        { day: '21 Th11', score: 79 },
      ],
    },
  },
  {
    id: 'dalat',
    name: 'Đà Lạt, Lâm Đồng',
    region: 'Tây Nguyên',
    country: 'Việt Nam',
    visualMatch: 84,
    budgetMatch: 96,
    seasonMatch: 79,
    estimatedCost: '6.900.000 VND',
    duration: '4 ngày / 3 đêm',
    transport: {
      level: 'Dễ dàng',
      description: 'Bay thẳng 1h45 từ Hà Nội hoặc 50p từ TP.HCM',
      icon: 'flight_takeoff',
    },
    goldenHour: '15–30 Th11 (Chớm đông)',
    vibe: {
      title: 'Đồi thông reo & Hồ nước tĩnh lặng',
      icon: 'forest',
    },
    rationale: 'Thung lũng thông xanh bao phủ, biệt thự di sản Pháp cổ kính, tiết trời chớm đông se lạnh rất hợp đi dạo bộ và thưởng thức cà phê ngắm cảnh.',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBId3SEsE_eVNlUFOMkPBrr_5xjm109Sz2r1nwrXTj0qPo7JBw9hsO6oDiqXIu6jUtUaQNQJBK6SfYQa7VM1sHJrRP-o1vM3Ud7XiDtuXAgiwaroG9tY39vYc0qYLfHE3bvMCsfBj-XqjjUiDC2-Eh7BTFWd8wxt0OI-tbivDsgE9eCjh6vZpCKblKWVXoBt2LBNwLdwXHYYlRfnDcqqttso7lj42EIWC0lCGkLtkhsErLA-RIr5YyqBg',
    realityCheck: {
      confidence: 88,
      expectationImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBId3SEsE_eVNlUFOMkPBrr_5xjm109Sz2r1nwrXTj0qPo7JBw9hsO6oDiqXIu6jUtUaQNQJBK6SfYQa7VM1sHJrRP-o1vM3Ud7XiDtuXAgiwaroG9tY39vYc0qYLfHE3bvMCsfBj-XqjjUiDC2-Eh7BTFWd8wxt0OI-tbivDsgE9eCjh6vZpCKblKWVXoBt2LBNwLdwXHYYlRfnDcqqttso7lj42EIWC0lCGkLtkhsErLA-RIr5YyqBg',
      expectationDesc: 'Đồi thông vắng người bồng bềnh trong nắng sớm',
      realityImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw7fycPldv6zjzmXnR_P-Y6m8EPzMPk_w_W3ElQp0yObpBAqZmYUSgldO_JtqNPNIfrrxPfpa0IYxfQi1MVIZjAkWdGBmlCE3WctbelvGM3saJCy0FjGtLpqxIKt2nk6UzAsSLPAmMuC_HuRkBHN_38GunDsJIAisl-Oy5w5mOYZuVJSWG5BjUnXlJ2fb8gjP0-poQNhrZvKMpWCivd2QzVcz01RDCVs2S-qKDufkPlLRQiM7Vmlte-Q',
      realityDesc: 'Cuối tuần khu vực trung tâm khá đông đúc, nên ở khu vực hồ Tuyền Lâm',
      keyPoints: [
        'Mùa hoa dã quỳ và cỏ hồng nở rộ, tạo cảnh sắc lãng mạn nhưng thu hút lượng khách lớn.',
        'Nhiệt độ dao động 14°C - 23°C, trời hanh khô, nắng sớm đẹp nhưng sương mù ít đặc bằng Sa Pa.',
        'Di chuyển bằng taxi hoặc xe tay ga rất thuận tiện, địa hình thoai thoải dễ thích nghi.',
      ],
    },
    bestMoments: {
      peakHours: '06:00 – 08:00 (Nắng sớm đồi thông)',
      sunDirection: 'Ánh nắng vàng óng xuyên qua tán thông râm mát',
      weatherSuitability: 88,
      crowdLevel: 'Trung bình, đông tại trung tâm sau 09:00',
      dailyForecast: [
        { day: '18 Th11', score: 85 },
        { day: '19 Th11', score: 88 },
        { day: '20 Th11', score: 79 },
        { day: '21 Th11', score: 82 },
      ],
    },
  },
  {
    id: 'mucangchai',
    name: 'Mù Cang Chải, Yên Bái',
    region: 'Tây Bắc Bộ',
    country: 'Việt Nam',
    visualMatch: 91,
    budgetMatch: 95,
    seasonMatch: 72,
    estimatedCost: '5.800.000 VND',
    duration: '4 ngày / 3 đêm',
    transport: {
      level: 'Thử thách',
      description: '7h ô tô qua đèo Khau Phạ quanh co hiểm trở',
      icon: 'terrain',
    },
    goldenHour: 'Cuối Th9 – Giữa Th10 (Lúa chín)',
    vibe: {
      title: 'Kỳ quan ruộng bậc thang & Hùng vĩ hoang sơ',
      icon: 'landscape',
    },
    rationale: 'Địa hình ruộng bậc thang xếp tầng đẹp nhất cả nước, văn hóa bản địa nguyên bản, chi phí ăn ở cực kỳ tiết kiệm.',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCCq4LoWJv6LIWDiWBi2YoJT_8MBz1oXRtey5TupfI-I_ITtEG3JQaokAyT-ADtXxZyF6xQXMvJEKQqHbYe5Dl4ST0AbMIel6Fwv9j8RmUyJ1t2FjrTVEz-7WLFEEEESRTawdQufbO3E9D6-3rWDTKxW_GlTsYkcVL6Z8MlzYe3wpBoAty1Dn2dp92he6lD5rA6IT2x53nhiTIcBZ31Mu5E48oUyrWIM8nVwicxAykmhYIRotTl-as8w',
    realityCheck: {
      confidence: 90,
      expectationImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCCq4LoWJv6LIWDiWBi2YoJT_8MBz1oXRtey5TupfI-I_ITtEG3JQaokAyT-ADtXxZyF6xQXMvJEKQqHbYe5Dl4ST0AbMIel6Fwv9j8RmUyJ1t2FjrTVEz-7WLFEEEESRTawdQufbO3E9D6-3rWDTKxW_GlTsYkcVL6Z8MlzYe3wpBoAty1Dn2dp92he6lD5rA6IT2x53nhiTIcBZ31Mu5E48oUyrWIM8nVwicxAykmhYIRotTl-as8w',
      expectationDesc: 'Sóng lúa vàng óng ả phủ kín khắp các ngọn đồi',
      realityImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIT1JIDghDUYdb71JnGDzytu8VwAQgW20eSCqJM7TZZWgcZw9K2T17R4v3V8juWKuK4XBIK8I1iqBrZYKCRhrQo1iuE1Vcl1rNVdy2cZ5xm2BkyRHFAbG73m4YtCjKhLQY1WzcHj9vWJx1RfilbVwByJH3DriFXb70dnOq3UTztLWy_OgE0R0sWEtv6usp5vAW-n3h_ork5EPutIJwK1ffapj9W1va7qgvoYtcIDMco8u3ED5GLekbTg',
      realityDesc: 'Sang tháng 11 lúa đã gặt hết, chỉ còn ruộng nước đổ ải hoặc hoa tam giác mạch rải rác',
      keyPoints: [
        'Mùa lúa vàng cao điểm rơi vào cuối tháng 9 đến 15 tháng 10 hàng năm.',
        'Đến vào cuối tháng 11 sẽ không còn lúa chín mà chuyển sang không khí tĩnh mịch của mùa đông vùng cao.',
        'Dịch vụ lưu trú chủ yếu là homestay mộc mạc của đồng bào Thái, H’Mông.',
      ],
    },
    bestMoments: {
      peakHours: '16:00 – 17:30 (Hoàng hôn đèo Khau Phạ)',
      sunDirection: 'Hoàng hôn đỏ rực buông xuống thung lũng Cao Phạ',
      weatherSuitability: 68,
      crowdLevel: 'Rất vắng vào tháng 11 (ngoài mùa lúa chín)',
      dailyForecast: [
        { day: '18 Th11', score: 65 },
        { day: '19 Th11', score: 68 },
        { day: '20 Th11', score: 60 },
        { day: '21 Th11', score: 62 },
      ],
    },
  },
];

export const MOCK_PLANNER_DAYS: DayItinerary[] = [
  {
    dayNumber: 1,
    dayOfWeek: 'Thứ Hai',
    date: '18 Th11',
    title: 'Đến nơi & Thích nghi khí hậu vùng cao',
    pace: 'Thư thái',
    highlight: 'Hành trình ngắm cảnh cao tốc & Dạo bước bản Cát Cát',
    weather: 'Sa Pa 16°C · Trời mát, có sương mù nhẹ về chiều',
    activities: [
      {
        id: 'd1-a1',
        timeStart: '07:00',
        timeEnd: '12:00',
        title: 'Di chuyển Limousine VIP DCar từ Hà Nội tới Sa Pa',
        category: 'Di chuyển',
        description: 'Đón tận nơi tại khách sạn Hà Nội, xe limousine ghế massage chạy qua cao tốc Nội Bài - Lào Cai ngắm nhìn cảnh đồng bằng chuyển dần sang núi non hùng vĩ.',
        location: 'Hà Nội &rarr; Sa Pa (295 km)',
        tags: ['Limousine riêng', 'Nghỉ giữa chặng'],
        isLocked: true,
      },
      {
        isTransit: true,
        transit: {
          duration: '15 phút',
          type: 'Ô tô',
          distance: '2.5 km',
          description: 'Từ trung tâm Sa Pa về Hotel de la Coupole nhận phòng',
        },
      },
      {
        id: 'd1-a2',
        timeStart: '12:30',
        timeEnd: '14:00',
        title: 'Bữa trưa ẩm thực Tây Bắc & Thưởng trà thảo mộc',
        category: 'Ẩm thực',
        description: 'Thịt lợn bản nướng than hoa mắc khén, cá suối chiên giòn và canh rau cải mèo ngọt thanh tại nhà hàng Chợ Tình Quán.',
        location: 'Đường Fansipan, Sa Pa',
        tags: ['Đặc sản Tây Bắc', 'Không gian ấm cúng'],
      },
      {
        id: 'd1-a3',
        timeStart: '15:00',
        timeEnd: '17:30',
        title: 'Dạo bước ngắm guồng nước suối bản Cát Cát',
        category: 'Văn hóa',
        description: 'Chặng đi bộ nhẹ nhàng thích nghi địa hình qua các bậc đá lịch sử, guồng nước tưới ruộng bậc thang và xưởng nhuộm chàm truyền thống của người H’Mông.',
        location: 'Bản Cát Cát, Sa Pa',
        tags: ['1.5h đi bộ', 'Guồng nước gỗ', 'Nhiếp ảnh'],
      },
    ],
  },
  {
    dayNumber: 2,
    dayOfWeek: 'Thứ Ba',
    date: '19 Th11',
    title: 'Núi non & Mây ngàn',
    pace: 'Bận rộn',
    highlight: 'Đỉnh điểm săn mây đèo Ô Quy Hồ & Làng dệt Tả Van',
    weather: 'Sa Pa 14°C · Sương mù dày đặc sáng sớm, hửng nắng lúc 10:30',
    activities: [
      {
        id: 'd2-a1',
        timeStart: '05:30',
        timeEnd: '07:30',
        title: 'Săn biển mây bình minh tại Đèo Ô Quy Hồ & Cổng Trời',
        category: 'Nhiếp ảnh & Cảnh quan',
        description: 'Xuất phát sớm vượt cung đèo cao 2.035m đón khoảnh khắc biển mây bồng bềnh cuộn tràn qua khe núi Hoàng Liên Sơn khi bình minh ló rạng.',
        location: 'Đèo Ô Quy Hồ, Lai Châu / Sa Pa',
        tags: ['Đỉnh điểm săn mây', 'Độ cao 2.035m', 'Góc nhìn 360°'],
        isLocked: true,
      },
      {
        isTransit: true,
        transit: {
          duration: '35 phút',
          type: 'Ô tô đường đèo',
          distance: '18.5 km',
          description: 'Hạ độ cao từ đèo Ô Quy Hồ về thung lũng Mường Hoa',
        },
      },
      {
        id: 'd2-a2',
        timeStart: '08:30',
        timeEnd: '10:00',
        title: 'Bữa sáng phở nghệ nhân & Cà phê bên suối Mường Hoa',
        category: 'Ẩm thực',
        description: 'Thưởng thức phở bắp bò thảo quả ấm nóng và nhâm nhi tách cà phê Arabica bản địa ngắm nhìn dòng suối róc rách trong làn sương sớm tan dần.',
        location: 'Lá Dao Spa & Coffee, Bản Tả Van',
        tags: ['Bên suối đá', 'Cà phê đặc sản'],
      },
      {
        isTransit: true,
        transit: {
          duration: '20 phút',
          type: 'Đi bộ đường mòn',
          distance: '1.2 km',
          description: 'Men theo lối đá lát mộc mạc nối giữa bản Tả Van và Lao Chải',
        },
      },
      {
        id: 'd2-a3',
        timeStart: '10:30',
        timeEnd: '12:30',
        title: 'Trải nghiệm dệt lanh & Vẽ sáp ong cùng nghệ nhân Giàng Thị Mẩy',
        category: 'Thủ công mỹ nghệ',
        description: 'Tìm hiểu quy trình tước sợi lanh tự nhiên, nhuộm chàm cổ truyền và tự tay vẽ họa tiết sáp ong truyền thống trên tấm thổ cẩm kỷ niệm.',
        location: 'Xưởng dệt H’Mông Xanh, Tả Van',
        tags: ['Văn hóa bản địa', 'Trải nghiệm thực tế'],
      },
      {
        id: 'd2-a4',
        timeStart: '13:00',
        timeEnd: '15:00',
        title: 'Bữa trưa thịt gà đen hầm nấm rừng & Nghỉ ngơi tại Ecolodge',
        category: 'Ẩm thực & Thư giãn',
        description: 'Bữa ăn thịnh soạn với gà đen bản địa hầm nấm hương tự nhiên, ngọn su su xào tỏi và ngắm toàn cảnh thung lũng mây trôi lững lờ.',
        location: 'Topas Riverside Lodge, Tả Van',
        tags: ['Thực dưỡng hữu cơ', 'Tầm nhìn ngoạn mục'],
      },
    ],
  },
  {
    dayNumber: 3,
    dayOfWeek: 'Thứ Tư',
    date: '20 Th11',
    title: 'Thác nước & Đỉnh Fansipan huyền thoại',
    pace: 'Cân bằng',
    highlight: 'Chinh phục nóc nhà Đông Dương bằng cáp treo 3 dây',
    weather: 'Fansipan 8°C - 12°C · Gió mạnh, trời trong nắng vàng',
    activities: [
      {
        id: 'd3-a1',
        timeStart: '08:30',
        timeEnd: '12:00',
        title: 'Tàu hỏa leo núi Mường Hoa & Cáp treo Fansipan Legend',
        category: 'Tham quan',
        description: 'Đi tàu hỏa ngắm hoa thung lũng rồi chuyển tiếp cáp treo vượt qua biển mây lên quần thể tâm linh và đỉnh cột mốc 3.143m Fansipan.',
        location: 'Đỉnh Fansipan (3.143m)',
        tags: ['Nóc nhà Đông Dương', 'Tàu hỏa cổ điển'],
      },
      {
        id: 'd3-a2',
        timeStart: '12:30',
        timeEnd: '14:00',
        title: 'Bữa trưa lẩu cá hồi Vân Bàn nướng ngói',
        category: 'Ẩm thực',
        description: 'Lẩu cá hồi tươi nuôi tại suối lạnh Thác Bạc nấu kèm măng cay và các loại nấm rừng Tây Bắc đặc trưng.',
        location: 'Khu du lịch Thác Bạc',
        tags: ['Cá hồi Sa Pa', 'Măng cay bản địa'],
      },
      {
        id: 'd3-a3',
        timeStart: '15:00',
        timeEnd: '17:30',
        title: 'Tắm lá thuốc thảo mộc Dao Đỏ tại bản Tả Phìn',
        category: 'Sức khỏe & Thư giãn',
        description: 'Ngâm mình trong bồn gỗ pơ mu với nước thuốc nấu từ hơn 30 loại thảo dược bí truyền của người Dao Đỏ giúp phục hồi thể lực sau chặng leo núi.',
        location: 'Hợp tác xã Thảo Mộc Dao Đỏ, Tả Phìn',
        tags: ['Trị liệu cổ truyền', 'Phục hồi sức khỏe'],
      },
    ],
  },
  {
    dayNumber: 4,
    dayOfWeek: 'Thứ Năm',
    date: '21 Th11',
    title: 'Chợ phiên & Khởi hành về Hà Nội',
    pace: 'Nhẹ nhàng',
    highlight: 'Mua quà lưu niệm đặc sản & Xe Limousine hồi hương',
    weather: 'Sa Pa 17°C · Nắng nhẹ chan hòa khắp thị trấn',
    activities: [
      {
        id: 'd4-a1',
        timeStart: '08:00',
        timeEnd: '10:30',
        title: 'Dạo chợ phiên trung tâm Sa Pa & Chọn quà đặc sản',
        category: 'Mua sắm',
        description: 'Lựa chọn thịt trâu gác bếp chuẩn Tây Bắc, nấm hương rừng khô, mật ong hoa bạc hà và mứt mận Tả Van làm quà biếu.',
        location: 'Chợ Mới Sa Pa, Đường Lương Đình Của',
        tags: ['Đặc sản Tây Bắc', 'Quà lưu niệm'],
      },
      {
        id: 'd4-a2',
        timeStart: '13:00',
        timeEnd: '18:00',
        title: 'Xe Limousine đón tại khách sạn trở về Hà Nội',
        category: 'Di chuyển',
        description: 'Tài xế Nguyễn Văn Hùng hỗ trợ sắp xếp hành lý chu đáo, di chuyển an toàn xuôi cao tốc Lào Cai về lại thủ đô.',
        location: 'Sa Pa &rarr; Hà Nội (Kết thúc hành trình)',
        tags: ['Về Hà Nội', 'Kết thúc trọn vẹn'],
      },
    ],
  },
];

export const MOCK_COST_BREAKDOWN = [
  { category: 'Lưu trú cao cấp (3 đêm)', detail: 'Hotel de la Coupole & Topas Ecolodge', amount: '6.200.000 VND', percentage: 44 },
  { category: 'Di chuyển riêng', detail: 'Limousine khứ hồi VIP + Xe riêng địa phương', amount: '4.500.000 VND', percentage: 32 },
  { category: 'Ẩm thực nghệ nhân', detail: '8 bữa chính + Cà phê đặc sản thung lũng', amount: '2.300.000 VND', percentage: 16 },
  { category: 'Vé tham quan & Trải nghiệm', detail: 'Cáp treo Fansipan, tàu hỏa Mường Hoa, dệt lanh', amount: '1.250.000 VND', percentage: 8 },
];
