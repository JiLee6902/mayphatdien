import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/config/categories';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <section className="mx-auto max-w-[1180px] px-5 py-14">
        <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-accent">
          Thiết bị cho thuê
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-navy">Chọn nhóm thiết bị bạn cần</h2>
        <p className="mt-2 max-w-2xl text-muted">
          4 nhóm thiết bị công nghiệp — đầy đủ công suất, thương hiệu lớn, sẵn kho, giao lắp
          tận công trình.
        </p>
        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>
    </>
  );
}
