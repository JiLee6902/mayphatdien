'use client';

import { useState } from 'react';
import { site, telHref } from '@/config/site';

const field =
  'w-full rounded-lg border border-edge bg-white px-4 py-3 text-sm text-paper placeholder:text-paper-mute outline-none transition focus:border-signal';
const labelCls = 'mb-1.5 block text-xs font-bold uppercase tracking-wide text-paper-dim';

function formatPhone(raw: string): string {
  const d = raw.replace(/\D/g, '');
  return d.length === 10 ? d.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3') : raw;
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get('ho_ten') as string)?.trim();
    const phone = (data.get('so_dien_thoai') as string)?.trim();
    const eq = data.get('thiet_bi') as string;

    if (!name || !phone || !eq) {
      setError('Vui lòng điền Họ tên, Số điện thoại và chọn Thiết bị.');
      return;
    }
    if (!/^[0-9\s+.()-]{8,}$/.test(phone)) {
      setError('Số điện thoại chưa hợp lệ.');
      return;
    }
    setError('');

    // With a Web3Forms key, submit via their API; otherwise open the mail client.
    if (site.web3formsKey) {
      setStatus('sending');
      try {
        data.append('access_key', site.web3formsKey);
        data.append('subject', 'Yêu cầu báo giá từ website PMC');
        const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
        const json = await res.json();
        if (json.success) {
          form.reset();
          setStatus('ok');
        } else {
          setStatus('err');
        }
      } catch {
        setStatus('err');
      }
    } else {
      const body = [
        `Họ tên: ${name}`,
        `Số điện thoại: ${phone}`,
        `Công ty/Dự án: ${(data.get('cong_ty') as string) || '—'}`,
        `Thiết bị: ${eq}`,
        `Yêu cầu: ${(data.get('yeu_cau') as string) || '—'}`,
      ].join('\n');
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Yêu cầu báo giá PMC')}&body=${encodeURIComponent(body)}`;
      setStatus('ok');
    }
  }

  if (status === 'ok') {
    return (
      <div className="mt-6 rounded-lg border border-signal/30 bg-signal/5 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-signal text-white">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
        </div>
        <p className="mt-4 font-display text-xl font-extrabold text-paper">Đã gửi yêu cầu!</p>
        <p className="mt-2 text-sm text-paper-dim">
          Cảm ơn bạn. PMC sẽ liên hệ trong vòng 1 giờ (giờ làm việc). Cần gấp, gọi ngay{' '}
          <a href={telHref(site.hotline)} className="font-bold text-signal-dark hover:underline">{formatPhone(site.hotline)}</a>.
        </p>
      </div>
    );
  }

  const sending = status === 'sending';
  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="contact-name">Họ tên *</label>
          <input id="contact-name" name="ho_ten" type="text" required placeholder="Nguyễn Văn A" className={field} />
        </div>
        <div>
          <label className={labelCls} htmlFor="contact-phone">Số điện thoại *</label>
          <input id="contact-phone" name="so_dien_thoai" type="tel" required placeholder="0912 345 678" className={field} />
        </div>
      </div>
      <div>
        <label className={labelCls} htmlFor="contact-company">Công ty / Dự án</label>
        <input id="contact-company" name="cong_ty" type="text" placeholder="Tên công ty hoặc dự án" className={field} />
      </div>
      <div>
        <label className={labelCls} htmlFor="contact-equipment">Thiết bị cần thuê *</label>
        <select id="contact-equipment" name="thiet_bi" required className={field} defaultValue="">
          <option value="" disabled>Chọn nhóm thiết bị…</option>
          <option>Máy phát điện</option>
          <option>Máy nén khí</option>
          <option>Thiết bị phun rửa UHP</option>
          <option>Máy hàn / máy phát hàn</option>
          <option>Nhiều loại thiết bị</option>
        </select>
      </div>
      <div>
        <label className={labelCls} htmlFor="contact-message">Yêu cầu chi tiết</label>
        <textarea id="contact-message" name="yeu_cau" rows={4} placeholder="Công suất cần thiết, địa điểm công trình, thời gian thuê…" className={`${field} resize-none`} />
      </div>

      {error && <p className="text-sm font-medium text-signal-dark">{error}</p>}
      {status === 'err' && (
        <p className="text-sm font-medium text-signal-dark">
          Gửi không thành công. Vui lòng gọi{' '}
          <a href={telHref(site.hotline)} className="font-bold underline">{formatPhone(site.hotline)}</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-signal px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-signal-dark active:scale-95 disabled:opacity-70"
      >
        {sending ? (
          <>
            <svg viewBox="0 0 24 24" className="h-5 w-5 animate-spin" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="9" opacity="0.3" /><path d="M21 12a9 9 0 0 0-9-9" strokeLinecap="round" /></svg>
            Đang gửi…
          </>
        ) : (
          <>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
            Gửi yêu cầu báo giá
          </>
        )}
      </button>

      <p className="text-center text-xs text-paper-dim">
        Hoặc gọi ngay{' '}
        <a href={telHref(site.hotline)} className="font-bold text-signal-dark hover:underline">{formatPhone(site.hotline)}</a>{' '}
        để được tư vấn tức thì.
      </p>
    </form>
  );
}
