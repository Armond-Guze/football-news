import type {StructureResolver} from 'sanity/desk'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('The Game Snap CMS')
    .items([
      S.documentTypeListItem('headline').title('Headlines'),
      S.documentTypeListItem('powerRanking').title('Power Rankings'),
      S.documentTypeListItem('standings').title('Standings'),
      S.divider(),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('tag').title('Tags'),
      S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['headline', 'powerRanking', 'standings', 'category', 'tag', 'author', 'post'].includes(item.getId()!),
      ),
    ])
