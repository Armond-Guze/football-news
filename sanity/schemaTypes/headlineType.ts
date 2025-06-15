import { defineType, defineField } from "sanity";

const headlineType = defineType({
  name: "headline",
  title: "Headline",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(120),
    }),
   defineField({
  name: "slug",
  title: "Slug",
  type: "slug",
  options: {
    source: "title",
    slugify: input =>
      input
        .toLowerCase()
        .trim() // ✅ removes leading/trailing whitespace
        .replace(/\s+/g, "-") // ✅ replaces spaces with hyphens
        .slice(0, 96),
  },
  validation: (Rule) => Rule.required(),
}),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
  name: "author",
  type: "reference",
  to: [{ type: "author" }],
}),
defineField({
  name: "date",
  type: "datetime",
}),
defineField({
  name: "body",
  type: "blockContent",
}),
defineField({
  name: "coverImage",
  type: "image",
  options: { hotspot: true },
}),

  ],
});

export default headlineType;
