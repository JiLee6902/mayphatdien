import { Img } from '@/components/ui/Img';
import { Reveal } from '@/components/motion/Reveal';

/** Human, voice-forward manifesto band — adds warmth and a focal moment
 *  between the equipment/feature sections. */
export function BrandStatement() {
  return (
    <section className="border-y border-edge bg-white">
      <div className="mx-auto grid max-w-[1320px] items-stretch gap-0 lg:grid-cols-2">
        {/* Image with crew (human element) */}
        <div className="relative min-h-[300px] overflow-hidden lg:min-h-[520px]">
          <Img
            src="/images/projects/resort-ho-tram/hero.jpg"
            alt="Kỹ thuật viên PMC tại công trình"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/10" />
        </div>

        {/* Statement */}
        <div className="flex flex-col justify-center px-6 py-14 lg:px-16 md:py-20">
          <Reveal>
            <span className="font-display text-[64px] font-black leading-none text-signal/20">“</span>
            <blockquote className="-mt-6 font-display text-[26px] font-extrabold leading-[1.25] tracking-tight text-paper md:text-[34px]">
              Chúng tôi không chỉ cho thuê máy —<br className="hidden sm:block" /> chúng tôi giữ cho công trình của bạn{' '}
              <span className="text-signal-dark">không bao giờ mất điện.</span>
            </blockquote>
            <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-paper-dim">
              Gần 20 năm, đội ngũ kỹ thuật PMC có mặt ở công trường cùng khách hàng — từ khảo sát,
              giao lắp đến trực máy 24/7. Mỗi tổ máy chạy ổn định là một lời hứa được giữ trọn.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-10 w-1 rounded-full bg-signal" />
              <div>
                <p className="font-display text-[15px] font-extrabold text-paper">Đội ngũ P.M.C</p>
                <p className="text-[13px] text-paper-mute">Công ty TNHH P.M.C · từ 2007</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
