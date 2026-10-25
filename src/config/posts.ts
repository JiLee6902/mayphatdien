import type { PortableTextBlock } from '@portabletext/types';

export const postHref = (slug: string) => `/tin-tuc/${slug}/`;

export interface Post {
  slug: string;
  title: string;
  date: string; // display string, e.g. "15/07/2025"
  excerpt: string;
  image: string;
  body?: PortableTextBlock[]; // rich text (CMS only)
}

// --- Portable Text builders (keep article bodies readable below) -------------
let _k = 0;
const key = () => `b${_k++}`;

const span = (text: string, marks: string[] = []) => ({
  _type: 'span' as const,
  _key: key(),
  text,
  marks,
});

// Paragraph, optionally with a leading bold lead-in.
const p = (text: string, lead?: string): PortableTextBlock =>
  ({
    _type: 'block',
    _key: key(),
    style: 'normal',
    markDefs: [],
    children: lead ? [span(lead, ['strong']), span(text)] : [span(text)],
  }) as unknown as PortableTextBlock;

const h2 = (text: string): PortableTextBlock =>
  ({
    _type: 'block',
    _key: key(),
    style: 'h2',
    markDefs: [],
    children: [span(text)],
  }) as unknown as PortableTextBlock;

const li = (text: string): PortableTextBlock =>
  ({
    _type: 'block',
    _key: key(),
    style: 'normal',
    listItem: 'bullet',
    level: 1,
    markDefs: [],
    children: [span(text)],
  }) as unknown as PortableTextBlock;

