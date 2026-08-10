import { Hero } from '@/components/Hero';
import { BrandStrip } from '@/components/BrandStrip';
import { Stats } from '@/components/Stats';
import { Features } from '@/components/Features';
import { CtaBand } from '@/components/CtaBand';
import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/config/categories';

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <section className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" />
          Thiết bị cho thuê
        </p>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
          Chọn nhóm thiết bị bạn cần
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          4 nhóm thiết bị công nghiệp — đầy đủ công suất, thương hiệu lớn, sẵn kho, giao lắp
          tận công trình.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <CategoryCard key={c.slug} category={c} index={i} />
          ))}
        </div>
      </section>
      <Features />
      <Stats />
      <CtaBand />
    </>
  );
}
