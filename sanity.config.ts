'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { dashboardTool } from '@sanity/dashboard'
import { schemaTypes } from './sanity/schemaTypes'
import powerRanking from './sanity/schemaTypes/powerRanking'


// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { structure } from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  title: 'The Snap CMS',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    dashboardTool(),
    deskTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
