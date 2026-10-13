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
