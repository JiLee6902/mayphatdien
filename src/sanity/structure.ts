import type { StructureResolver } from 'sanity/structure';

// Custom desk: a curated, Vietnamese-labelled sidebar for PMC staff.
// Settings is a pinned singleton; the rest are ordered content types.
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Nội dung PMC')
    .items([
      S.listItem()
        .title('Cài đặt chung')
        .id('settings')
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
            .title('Cài đặt chung'),
        ),
      S.divider(),
      S.documentTypeListItem('category').title('Danh mục thiết bị'),
      S.documentTypeListItem('equipment').title('Thiết bị'),
      S.documentTypeListItem('project').title('Dự án'),
      S.documentTypeListItem('post').title('Tin tức'),
    ]);

// The singleton settings doc must not appear in the global "create new" menu.
export const SINGLETON_TYPES = new Set(['settings']);
