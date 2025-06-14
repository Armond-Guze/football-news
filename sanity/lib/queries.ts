export const headlineQuery = `*[_type == "headline"] | order(_createdAt desc){
  _id,
  title,
  slug,
  coverImage,
  tags,
  date
}`
