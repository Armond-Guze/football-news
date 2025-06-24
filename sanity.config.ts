'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './sanity/schemaTypes'
import powerRanking from './sanity/schemaTypes/powerRanking'


// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { structure } from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    deskTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
