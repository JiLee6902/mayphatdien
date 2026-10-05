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

// Static fallback used when the CMS has no `post` documents yet.
export const posts: Post[] = [
  {
    slug: 'thue-hay-mua-may-phat-dien',
    title: 'Thuê hay mua máy phát điện?',
    date: '15/07/2025',
    excerpt:
      'So sánh chi phí, hiệu quả và tính linh hoạt giữa thuê và mua máy phát điện cho từng loại công trình.',
    image: '/images/categories/may-phat-dien.jpg',
    body: [
      p(
        'Máy phát điện là khoản đầu tư không nhỏ. Trước khi quyết định, doanh nghiệp cần cân nhắc giữa hai phương án: thuê theo nhu cầu hay mua đứt. Mỗi lựa chọn phù hợp với một bài toán chi phí và tần suất sử dụng khác nhau.',
      ),
      h2('Khi nào nên thuê?'),
      p(
        'Thuê là lựa chọn tối ưu khi nhu cầu mang tính thời vụ hoặc ngắn hạn — thi công công trình, sự kiện, dự phòng mùa cao điểm. Bạn chỉ trả tiền cho thời gian thực dùng và không phải lo bảo trì, sửa chữa hay khấu hao.',
      ),
      li('Công trình thi công dưới 12–18 tháng.'),
      li('Nhu cầu công suất thay đổi theo từng giai đoạn.'),
      li('Muốn tránh chi phí bảo dưỡng, kho bãi và vốn cố định.'),
      li('Cần thiết bị dự phòng khẩn cấp trong thời gian ngắn.'),
      h2('Khi nào nên mua?'),
      p(
        'Mua hợp lý khi máy được sử dụng liên tục, dài hạn với công suất ổn định — ví dụ nhà máy chạy nền hoặc cơ sở cần nguồn dự phòng thường trực nhiều năm. Khi đó tổng chi phí sở hữu thấp hơn thuê nếu tính trên vòng đời thiết bị.',
      ),
      h2('So sánh chi phí'),
      p(
        'Thuê chuyển chi phí đầu tư (CAPEX) thành chi phí vận hành (OPEX), giúp dòng tiền linh hoạt và dễ hạch toán theo dự án. Mua đòi hỏi vốn ban đầu lớn cùng các chi phí ẩn: bảo dưỡng định kỳ, phụ tùng, nhân sự vận hành và khấu hao.',
      ),
      p(
        'Nếu chưa chắc chắn về nhu cầu dài hạn, hãy bắt đầu bằng thuê để kiểm chứng thực tế. PMC tư vấn miễn phí công suất và phương án tối ưu chi phí cho từng công trình — liên hệ hotline để được khảo sát.',
      ),
    ],
  },
  {
    slug: 'chon-cong-suat-may-phat-dien-theo-tai',
    title: 'Chọn công suất máy phát điện theo tải',
    date: '02/07/2025',
    excerpt:
      'Hướng dẫn tính toán công suất phù hợp để tránh quá tải và tối ưu chi phí nhiên liệu.',
    image: '/images/hero-genset.jpg',
    body: [
      p(
        'Chọn sai công suất máy phát điện là lỗi phổ biến và tốn kém. Máy quá nhỏ sẽ quá tải, nhanh hỏng; máy quá lớn lại lãng phí nhiên liệu và dễ hỏng do chạy non tải kéo dài. Dưới đây là cách tính công suất phù hợp với tải thực tế.',
      ),
      h2('Bước 1 — Liệt kê toàn bộ tải'),
      p(
        'Ghi lại công suất (kW) của tất cả thiết bị sẽ đấu vào máy phát. Với động cơ điện, cần chú ý dòng khởi động có thể gấp 3–7 lần dòng định mức — đây là yếu tố quyết định công suất đỉnh.',
      ),
      h2('Bước 2 — Áp hệ số đồng thời'),
      p(
        'Không phải mọi thiết bị đều chạy cùng lúc ở công suất tối đa. Hệ số đồng thời (thường 0,6–0,8 tùy công trình) giúp tránh chọn máy dư thừa. Nhân tổng tải với hệ số này để ra tải làm việc thực tế.',
      ),
      h2('Bước 3 — Cộng dự phòng'),
      p(
        'Nên cộng thêm 15–25% dự phòng để máy không chạy full tải liên tục và có khả năng mở rộng. Máy phát vận hành tốt nhất ở khoảng 70–80% tải định mức.',
      ),
      li('Tải chiếu sáng, ổ cắm: tính theo công suất định mức.'),
      li('Động cơ, máy nén, bơm: nhân dòng khởi động để tính công suất đỉnh.'),
      li('Tải điện tử nhạy cảm: cân nhắc máy có AVR ổn định điện áp.'),
      p(
        'Ví dụ: tổng tải 400 kW × hệ số 0,7 = 280 kW làm việc, cộng 20% dự phòng ≈ 336 kW → chọn máy khoảng 350–400 kVA. Cần tính chính xác cho công trình của bạn? PMC hỗ trợ khảo sát và tư vấn công suất miễn phí.',
      ),
    ],
  },
  {
    slug: 'bao-duong-may-nen-khi-dung-cach',
    title: 'Bảo dưỡng máy nén khí đúng cách',
    date: '20/06/2025',
    excerpt:
      'Quy trình bảo dưỡng định kỳ giúp máy nén khí vận hành ổn định và kéo dài tuổi thọ.',
    image: '/images/categories/may-nen-khi.jpg',
    body: [
      p(
        'Máy nén khí là thiết bị chịu tải nặng và hoạt động liên tục, nên bảo dưỡng định kỳ là yếu tố sống còn để duy trì hiệu suất, tiết kiệm điện và tránh sự cố dừng máy đột ngột.',
      ),
      h2('Lịch bảo dưỡng cơ bản'),
      li('Hằng ngày: kiểm tra mức dầu, xả nước ngưng, nghe tiếng ồn bất thường.'),
      li('Mỗi 500–1.000 giờ: thay lọc gió, kiểm tra dây đai và rò rỉ khí.'),
      li('Mỗi 2.000–4.000 giờ: thay dầu, lọc dầu và lọc tách dầu.'),
      li('Định kỳ năm: kiểm tra van an toàn, cảm biến nhiệt và toàn bộ hệ thống điện.'),
      h2('Dấu hiệu cần bảo dưỡng ngay'),
      p(
        'Đừng chờ đến lịch nếu máy có dấu hiệu bất thường: áp suất không đạt, nhiệt độ tăng cao, tiêu hao điện tăng, có dầu trong khí đầu ra, hoặc tiếng ồn và rung lớn hơn bình thường.',
      ),
      h2('Vì sao nên bảo dưỡng đúng hạn'),
      p(
        'Một máy nén được bảo dưỡng tốt tiêu thụ điện ít hơn, cho khí sạch và ổn định hơn, đồng thời kéo dài tuổi thọ đầu nén — bộ phận đắt tiền nhất. Chi phí bảo dưỡng luôn nhỏ hơn nhiều so với chi phí sửa chữa lớn hoặc dừng sản xuất.',
      ),
      p(
        'Khi thuê máy nén khí tại PMC, đội kỹ thuật lo toàn bộ bảo dưỡng định kỳ và xử lý sự cố 24/7 — bạn chỉ việc vận hành.',
      ),
    ],
  },
  {
    slug: 'ung-dung-phun-rua-ap-luc-cao-uhp',
    title: 'Ứng dụng phun rửa áp lực cao (UHP) trong công nghiệp',
    date: '05/06/2025',
    excerpt:
      'Vì sao UHP là giải pháp làm sạch hiệu quả cho đường ống, bồn bể và bề mặt kim loại.',
    image: '/images/categories/phun-rua-uhp.jpg',
    body: [
      p(
        'UHP (Ultra High Pressure) là công nghệ phun nước siêu cao áp — thường trên 2.500 bar — dùng để làm sạch công nghiệp mà không cần hóa chất. Đây là giải pháp ngày càng phổ biến nhờ hiệu quả và tính thân thiện môi trường.',
      ),
      h2('Nguyên lý hoạt động'),
      p(
        'Nước được điều áp cực cao rồi phun qua đầu phun chuyên dụng, tạo lực đủ mạnh để bóc tách cặn bám, gỉ sét, sơn cũ và lớp phủ cứng đầu — nhưng không làm hỏng kim loại nền nếu vận hành đúng thông số.',
      ),
      h2('Ứng dụng phổ biến'),
      li('Làm sạch trong và ngoài đường ống, bồn bể chứa.'),
      li('Tẩy gỉ, bóc sơn bề mặt kim loại trước khi sơn lại.'),
      li('Vệ sinh thiết bị trao đổi nhiệt, lò hơi trong nhà máy.'),
      li('Hydrotest — kiểm tra áp lực và độ kín của hệ thống.'),
      h2('Ưu điểm so với phương pháp truyền thống'),
      p(
        'UHP không dùng hóa chất nên an toàn và ít phát sinh chất thải; làm sạch nhanh, đồng đều và tiếp cận được vị trí khó. So với phun cát, UHP không tạo bụi mài và không làm biến dạng bề mặt.',
      ),
      p(
        'PMC cung cấp hệ thống UHP và hydrotest nhiều cấp áp suất kèm kỹ thuật viên vận hành — phù hợp cho nhà máy lọc dầu, hóa chất, đóng tàu và bảo trì công nghiệp.',
      ),
    ],
  },
  {
    slug: 'kinh-nghiem-chon-may-han-cong-trinh',
    title: 'Kinh nghiệm chọn máy hàn cho công trình',
    date: '22/05/2025',
    excerpt:
      'Các tiêu chí lựa chọn máy hàn theo vật liệu, độ dày và điều kiện thi công thực tế.',
    image: '/images/categories/may-han.jpg',
    body: [
      p(
        'Chọn đúng máy hàn quyết định chất lượng mối hàn, tiến độ và chi phí thi công. Việc lựa chọn cần dựa trên vật liệu, độ dày, sản lượng và điều kiện hiện trường chứ không chỉ theo giá.',
      ),
      h2('Chọn theo phương pháp hàn'),
      li('MIG/MAG: năng suất cao, dễ vận hành — hợp kết cấu thép, sản lượng lớn.'),
      li('TIG: mối hàn đẹp, chính xác — hợp inox, nhôm và chi tiết mỏng.'),
      li('Que hàn (SMAW): linh hoạt, phù hợp công trình ngoài trời, hiện trường.'),
      h2('Chọn theo vật liệu và độ dày'),
      p(
        'Vật liệu dày cần dòng hàn lớn và chu kỳ làm việc (duty cycle) cao. Với thép kết cấu dày, ưu tiên máy công suất lớn hoặc máy phát hàn; với chi tiết mỏng và inox, TIG cho kết quả tốt hơn.',
      ),
      h2('Điều kiện hiện trường'),
      p(
        'Ở công trình không có điện lưới ổn định, máy phát hàn (welder generator) là lựa chọn hợp lý vì vừa phát điện vừa hàn. Cần xét thêm khả năng chống bụi, chống ẩm và độ bền khi di chuyển nhiều.',
      ),
      p(
        'PMC cho thuê đa dạng máy hàn MIG, TIG và máy phát hàn kéo theo — tư vấn đúng loại theo vật liệu và điều kiện thi công của bạn.',
      ),
    ],
  },
  {
    slug: 'chuan-bi-mat-bang-lap-dat-thiet-bi',
    title: 'Chuẩn bị mặt bằng trước khi lắp đặt thiết bị',
    date: '08/05/2025',
    excerpt:
      'Những lưu ý về không gian, thông gió và an toàn khi tiếp nhận thiết bị công nghiệp.',
    image: '/images/categories/may-nen-khi.jpg',
    body: [
      p(
        'Mặt bằng chuẩn bị tốt giúp quá trình lắp đặt nhanh, an toàn và thiết bị vận hành ổn định ngay từ đầu. Đây là bước thường bị xem nhẹ nhưng ảnh hưởng trực tiếp đến hiệu quả và tuổi thọ máy.',
      ),
      h2('Không gian và nền móng'),
      p(
        'Đảm bảo đủ diện tích đặt máy và lối đi thao tác, bảo dưỡng xung quanh. Nền phải phẳng, chịu được tải trọng thiết bị và có khả năng thoát nước. Với máy rung, cần bệ đỡ chắc chắn để giảm chấn.',
      ),
      h2('Thông gió và nhiệt'),
      p(
        'Máy phát điện và máy nén sinh nhiệt lớn, cần thông gió tốt để tản nhiệt và cấp khí đốt/làm mát. Khu vực kín phải có cửa gió vào — ra và đường thoát khói xả đúng tiêu chuẩn.',
      ),
      h2('An toàn và nguồn điện'),
      li('Bố trí bình chữa cháy và biển cảnh báo tại khu vực đặt máy.'),
      li('Chuẩn bị hệ thống tiếp địa và tủ điện phù hợp công suất.'),
      li('Giữ khoảng cách an toàn với vật liệu dễ cháy và khu vực người qua lại.'),
      li('Đảm bảo lối vận chuyển đủ rộng để đưa thiết bị vào vị trí.'),
      p(
        'Trước khi giao máy, kỹ thuật PMC khảo sát mặt bằng miễn phí và tư vấn các điều kiện cần chuẩn bị — đảm bảo lắp đặt an toàn, đúng tiến độ.',
      ),
    ],
  },
];
