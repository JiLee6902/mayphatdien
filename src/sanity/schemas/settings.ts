import { defineType, defineField } from 'sanity';

// Singleton document. Only one `settings` document should exist (id: 'settings').
export const settings = defineType({
  name: 'settings',
  title: 'Cài đặt chung',
  type: 'document',
  groups: [
    { name: 'company', title: 'Doanh nghiệp', default: true },
    { name: 'contact', title: 'Liên hệ' },
    { name: 'locations', title: 'Cơ sở' },
    { name: 'home', title: 'Trang chủ' },
  ],
  fields: [
    defineField({
      name: 'companyName',
      title: 'Tên công ty',
      type: 'string',
      group: 'company',
      initialValue: 'Công ty TNHH P.M.C',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brand',
      title: 'Tên thương hiệu',
      type: 'string',
      group: 'company',
      initialValue: 'PMC',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hotline',
      title: 'Hotline',
      type: 'string',
      group: 'contact',
      initialValue: '0936899431',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'contact',
      initialValue: 'pmc@pmcvn.com',
    }),
    defineField({
      name: 'zaloUrl',
      title: 'Link Zalo',
      type: 'url',
      group: 'contact',
      initialValue: 'https://zalo.me/0936899431',
    }),
    defineField({
      name: 'locations',
      title: 'Danh sách cơ sở',
      type: 'array',
      group: 'locations',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Tên cơ sở',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({ name: 'address', title: 'Địa chỉ', type: 'string' }),
            defineField({ name: 'phone', title: 'Điện thoại', type: 'string' }),
          ],
          preview: { select: { title: 'name', subtitle: 'address' } },
        },
      ],
    }),
    defineField({
      name: 'heroStats',
      title: 'Số liệu nổi bật (hero)',
      type: 'array',
      group: 'home',
      description: 'Các con số hiển thị ở đầu trang chủ, ví dụ "70+" / "máy sẵn kho".',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Giá trị',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Nhãn',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'companyName' },
    prepare({ title }) {
      return { title: title || 'Cài đặt chung' };
    },
  },
});
