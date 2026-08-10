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
        <div className="mx-auto max-w-[1320px] px-8 py-16 lg:px-12">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            Thương hiệu chúng tôi cho thuê
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-16 gap-y-7">
            {brands.map((b) => (
              <span key={b} className="text-xl font-bold tracking-wide text-navy/40">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-8 py-28 lg:px-12 md:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Thiết bị cho thuê
            <span className="h-px w-8 bg-accent" />
          </p>
          <h2 className="mt-5 text-[34px] font-extrabold tracking-tight text-navy md:text-[44px]">
            Chọn nhóm thiết bị bạn cần
          </h2>
          <p className="mt-5 text-lg text-muted">
            4 nhóm thiết bị công nghiệp — đầy đủ công suất, thương hiệu lớn, sẵn kho, giao lắp
            tận công trình.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
