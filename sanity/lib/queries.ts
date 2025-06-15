export const headlineQuery = `
  *[_type == "headline" && published == true] | order(priority asc, _createdAt desc) {
    _id,
    title,
    slug,
    summary,
    coverImage,
    priority
  }
`;
