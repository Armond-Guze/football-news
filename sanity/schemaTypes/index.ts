import { postType } from './postType'
import { authorType } from './authorType'
import { categoryType } from './categoryType'
import { blockContentType } from './blockContentType'
import headlineType from './headlineType'

export const schemaTypes = [
  postType,
  authorType,
  categoryType,
  blockContentType,
  headlineType, // optional
]
