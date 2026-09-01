import { defineType, defineField } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Tin tức',
  type: 'document',
  groups: [
    { name: 'content', title: 'Nội dung', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Tiêu đề',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Đường dẫn (slug)',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Ngày đăng',
      type: 'datetime',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Ảnh bìa',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
    }),
    defineField({
      name: 'excerpt',
      title: 'Tóm tắt',
      type: 'text',
      group: 'content',
      rows: 3,
      description: 'Đoạn giới thiệu ngắn hiển thị ở thẻ tin tức.',
    }),
    defineField({
      name: 'body',
      title: 'Nội dung bài viết',
      type: 'array',
      group: 'content',
      of: [{ type: 'block' }],
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
      title: 'Mới nhất',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'publishedAt', media: 'coverImage' },
    prepare({ title, subtitle }) {
      const date = subtitle ? new Date(subtitle).toLocaleDateString('vi-VN') : '';
      return { title, subtitle: date };
    },
  },
});
