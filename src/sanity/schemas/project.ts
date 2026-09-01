import { defineType, defineField } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Dự án',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Tên dự án',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Đường dẫn (slug)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clientName',
      title: 'Khách hàng / chủ đầu tư',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Địa điểm',
      type: 'string',
      description: 'Ví dụ: "TP. Thủ Đức, TP.HCM".',
    }),
    defineField({
      name: 'image',
      title: 'Ảnh dự án',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'equipmentUsed',
      title: 'Thiết bị đã sử dụng',
      type: 'array',
      description: 'Liên kết tới các thiết bị PMC đã cung cấp cho dự án này.',
      of: [{ type: 'reference', to: [{ type: 'equipment' }] }],
    }),
    defineField({
      name: 'description',
      title: 'Mô tả',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'location', media: 'image' },
  },
});
