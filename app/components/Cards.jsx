"use client";

const Cards = () => {
  const qbs = [
    {
      name: "Patrick Mahomes — Kansas City Chiefs",
      description:
        "There's no denying Mahomes is still the standard at quarterback. Fresh off his 3rd straight superbowl appearance, he remains at the top of the game. His arm strength, improvisation, and poise under pressure are unmatched. With another Super Bowl run in sight, he remains the player every defense fears.",
      videoId: "SAhgKF2qEZs",
    },
    {
      name: "Joe Burrow — Cincinnati Bengals",
      description:
        "When healthy, Burrow is as clutch and precise as they come. His connection with Ja'Marr Chase and leadership presence continue to drive the Bengals' offense. The tandem should be in the mix for MVP, and offesnive player of the year. Expect a strong comeback season if he stays injury-free.",
      videoId: "Qa_0_ATCmkA",
    },
    {
      name: "Jalen Hurts — Philadelphia Eagles",
      description:
        "Super bowl MVP. Enough said. Hurts silenced the doubters after a convincing win in the superbowl. His rushing ability, combined with a strong arm, gives Philly unmatched versatility. This offense is stacked to the brim with players like Saquon Barkely, and A.J Brown, so expect nothing but a stellar season.",
      videoId: "rqcp3YzSPDU",
    },
    {
      name: "Josh Allen — Buffalo Bills",
      description:
        "After not getting past the hump again this past season, Allen should have a major chip on his shoulder. With new offensive aquistions, this team should hum along to another AFC Championship game against...",
      videoId: "8TVyeKi0XRg",
    },
    {
      name: "Lamar Jackson — Baltimore Ravens",
      description:
        "After being snubbed last year for MVP, Lamar Jackson is still in the prime of his career and playing as good as anyone in the regular season. With another year older on his legs doubts may start fluttering whether or not his speed will be the same, but he will continue to dominate.",
      videoId: "5uBL7M3_5xk",
    },
  ];

  return (
    <div className="bg-gray-900 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <h2 className="text-center text-xl font-semibold text-indigo-500">
          Elite QB Watch
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Top 5 Quarterbacks to Watch in 2025
        </p>
        <div className="mt-16 space-y-10">
          {qbs.map((qb, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="w-full md:w-1/2">
                <a
                  href={`https://www.youtube.com/watch?v=${qb.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-md shadow-md">
                    <img
                      src={`https://img.youtube.com/vi/${qb.videoId}/hqdefault.jpg`}
                      alt={qb.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </a>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {idx + 1}. {qb.name}
                </h3>
                <p className="text-sm text-gray-600">{qb.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
