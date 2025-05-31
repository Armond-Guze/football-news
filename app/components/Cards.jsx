"use client";

const Cards = () => {
  const qbs = [
    {
      name: "Patrick Mahomes — Kansas City Chiefs",
      description:
        "There's no denying Mahomes is still the standard at quarterback. His arm strength, improvisation, and poise under pressure are unmatched. With another Super Bowl run in sight, he remains the player every defense fears.",
      image: "images/patrick-mahomes.png",
    },
    {
      name: "Joe Burrow — Cincinnati Bengals",
      description:
        "When healthy, Burrow is as clutch and precise as they come. His connection with Ja'Marr Chase and leadership presence continue to drive the Bengals' offense. Expect a strong comeback season if he stays injury-free.",
      image: "images/joeburrow.png",
    },
    {
      name: "Jalen Hurts — Philadelphia Eagles",
      description:
        "Despite a rocky finish in 2024, Hurts remains a dynamic offensive force. His rushing ability, combined with a strong arm, gives Philly unmatched versatility. Expect him to bounce back and reassert his MVP-caliber form.",
      image: "images/jalen-hurts.png",
    },
    {
      name: "Josh Allen — Buffalo Bills",
      description:
        "Allen’s dual-threat ability continues to put defenses on edge. His cannon arm and fearless running style make him one of the toughest matchups in the league. Consistency will be key as the Bills aim for a deep playoff run.",
      image: "images/josh-allen.png",
    },
    {
      name: "Lamar Jackson — Baltimore Ravens",
      description:
        "The 2023 MVP is still a threat on every down thanks to his electric legs and underrated arm. Jackson's ability to extend plays and lead in big moments keeps the Ravens in Super Bowl conversations. His chemistry with receivers continues to grow.",
      image: "images/lamar-jackson.png",
    },
  ];

  return (
    <div className="bg-gray-900 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <h2 className="text-center text-xl font-semibold text-indigo-500">
          Elite QB Watch
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Top 10 Quarterbacks to Watch in 2025
        </p>
        <div className="mt-16 space-y-10">
          {qbs.map((qb, idx) => {
            const isDark = idx % 2 === 0;
            const bgColor = isDark ? "bg-slate-800" : "bg-slate-700";
            const textColor = "text-white";

            return (
              <div
                key={idx}
                className={`${bgColor} rounded-3xl shadow-xl p-10 flex flex-col sm:flex-row items-center sm:items-start gap-10 hover:shadow-2xl transition-shadow w-full`}
              >
                <div className="w-full sm:w-72 h-64 bg-gray-200 rounded-xl overflow-hidden">
                 <img
  src={qb.image}
  alt={qb.name}
  className={`w-full h-full object-cover rounded-xl ${
    qb.name.includes("Mahomes") || qb.name.includes("Burrow")
      ? "object-[0_20%]"
      : "object-top"
  }`}
/>

                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>
                    {idx + 1}. {qb.name}
                  </h3>
                  <p className={`text-lg leading-relaxed ${textColor}`}>
                    {qb.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
