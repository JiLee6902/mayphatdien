export interface Location {
  name: string;
  address: string;
  phone: string; // digits only
}

export const site = {
  companyName: 'Công ty TNHH P.M.C',
  brand: 'PMC',
  hotline: '0936899431',
  email: 'pmc@pmcvn.com',
  zaloUrl: 'https://zalo.me/0936899431',
  locations: [
    {
      name: 'Văn phòng TP.HCM',
      address: '246/40A11 Xô Viết Nghệ Tĩnh, P.21, Q.Bình Thạnh, TP.HCM',
      phone: '02835141558',
    },
    {
      name: 'Trụ sở Vũng Tàu',
      address: '1591A Đường 30/4, P.12, TP Vũng Tàu, BR-VT',
      phone: '02543839699',
    },
  ] as Location[],
} as const;

/** Convert a digits-only phone into a clean tel: href (no spaces). */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/\D/g, '')}`;
}
