const brands = ['Cummins', 'Mitsubishi', 'Denyo', 'MTU', 'Airman', 'Komatsu', 'Ingersoll Rand'];

export function BrandStrip() {
  return (
    <section className="border-b border-line bg-white py-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted">
          Thương hiệu chúng tôi cho thuê
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {brands.map((b) => (
            <span key={b} className="text-lg font-bold tracking-wide text-steel/70">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
