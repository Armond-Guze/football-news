import { defineType, defineField } from "sanity";

const standings = defineType({
  name: "standing",
  title: "Team Standing",
  type: "document",
  fields: [
    defineField({
      name: "teamName",
      title: "Team Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "conference",
      title: "Conference",
      type: "string",
      options: {
        list: ["AFC", "NFC"],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "division",
      title: "Division",
      type: "string",
      options: {
        list: ["East", "North", "South", "West"],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "wins", title: "Wins", type: "number" }),
    defineField({ name: "losses", title: "Losses", type: "number" }),
    defineField({ name: "ties", title: "Ties", type: "number" }),
    defineField({ name: "pointsFor", title: "Points For", type: "number" }),
    defineField({ name: "pointsAgainst", title: "Points Against", type: "number" }),
    defineField({ name: "homeRecord", title: "Home Record", type: "string" }),
    defineField({ name: "awayRecord", title: "Away Record", type: "string" }),
    defineField({ name: "streak", title: "Streak", type: "string" }),
    defineField({
      name: "logo",
      title: "Team Logo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "teamName",
      subtitle: "conference",
      media: "logo",
    },
  },
});

export default standings;
