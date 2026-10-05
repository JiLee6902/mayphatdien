import type { Faq } from '@/lib/schema';

/** Site-wide rental FAQs — shown on homepage + equipment pages, and emitted as FAQPage schema. */
export const generalFaqs: Faq[] = [
  {
    q: 'Thuê thiết bị tối thiểu bao lâu?',
    a: 'PMC cho thuê linh hoạt theo ngày, tuần, tháng và dài hạn. Với các dự án ngắn ngày hoặc sự kiện, bên em vẫn nhận — liên hệ hotline để được tư vấn gói phù hợp nhất.',
  },
  {
    q: 'Giá thuê được tính như thế nào?',
    a: 'Giá phụ thuộc loại thiết bị, công suất và thời gian thuê. PMC khảo sát nhu cầu rồi báo giá trọn gói, minh bạch theo ngày/tuần/tháng — thuê càng dài đơn giá càng tốt.',
  },
  {
    q: 'PMC có giao lắp tận công trình không?',
    a: 'Có. PMC vận chuyển, lắp đặt, đấu nối, chạy thử và bàn giao tận công trình trên khắp miền Nam, bao gồm TP.HCM, Vũng Tàu, Đồng Nai, Bình Dương và Long An.',
  },
  {
    q: 'Có kỹ thuật viên vận hành đi kèm không?',
    a: 'Tùy yêu cầu, PMC hướng dẫn vận hành tại chỗ hoặc cử kỹ thuật viên trực vận hành trong suốt thời gian thuê, kèm bảo trì định kỳ.',
  },
  {
    q: 'Khi thiết bị gặp sự cố thì xử lý ra sao?',
    a: 'PMC hỗ trợ kỹ thuật 24/7, đội kỹ thuật cơ động có mặt nhanh. Trường hợp cần thiết sẽ bố trí thiết bị dự phòng để công trình không gián đoạn.',
  },
  {
    q: 'Thủ tục thuê thiết bị cần những gì?',
    a: 'Thủ tục đơn giản: liên hệ hotline/Zalo, PMC khảo sát và báo giá, ký hợp đồng thuê, sau đó giao lắp theo tiến độ đã thống nhất.',
  },
];
