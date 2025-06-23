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

export const powerRankingsQuery = `*[_type == "powerRanking"] | order(rank asc) {
  _id,
  rank,
  teamName,
  teamLogo,
  summary,
  body,
  date,
  previousRank
}`;

export const standingsQuery = `*[_type == "standing"] | order(conference asc, division asc, teamName asc) {
  _id,
  teamName,
  conference,
  division,
  wins,
  losses,
  ties,
  pointsFor,
  pointsAgainst,
  homeRecord,
  awayRecord,
  streak,
  logo {
    asset->{_ref, url}
  }
}`;

