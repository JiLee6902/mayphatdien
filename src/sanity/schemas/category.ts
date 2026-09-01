import { defineType, defineField } from 'sanity';

export const category = defineType({
  name: 'category',
  title: 'Danh mục thiết bị',
  type: 'document',
  groups: [
    { name: 'content', title: 'Nội dung', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Tên danh mục',
      type: 'string',
      group: 'content',
      description: 'Ví dụ: "Máy phát điện".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Đường dẫn (slug)',
      type: 'slug',
      group: 'content',
      description: 'Dùng cho URL /cho-thue-<slug>. Hạn chế đổi sau khi đã đăng.',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Dòng mô tả ngắn',
      type: 'text',
      group: 'content',
      rows: 2,
      description: 'Hiển thị ngay dưới tiêu đề danh mục (ví dụ dải công suất, thương hiệu, số lượng máy).',
    }),
    defineField({
      name: 'image',
      title: 'Ảnh đại diện',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
    }),
    defineField({
      name: 'order',
      title: 'Thứ tự hiển thị',
      type: 'number',
      group: 'content',
      description: 'Số nhỏ hiển thị trước. Dùng để sắp xếp danh mục.',
    }),
    defineField({
      name: 'seoTitle',
      title: 'Tiêu đề SEO',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Mô tả SEO',
      type: 'text',
      group: 'seo',
      rows: 3,
      validation: (Rule) => Rule.max(180).warning('Nên dưới 160 ký tự.'),
    }),
  ],
  orderings: [
    {
      title: 'Thứ tự hiển thị',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'slug.current', media: 'image' },
  },
});
