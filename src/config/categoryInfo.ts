import type { Faq } from '@/lib/schema';

export interface CategoryInfo {
  intro: string;
  applications: string[];
  guideTitle: string;
  guideCols: [string, string];
  guide: { need: string; spec: string }[];
  why: { title: string; desc: string }[];
  faqs: Faq[];
}

export const categoryInfo: Record<string, CategoryInfo> = {
  'may-phat-dien': {
    intro:
      'PMC cho thuê máy phát điện công nghiệp từ 25kVA đến 1250kVA — các thương hiệu Nhật Bản và châu Âu như Mitsubishi, Cummins, Denyo, Komatsu, Hitachi, Perkins, MTU. Máy vỏ cách âm, sẵn kho, PMC tự giao lắp và vận hành tận công trình trên toàn miền Nam.',
    applications: [
      'Công trình xây dựng', 'Nhà máy & khu công nghiệp', 'Cảng biển & dầu khí',
      'Dự phòng cao ốc, bệnh viện', 'Sự kiện & hội chợ', 'Khu vực chưa có điện lưới',
    ],
    guideTitle: 'Gợi ý chọn công suất máy phát điện',
    guideCols: ['Nhu cầu sử dụng', 'Công suất gợi ý'],
    guide: [
      { need: 'Cửa hàng, văn phòng nhỏ, dự phòng nhẹ', spec: '25 – 50 kVA' },
      { need: 'Công trình nhỏ, nhà xưởng nhỏ', spec: '60 – 100 kVA' },
      { need: 'Nhà xưởng, tòa nhà cỡ vừa', spec: '150 – 300 kVA' },
      { need: 'Nhà máy, cao ốc, công trình lớn', spec: '350 – 550 kVA' },
      { need: 'KCN, cảng, lọc hóa dầu, tải rất lớn', spec: '687 – 1250 kVA' },
    ],
    why: [
      { title: 'Đủ dải 25 – 1250 kVA', desc: 'Tư vấn đúng công suất, tránh thừa/thiếu tải, tối ưu chi phí nhiên liệu.' },
      { title: 'Máy cách âm, vận hành êm', desc: 'Phù hợp bệnh viện, khách sạn, khu dân cư và nơi yêu cầu độ ồn thấp.' },
      { title: 'Tủ hòa đồng bộ đến 3200A', desc: 'Ghép song song nhiều tổ máy khi cần nguồn công suất lớn, dự phòng N+1.' },
      { title: 'Kỹ thuật trực theo máy 24/7', desc: 'Bảo dưỡng định kỳ, xử lý sự cố tại chỗ, không gián đoạn.' },
    ],
    faqs: [
      { q: 'Nên thuê máy phát điện công suất bao nhiêu?', a: 'Phụ thuộc tổng tải và loại tải (có động cơ khởi động lớn không). PMC khảo sát miễn phí rồi tư vấn công suất đúng — xem bảng gợi ý ở trên để ước lượng nhanh.' },
      { q: 'Giá thuê máy phát điện đã bao gồm nhiên liệu chưa?', a: 'Thường báo giá gồm máy, giao lắp và vận hành; nhiên liệu tính theo thực tế hoặc theo thỏa thuận. PMC sẽ nêu rõ trong báo giá để minh bạch chi phí.' },
      { q: 'Máy có cách âm không, chạy có ồn không?', a: 'Hầu hết máy của PMC là loại vỏ siêu cách âm, độ ồn thấp — phù hợp khu dân cư, bệnh viện, khách sạn và công trình trong đô thị.' },
      { q: 'PMC có cho thuê kèm tủ ATS / tủ hòa đồng bộ không?', a: 'Có. PMC cung cấp tủ ATS (tự động chuyển nguồn) và tủ hòa đồng bộ đến 3200A để ghép nhiều máy khi cần công suất lớn hoặc dự phòng.' },
    ],
  },
  'may-nen-khi': {
    intro:
      'PMC cho thuê máy nén khí trục vít và máy nén khí diesel di động: Airman, Denyo, Hitachi, Ingersoll Rand — lưu lượng từ 125 đến hơn 1300 cfm, áp suất 8 đến 15 bar. Kèm bình chứa khí, bộ sấy khí và đường ống theo nhu cầu.',
    applications: [
      'Phun cát, làm sạch bề mặt', 'Chạy dụng cụ khí nén', 'Thi công cơ khí & đóng tàu',
      'Thổi vệ sinh đường ống', 'Khoan, đục bê tông', 'Dầu khí & ngoài khơi',
    ],
    guideTitle: 'Gợi ý chọn máy nén khí',
    guideCols: ['Nhu cầu sử dụng', 'Lưu lượng / áp suất'],
    guide: [
      { need: 'Dụng cụ khí nén, vệ sinh nhẹ', spec: '125 – 175 cfm · 8 bar' },
      { need: 'Phun cát, thi công cơ khí', spec: '390 – 750 cfm · 8 – 12 bar' },
      { need: 'Phun cát công suất lớn, áp cao', spec: '750 – 850 cfm · 12 – 15 bar' },
      { need: 'Dự án lớn, nhiều điểm sử dụng', spec: '1300 cfm · 13 bar' },
    ],
    why: [
      { title: 'Đa dạng lưu lượng & áp suất', desc: 'Từ 125 đến 1300 cfm, 8 – 15 bar — đáp ứng mọi nhu cầu khí nén.' },
      { title: 'Máy Nhật bền, tiết kiệm dầu', desc: 'Airman, Denyo, Hitachi — vận hành ổn định, chi phí thấp.' },
      { title: 'Kèm bình chứa & sấy khí', desc: 'Ổn định áp suất, khí khô sạch, bảo vệ thiết bị hạ nguồn.' },
      { title: 'Giao lắp & hỗ trợ tận nơi', desc: 'PMC vận chuyển, đấu nối đường ống và hỗ trợ kỹ thuật tại công trường.' },
    ],
    faqs: [
      { q: 'Phun cát thì cần máy nén khí bao nhiêu cfm?', a: 'Phun cát thường cần lưu lượng lớn (từ 390cfm trở lên) và áp suất 8–12 bar tùy béc và quy mô. PMC tư vấn theo số béc và diện tích bề mặt cần xử lý.' },
      { q: 'Có thuê kèm bình chứa khí và bộ sấy khí không?', a: 'Có. PMC cho thuê kèm bình chứa khí (ổn áp) và bộ sấy khí (làm khô khí) để hệ thống hoạt động ổn định, bảo vệ thiết bị.' },
      { q: 'Máy nén khí chạy điện hay diesel?', a: 'PMC có cả hai: máy nén trục vít chạy điện (cố định, ồn thấp) và máy nén diesel di động (cơ động, không cần nguồn điện) — chọn theo điều kiện công trường.' },
    ],
  },
  'may-phun-rua-ap-luc-cao': {
    intro:
      'PMC cho thuê hệ thống phun rửa áp lực cao và siêu cao áp (UHP) từ 200 bar đến 2500 bar, cùng hệ thống thử áp đường ống Hydrotest và Gas booster. Thiết bị kèm kỹ thuật viên vận hành — chuyên xử lý cáu cặn, bóc sơn/gỉ và kiểm tra áp lực.',
    applications: [
      'Tẩy cáu cặn bồn bể, thiết bị', 'Làm sạch & thông đường ống', 'Bóc sơn, gỉ sét cứng đầu',
      'Thử áp đường ống (Hydrotest)', 'Vệ sinh công nghiệp', 'Bảo dưỡng nhà máy, dầu khí',
    ],
    guideTitle: 'Dải áp suất & ứng dụng',
    guideCols: ['Thiết bị', 'Áp suất / ứng dụng'],
    guide: [
      { need: 'Máy bắn nước áp lực cao', spec: '200 – 1000 bar · vệ sinh, tẩy rửa' },
      { need: 'Máy UHP siêu cao áp', spec: '1400 – 2500 bar · cáu cặn, sơn, gỉ' },
      { need: 'Hệ Hydrotest thử áp đường ống', spec: '6.000 – 30.000 psi' },
      { need: 'Gas booster kiểm tra áp khí', spec: '10.000 – 15.000 psi' },
    ],
    why: [
      { title: 'Dải áp 200 – 2500 bar', desc: 'Đủ cấp độ cho vệ sinh nhẹ đến tẩy cáu cặn/gỉ cứng đầu nhất.' },
      { title: 'Kèm kỹ thuật viên lành nghề', desc: 'UHP là công việc nguy hiểm — PMC cử người vận hành an toàn, đúng quy trình.' },
      { title: 'Hệ Hydrotest & Gas booster', desc: 'Thử áp đường ống, kiểm tra rò rỉ cho dự án dầu khí, đường ống gas.' },
      { title: 'Kinh nghiệm dự án dầu khí', desc: 'Đã triển khai UHP tại các dự án như PVD6 và nhiều nhà máy.' },
    ],
    faqs: [
      { q: 'UHP dùng để làm gì?', a: 'UHP (siêu cao áp, tới 2500 bar) dùng tẩy cáu cặn trong bồn bể/đường ống, bóc lớp sơn và gỉ bám chắc, làm sạch bề mặt kết cấu trước sơn phủ — hiệu quả hơn hẳn phun cát ở nhiều trường hợp.' },
      { q: 'Thuê UHP có kèm người vận hành không?', a: 'Có. Vì áp suất rất cao và nguy hiểm, PMC cử kỹ thuật viên được đào tạo vận hành theo đúng quy trình an toàn.' },
      { q: 'Hydrotest là gì, PMC có cho thuê không?', a: 'Hydrotest là thử áp lực đường ống bằng nước (6.000 – 30.000 psi) để kiểm tra độ kín và chịu áp. PMC cho thuê trọn hệ thống kèm chart recorder ghi biểu đồ áp.' },
    ],
  },
  'may-han': {
    intro:
      'PMC cho thuê máy hàn và máy phát hàn công nghiệp: máy hàn MIG/MAG, TIG và máy phát hàn Denyo chạy diesel (vừa hàn vừa phát điện) — phục vụ thi công kết cấu thép, cầu cảng, nhà xưởng và các công trình ngoài trời, giàn khoan không có nguồn điện sẵn.',
    applications: [
      'Hàn kết cấu thép', 'Thi công cầu cảng', 'Đóng & sửa tàu',
      'Công trình ngoài trời', 'Giàn khoan, dầu khí', 'Xử lý nước thải, đường ống',
    ],
    guideTitle: 'Gợi ý chọn máy hàn',
    guideCols: ['Nhu cầu sử dụng', 'Loại / dòng hàn'],
    guide: [
      { need: 'Hàn tôn mỏng, inox, chi tiết', spec: 'TIG 280A' },
      { need: 'Hàn kết cấu thép, năng suất cao', spec: 'MIG/MAG 350 – 500A' },
      { need: 'Công trường không có điện lưới', spec: 'Máy phát hàn Denyo 300A (diesel)' },
    ],
    why: [
      { title: 'MIG · TIG · máy phát hàn', desc: 'Đủ loại cho từng vật liệu và điều kiện thi công.' },
      { title: 'Vừa hàn vừa phát điện', desc: 'Máy phát hàn diesel cơ động, không cần nguồn điện sẵn — lý tưởng ngoài khơi.' },
      { title: 'Bền bỉ ngoài công trường', desc: 'Thiết bị chịu được môi trường thi công khắc nghiệt, nắng mưa.' },
      { title: 'Giao lắp tận nơi', desc: 'PMC vận chuyển và hỗ trợ kỹ thuật tại công trường.' },
    ],
    faqs: [
      { q: 'Máy phát hàn khác máy hàn thường thế nào?', a: 'Máy phát hàn chạy diesel, vừa tạo dòng hàn vừa phát điện — dùng được ở nơi không có điện lưới (ngoài trời, cầu cảng, giàn khoan). Máy hàn thường cần nguồn điện sẵn.' },
      { q: 'Nên chọn MIG hay TIG?', a: 'MIG/MAG năng suất cao, hợp hàn kết cấu thép dày; TIG cho mối hàn đẹp, sạch, hợp inox và tôn mỏng. PMC tư vấn theo vật liệu và yêu cầu mối hàn.' },
      { q: 'Có cho thuê kèm máy phát điện để chạy máy hàn không?', a: 'Có. PMC có thể cấp kèm máy phát điện phù hợp hoặc máy phát hàn tích hợp, tùy điều kiện công trường.' },
    ],
  },
};
