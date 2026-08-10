import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { CtaBand } from '@/components/CtaBand';
import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/config/categories';

const brands = ['Cummins', 'Mitsubishi', 'Denyo', 'MTU', 'Airman', 'Komatsu', 'Ingersoll Rand'];

export default function Home() {
  return (
    <>
      <Hero />

      {/* airy brand band */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-14">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Thương hiệu chúng tôi cho thuê
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
            {brands.map((b) => (
              <span key={b} className="text-lg font-bold tracking-wide text-navy/40">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Thiết bị cho thuê
            <span className="h-px w-8 bg-accent" />
          </p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy md:text-[40px]">
            Chọn nhóm thiết bị bạn cần
          </h2>
          <p className="mt-5 text-muted">
            4 nhóm thiết bị công nghiệp — đầy đủ công suất, thương hiệu lớn, sẵn kho, giao lắp
            tận công trình.
          </p>
        </div>
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <CategoryCard key={c.slug} category={c} index={i} />
          ))}
        </div>
      </section>

      <Features />
      <CtaBand />
    </>
  );
}
