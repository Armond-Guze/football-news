"use client";

const qbs = [
  {
    name: "Patrick Mahomes — Kansas City Chiefs",
    description:
      "There's no denying Mahomes is still the standard at quarterback. Fresh off his 3rd straight Super Bowl appearance, he remains at the top of the game. His arm strength, improvisation, and poise under pressure are unmatched. With another Super Bowl run in sight, he remains the player every defense fears.",
    videoId: "SAhgKF2qEZs",
  },
  {
    name: "Joe Burrow — Cincinnati Bengals",
    description:
      "When healthy, Burrow is as clutch and precise as they come. His connection with Ja'Marr Chase and leadership presence continue to drive the Bengals' offense. The tandem should be in the mix for MVP, and offensive player of the year. Expect a strong comeback season if he stays injury-free.",
    videoId: "Qa_0_ATCmkA",
  },
  {
    name: "Jalen Hurts — Philadelphia Eagles",
    description:
      "Super Bowl MVP. Enough said. Hurts silenced the doubters after a convincing win in the Super Bowl. His rushing ability, combined with a strong arm, gives Philly unmatched versatility. This offense is stacked to the brim with players like Saquon Barkley and A.J. Brown, so expect nothing but a stellar season.",
    videoId: "rqcp3YzSPDU",
  },
  {
    name: "Josh Allen — Buffalo Bills",
    description:
      "After not getting past the hump again this past season, Allen should have a major chip on his shoulder. With new offensive acquisitions, this team should hum along to another AFC Championship game against...",
    videoId: "8TVyeKi0XRg",
  },
  {
    name: "Lamar Jackson — Baltimore Ravens",
    description:
      "After being snubbed last year for MVP, Lamar Jackson is still in the prime of his career and playing as good as anyone in the regular season. With another year older on his legs, doubts may start fluttering whether or not his speed will be the same, but he will continue to dominate.",
    videoId: "5uBL7M3_5xk",
  },
];

export default function CardsBento() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-indigo-400 text-base font-semibold text-center mb-4">
          Elite QB Watch
        </h2>
        <p className="text-4xl sm:text-5xl font-bold text-white text-center mb-14">
          Top 5 Quarterbacks to Watch in 2025
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {qbs.map((qb, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col hover:shadow-xl transition-shadow"
            >
              <a
                href={`https://www.youtube.com/watch?v=${qb.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${qb.videoId}/hqdefault.jpg`}
                    alt={qb.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </a>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {i + 1}. {qb.name}
                </h3>
                <p className="text-sm text-gray-700">{qb.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
