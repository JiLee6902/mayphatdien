const stats = [
  { value: '18+', label: 'Năm kinh nghiệm' },
  { value: '70+', label: 'Thiết bị sẵn kho' },
  { value: '10+', label: 'Tỉnh thành phục vụ' },
  { value: '24/7', label: 'Hỗ trợ khẩn cấp' },
];

export function Stats() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-extrabold text-navy">{s.value}</div>
            <div className="mt-1 text-sm text-muted">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
