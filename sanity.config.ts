import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemas';
import { structure, SINGLETON_TYPES } from './src/sanity/structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'PMC CMS',
  projectId,
  dataset,
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
    // Hide the singleton `settings` type from the global "New document" list —
    // it is reachable only through its pinned desk entry.
    templates: (prev) => prev.filter((t) => !SINGLETON_TYPES.has(t.schemaType)),
  },
  document: {
    // Keep the global "Create" menu free of singletons too.
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === 'global'
        ? prev.filter((t) => !SINGLETON_TYPES.has(t.templateId))
        : prev,
    // Singletons can be edited but not duplicated, deleted, or unpublished.
    actions: (prev, { schemaType }) =>
      SINGLETON_TYPES.has(schemaType)
        ? prev.filter(
            ({ action }) =>
              action && !['unpublish', 'delete', 'duplicate'].includes(action),
          )
        : prev,
  },
});
