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
  teamColor,
  date,
  previousRank
}`;

export const standingsQuery = `
  *[_type == "standings"] | order(division asc, winPercentage desc, wins desc) {
    _id,
    teamName,
    teamLogo,
    wins,
    losses,
    ties,
    winPercentage,
    conference,
    division,
    season,
    lastUpdated
  }
`;