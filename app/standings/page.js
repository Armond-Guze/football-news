import Image from "next/image";
import { client } from "@sanity/client";
import { urlFor } from "@sanity/image-url";
import { standingsQuery } from "@sanity/queries"; // using your alias
const standings = await client.fetch(standingsQuery);


// Reuse your fetch code here if needed
async function getStandings() {
  const standings = await client.fetch(
    `*[_type == "standing"] | order(conference asc, division asc, teamName asc)`
  );
  return standings;
}

export default async function StandingsPage() {
  const standings = await getStandings();

  const grouped = {
    AFC: { East: [], North: [], South: [], West: [] },
    NFC: { East: [], North: [], South: [], West: [] },
  };

  standings.forEach((team) => {
    if (grouped[team.conference] && grouped[team.conference][team.division]) {
      grouped[team.conference][team.division].push(team);
    }
  });

  const renderDivision = (division, teams) => (
    <div className="mb-10">
      <h3 className="text-lg font-semibold mb-2">{division}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-800 text-gray-300">
            <tr>
              <th className="p-2">Team</th>
              <th className="p-2">W</th>
              <th className="p-2">L</th>
              <th className="p-2">T</th>
              <th className="p-2">PF</th>
              <th className="p-2">PA</th>
              <th className="p-2">Home</th>
              <th className="p-2">Away</th>
              <th className="p-2">Streak</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team._id} className="border-b border-gray-700">
                <td className="p-2 flex items-center gap-2">
                  {team.logo?.asset?.url && (
                    <Image
                      src={team.logo.asset.url}
                      alt={team.teamName}
                      width={24}
                      height={24}
                    />
                  )}
                  {team.teamName}
                </td>
                <td className="p-2">{team.wins}</td>
                <td className="p-2">{team.losses}</td>
                <td className="p-2">{team.ties}</td>
                <td className="p-2">{team.pointsFor}</td>
                <td className="p-2">{team.pointsAgainst}</td>
                <td className="p-2">{team.homeRecord}</td>
                <td className="p-2">{team.awayRecord}</td>
                <td className="p-2">{team.streak}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">NFL Standings</h1>

      {/* AFC Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">AFC</h2>
        {Object.entries(grouped.AFC).map(([division, teams]) =>
          renderDivision(division, teams)
        )}
      </section>

      {/* NFC Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">NFC</h2>
        {Object.entries(grouped.NFC).map(([division, teams]) =>
          renderDivision(division, teams)
        )}
      </section>
    </main>
  );
}