// Real articles seeded from chothuethietbipmc.com (static fallback when the
// CMS has no `post` documents yet).
export const posts: Post[] = [
  {
    slug: 'thue-may-phat-dien-may-phat-han-du-an-dau-khi-ngoai-khoi',
    title: 'Thuê máy phát điện & máy phát hàn cho dự án dầu khí ngoài khơi',
    date: '24/10/2026',
    excerpt:
      'Môi trường dầu khí ngoài khơi yêu cầu khắt khe về an toàn, độ ổn định và khả năng vận hành dài ngày. PMC đã cấp nguồn cho các giàn Kình Ngư, Lạc Đà Vàng, POS.',
    image: '/images/projects/gian-khoan-kinh-ngu/hero.jpg',
    body: [
      p(
        'Trên các giàn khoan và bãi chế tạo kết cấu dầu khí, nguồn điện và dòng hàn không được phép gián đoạn. Một sự cố nhỏ cũng có thể làm chậm cả tiến độ dự án trị giá hàng trăm tỷ. Vì vậy, thiết bị cấp nguồn phải thật sự tin cậy và được vận hành bởi đội kỹ thuật kinh nghiệm.',
      ),
      h2('Vì sao dự án dầu khí cần thiết bị chuyên dụng'),
      li('Vận hành liên tục, dài ngày trong điều kiện thời tiết khắc nghiệt.'),
      li('Yêu cầu an toàn nghiêm ngặt (HSE), tiếp địa và chống cháy nổ đúng chuẩn.'),
      li('Máy phát hàn cơ động — vừa hàn vừa phát điện ở nơi không có điện lưới.'),
      li('Thiết bị dạng container chịu được môi trường biển, dễ cẩu lắp.'),
      h2('Kinh nghiệm của PMC'),
      p(
        'PMC đã cấp máy phát điện và máy phát hàn cho nhiều dự án dầu khí: giàn Kình Ngư Trắng & Nam Kình Ngư, Lạc Đà Vàng (PTSC M&C), giàn POS, cùng các cảng dịch vụ như PTSC Phú Mỹ. Thiết bị đa dạng công suất đến 1250kVA, có kỹ thuật viên trực máy 24/7.',
      ),
      p(
        'Liên hệ PMC để được khảo sát và tư vấn giải pháp cấp nguồn cho công trình dầu khí — đúng công suất, an toàn và đúng tiến độ.',
      ),
    ],
  },
  {
    slug: 'uhp-la-gi-ung-dung-phun-rua-sieu-cao-ap-2500bar',
    title: 'UHP là gì? Ứng dụng phun rửa siêu cao áp đến 2500 bar',
    date: '18/10/2026',
    excerpt:
      'Phun rửa siêu cao áp (UHP) tẩy cáu cặn, bóc sơn và gỉ cứng đầu hiệu quả hơn phun cát trong nhiều trường hợp, lại sạch và ít bụi. Tìm hiểu nguyên lý và ứng dụng.',
    image: '/images/equipment/uhp-densin-c1400.jpg',
    body: [
      p(
        'UHP (Ultra-High Pressure) là công nghệ phun nước ở áp suất siêu cao — từ 1.400 đến 2.500 bar, thậm chí hơn. Với áp lực lớn như vậy, tia nước đủ sức bóc tách lớp sơn, gỉ sét, cáu cặn bám chắc mà không cần hóa chất hay cát.',
      ),
      h2('Ưu điểm so với phun cát'),
      li('Không phát sinh bụi cát độc hại, thân thiện môi trường hơn.'),
      li('Làm sạch được bên trong đường ống, bồn bể, khe hẹp.'),
      li('Không làm biến dạng bề mặt kim loại mỏng.'),
      li('Thu gom và xử lý chất thải dễ hơn.'),
      h2('Ứng dụng phổ biến'),
      li('Tẩy cáu cặn trong bồn bể, thiết bị trao đổi nhiệt.'),
      li('Làm sạch và thông đường ống công nghiệp.'),
      li('Bóc sơn, gỉ sét, chuẩn bị bề mặt trước khi sơn phủ.'),
      li('Vệ sinh kết cấu trong nhà máy và dầu khí.'),
      h2('Lưu ý an toàn'),
      p(
        'UHP là công việc nguy hiểm: tia nước áp suất cao có thể gây thương tích nghiêm trọng. PMC luôn cử kỹ thuật viên được đào tạo vận hành theo đúng quy trình an toàn, kèm đầy đủ thiết bị bảo hộ. Ngoài máy UHP, PMC còn cho thuê hệ thống thử áp Hydrotest và Gas booster để kiểm tra đường ống.',
      ),
    ],
  },
  {
    slug: 'cach-chon-may-nen-khi-theo-cfm-va-ap-suat',
    title: 'Cách chọn máy nén khí theo lưu lượng (cfm) và áp suất (bar)',
    date: '12/10/2026',
    excerpt:
      'Chọn sai lưu lượng hoặc áp suất khiến thiết bị chạy yếu hoặc lãng phí nhiên liệu. Hướng dẫn chọn máy nén khí đúng nhu cầu công trình.',
    image: '/images/equipment/mnk-airman-pdsf830s.jpg',
    body: [
      p(
        'Hai thông số quan trọng nhất của máy nén khí là lưu lượng (cfm hoặc m³/phút) và áp suất (bar). Chọn đúng cả hai mới đảm bảo thiết bị hạ nguồn hoạt động ổn định mà không tốn nhiên liệu vô ích.',
      ),
      h2('Lưu lượng (cfm) — đủ khí hay không'),
      p(
        'Lưu lượng là lượng khí máy cung cấp mỗi phút. Hãy cộng nhu cầu khí của tất cả thiết bị sẽ dùng cùng lúc, rồi cộng thêm 20–30% dự phòng. Thiếu cfm, thiết bị sẽ chạy yếu và ngắt quãng.',
      ),
      h2('Áp suất (bar) — đủ mạnh hay không'),
      p(
        'Áp suất phải đạt mức tối thiểu mà thiết bị yêu cầu. Phun cát hay test đường ống thường cần áp cao (10–15 bar); dụng cụ khí nén thông thường chỉ cần 7–8 bar.',
      ),
      h2('Gợi ý nhanh'),
      li('Dụng cụ khí nén, vệ sinh nhẹ: 125–175 cfm, 8 bar.'),
      li('Phun cát, thi công cơ khí: 390–750 cfm, 8–12 bar.'),
      li('Phun cát lớn, áp cao: 750–850 cfm, 12–15 bar.'),
      li('Dự án lớn, nhiều điểm dùng: 1300 cfm, 13 bar.'),
      p(
        'PMC có đầy đủ máy nén khí Airman, Denyo, Hitachi, Ingersoll Rand kèm bình chứa và bộ sấy khí. Gọi hotline để được tư vấn chọn đúng máy cho công trình của bạn.',
      ),
    ],
  },
  {
    slug: 'cach-chon-cong-suat-may-phat-dien-cong-nghiep',
    title: 'Cách chọn công suất máy phát điện công nghiệp',
    date: '25/05/2020',
    excerpt:
      'Hướng dẫn liệt kê tải, tính tổng nhu cầu theo kVA/kW và chọn công suất máy phát điện công nghiệp đúng để bền máy, đủ tải.',
    image: '/images/blog/cach-chon-cong-suat-may-phat-dien.jpg',
    body: [
      p(
        'Để chọn máy phát điện công nghiệp phù hợp, doanh nghiệp cần lập danh sách tất cả thiết bị sẽ sử dụng điện, tra công suất khởi động và công suất chạy của từng thiết bị trong hướng dẫn sử dụng, rồi xác định tổng nhu cầu năng lượng theo kVA hoặc kW.',
      ),
      h2('Vì sao chọn đúng công suất lại quan trọng'),
      p(
        'Chọn công suất đúng cách mang lại nhiều lợi ích: tuổi thọ tối đa cho máy phát điện, khả năng tải đủ cho nhu cầu thực tế, giảm lỗi hệ thống và tạo điều kiện vận hành an toàn hơn. Việc bảo trì cũng giảm đáng kể khi máy hoạt động với tải phù hợp.',
      ),
      li('Máy chạy đúng dải tải (khoảng 70–80%) bền hơn, ít sự cố.'),
      li('Tránh máy quá nhỏ gây quá tải hoặc quá lớn gây lãng phí nhiên liệu.'),
      li('Cải thiện hiệu suất tổng thể và an toàn vận hành.'),
      p(
        'Để được tư vấn chi tiết, nên liên hệ đơn vị cung cấp thiết bị uy tín. PMC hỗ trợ khảo sát và tư vấn công suất miễn phí cho từng công trình.',
      ),
    ],
  },
  {
    slug: 'ung-dung-may-nen-khi-trong-xu-ly-nuoc-thai',
    title: 'Ứng dụng hệ thống máy nén khí trong xử lý nước thải',
    date: '25/05/2020',
    excerpt:
      'Khí nén đóng vai trò thiết yếu trong xử lý nước thải — từ sục khí hiếu khí đến lọc, khử mặn và làm sạch đường ống.',
    image: '/images/blog/ung-dung-may-nen-khi-xu-ly-nuoc-thai.png',
    body: [
      p(
        'Xử lý nước thải là vấn đề quan trọng trong cả sinh hoạt và sản xuất công nghiệp. Hệ thống máy nén khí đóng vai trò không thể thay thế, đảm bảo quá trình xử lý diễn ra nhanh chóng và tuân thủ các tiêu chuẩn môi trường.',
      ),
      h2('Vai trò của khí nén trong xử lý nước thải'),
      p(
        'Trong các công đoạn, khí nén được dùng ở bể lọc thô để đẩy nước qua bộ lọc, tại bể hiếu khí để sục oxy cho vi sinh vật phát triển, và trong hệ thống khử mặn để tăng lưu lượng, giảm độ mặn. Khí nén còn giúp vận chuyển nước giữa các bể, tách cặn lơ lửng và dầu mỡ, hỗ trợ xả bùn và làm sạch đường ống.',
      ),
      h2('Loại máy nén khí phù hợp'),
      li('Máy nén khí trục vít — hiệu suất cao, tiết kiệm điện.'),
      li('Máy nén khí ngâm dầu — dùng dầu để làm kín và làm mát.'),
      li('Máy nén khí không dầu — cho ngành y tế và thực phẩm.'),
      p(
        'PMC cung cấp đa dạng máy nén khí Airman, Denyo, Ingersoll Rand cho công trình và nhà máy — liên hệ để được tư vấn cấu hình phù hợp.',
      ),
    ],
  },
  {
    slug: 'su-co-thuong-gap-khi-su-dung-binh-khi-nen',
    title: 'Sự cố thường gặp khi sử dụng bình khí nén',
    date: '25/05/2020',
    excerpt:
      'Các nguy cơ nổ, rò khí, điện giật khi dùng thiết bị khí nén và những quy tắc an toàn bắt buộc khi vận hành.',
    image: '/images/blog/su-co-thuong-gap-binh-khi-nen.jpg',
    body: [
      p(
        'Thiết bị khí nén tiềm ẩn nhiều nguy cơ nghiêm trọng: nổ do quá nhiệt hoặc va đập, rò rỉ khí và nguy cơ điện giật. Thiết bị cần tuân thủ nghiêm quy định, được kiểm định kỹ thuật và đăng ký trước khi đưa vào sử dụng.',
      ),
      h2('Yêu cầu với người vận hành'),
      p(
        'Người vận hành phải đủ 18 tuổi, đủ sức khỏe và được đào tạo về quy trình an toàn, bảo trì. Mỗi bình phải có van an toàn đạt chuẩn, đồng hồ áp được kiểm định hằng năm, và đặt cách nguồn nhiệt cũng như vật liệu dễ cháy tối thiểu 5 mét.',
      ),
      h2('Kiểm tra vận hành hằng ngày'),
      li('Kiểm tra van an toàn, đồng hồ áp và rơ le khống chế áp.'),
      li('Xả nước ngưng và cặn vào đầu và cuối mỗi ca.'),
      li('Vệ sinh lọc khí định kỳ (khoảng 2 tháng/lần).'),
      h2('Tuyệt đối không'),
      li('Sửa chữa khi thiết bị còn áp; tự ý can thiệp van an toàn.'),
      li('Vận hành vượt thông số kỹ thuật hoặc khi bộ phận an toàn hư hỏng.'),
      p(
        'Lập tức dừng sử dụng khi áp vượt giới hạn, cơ cấu an toàn hỏng hoặc có hư hại. Bảo trì kém, sửa chữa sai cách và dùng bình chưa kiểm định là các nguyên nhân tai nạn chính.',
      ),
    ],
  },
  {
    slug: 'cach-lua-chon-vo-cach-am-may-phat-dien',
    title: 'Cách lựa chọn vỏ cách âm máy phát điện',
    date: '25/05/2020',
    excerpt:
      'Vỏ cách âm giúp giảm ồn, gọn gàng, dễ di chuyển và tiết kiệm hơn phòng cách âm — cùng cấu tạo 3 lớp và lưu ý khi chọn.',
    image: '/images/blog/cach-chon-vo-cach-am-may-phat-dien.jpg',
    body: [
      p(
        'Vỏ cách âm máy phát điện giúp giảm độ ồn khi máy hoạt động, bảo vệ môi trường văn phòng và khu vực xung quanh. Với kích thước gọn và cấu tạo đơn giản, vỏ cách âm dễ di chuyển hơn so với xây phòng cách âm riêng và tiết kiệm chi phí đáng kể.',
      ),
      h2('Cấu tạo vỏ cách âm'),
      p(
        'Vỏ cách âm gồm ba lớp chính: lớp vỏ ngoài bằng thép sơn tĩnh điện (2mm), lớp giữa từ rockwool và mút cách âm, lớp trong bằng tôn mạ kẽm đục lỗ. Thiết kế có lam gió, cửa kính quan sát và hệ thống ống pô giảm thanh để vận hành tối ưu.',
      ),
      h2('Loại vỏ ngoài trời (container)'),
      p(
        'Vỏ ngoài trời thường dùng container 20ft (cho máy đến 1000kVA) hoặc 40ft (cho máy đến 2000kVA), thiết kế lưu lượng gió vào — ra đảm bảo theo yêu cầu chạy máy, mức ồn khoảng 75 dB(A).',
      ),
      li('Ưu điểm: tiết kiệm diện tích, dễ di chuyển, lắp đặt nhanh.'),
      li('Nhược điểm: vỏ ôm sát nên bảo trì hơi bất tiện, cần chú ý tản nhiệt.'),
      p(
        'PMC cung cấp máy phát điện vỏ siêu cách âm các thương hiệu Cummins, Mitsubishi, Denyo — tư vấn chọn loại vỏ phù hợp với mặt bằng và yêu cầu độ ồn.',
      ),
    ],
  },
  {
    slug: 'dich-vu-cho-thue-may-phat-dien-chung-cu-can-ho',
    title: 'Dịch vụ cho thuê máy phát điện chung cư, căn hộ',
    date: '18/06/2020',
    excerpt:
      'Giải pháp máy phát điện dự phòng cho chung cư, tòa nhà cao tầng — công suất đa dạng, bảo trì định kỳ, thuê linh hoạt.',
    image: '/images/blog/cho-thue-may-phat-dien-chung-cu.png',
    body: [
      p(
        'Việc cúp điện thường xuyên xảy ra tại các chung cư và tòa nhà cao tầng, do đó máy phát điện dự phòng là giải pháp cần thiết. Dịch vụ cho thuê giúp cư dân yên tâm sử dụng thiết bị và tiện nghi mà không bị gián đoạn.',
      ),
      h2('Vì sao nên thuê thay vì mua'),
      p(
        'So với mua máy mới, thuê máy phát điện giúp tiết kiệm chi phí và tối ưu tài nguyên: khách hàng chỉ trả phí trong thời gian cần dùng, giảm rủi ro bảo trì và sửa chữa. Máy được bảo trì định kỳ, kiểm tra chất lượng và tuân thủ tiêu chuẩn an toàn.',
      ),
      h2('Quy trình thuê tại PMC'),
      li('Tiếp nhận yêu cầu → tư vấn công suất → khảo sát → báo giá.'),
      li('Ký biên bản → vận chuyển → lắp đặt → bảo trì → quyết toán.'),
      p(
        'PMC hỗ trợ khảo sát miễn phí và đào tạo vận hành, dịch vụ linh hoạt theo ngày, tuần, tháng hoặc năm với giá cạnh tranh, sẵn sàng thay máy nếu gặp sự cố không khắc phục nhanh được.',
      ),
    ],
  },
  {
    slug: 'cong-trinh-cho-thue-may-phat-dien-dao-binh-ba',
    title: 'Công trình cho thuê máy phát điện tại đảo Bình Ba, Nha Trang',
    date: '10/07/2020',
    excerpt:
      'PMC cung cấp và lắp đặt trọn gói hệ thống máy phát điện cho công trình tại đảo Bình Ba (Cam Ranh, Khánh Hòa).',
    image: '/images/blog/cong-trinh-may-phat-dien-dao-binh-ba.jpg',
    body: [
      p(
        'Đảo Bình Ba thuộc TP. Cam Ranh, tỉnh Khánh Hòa, cách Nha Trang khoảng 60km về phía Nam, diện tích chừng 3km², nổi tiếng với làn nước trong và nghề nuôi tôm hùm — nên còn được gọi là "đảo Tôm Hùm".',
      ),
      h2('Giải pháp trọn gói của PMC'),
      p(
        'PMC cung cấp và lắp đặt hệ thống máy phát điện hoàn chỉnh cho công trình trên đảo Bình Ba. Dịch vụ trọn gói, đề cao độ tin cậy, sự an tâm và chất lượng thi công trong suốt quá trình.',
      ),
      h2('Phạm vi dịch vụ'),
      li('Khảo sát, vận chuyển toàn quốc, đấu nối và chạy vận hành.'),
      li('Bảo trì, xử lý sự cố và hỗ trợ kỹ thuật 24/7.'),
      p(
        'Thuê linh hoạt ngắn hạn hoặc dài hạn với giá cạnh tranh. PMC tư vấn chọn đúng công suất để tối ưu chi phí vận hành cho đối tác và khách hàng.',
      ),
    ],
  },
];
