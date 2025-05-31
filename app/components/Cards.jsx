// import patrickImage from './images/patrick-mahomes.png';

const Top10QBsBento = () => {
 const qbs = [
  {
    name: "Patrick Mahomes — Kansas City Chiefs",
    description: "There's no denying Mahomes is still the standard...",
    // image: patrickImage
  },
  {
    name: "Joe Burrow — Cincinnati Bengals",
    description: "When healthy, Burrow is as clutch and precise as they come...",
    image: "https://static.www.nfl.com/image/private/t_headshot_desktop/league/c6xezknr8zgr9pvtfbqv"
  },
  {
    name: "Josh Allen — Buffalo Bills",
    description: "Allen’s dual-threat ability continues to put defenses on edge...",
    image: "https://static.www.nfl.com/image/private/t_headshot_desktop/league/eevay8t3rphj2bp5txqz"
  },
  {
    name: "C.J. Stroud — Houston Texans",
    description: "Stroud lit up the league as a rookie...",
    image: "https://static.www.nfl.com/image/private/t_headshot_desktop/league/qozwlw4wrhe62xeefhny"
  },
  {
    name: "Jalen Hurts — Philadelphia Eagles",
    description: "Despite a rocky finish in 2024, Hurts remains dynamic...",
    image: "https://static.www.nfl.com/image/private/t_headshot_desktop/league/jvf3wuej7kk4hqkmzqt7"
  },
  {
    name: "Justin Herbert — Los Angeles Chargers",
    description: "Herbert’s arm talent is unquestioned...",
    image: "https://static.www.nfl.com/image/private/t_headshot_desktop/league/hf0ayg5vmbaykn7hvysc"
  },
  {
    name: "Lamar Jackson — Baltimore Ravens",
    description: "The 2023 MVP is still a threat on every down...",
    image: "https://static.www.nfl.com/image/private/t_headshot_desktop/league/lbfx8iwqjlb7kjycq5ey"
  },
  {
    name: "Dak Prescott — Dallas Cowboys",
    description: "Prescott continues to be productive and efficient...",
    image: "https://static.www.nfl.com/image/private/t_headshot_desktop/league/xv2dpv2y7sv0nqzibpgj"
  },
  {
    name: "Trevor Lawrence — Jacksonville Jaguars",
    description: "Lawrence showed flashes of greatness in 2024...",
    image: "https://static.www.nfl.com/image/private/t_headshot_desktop/league/suuvsfqg5rml6jstplgq"
  },
  {
    name: "Kirk Cousins — Atlanta Falcons",
    description: "Now leading the Falcons, Cousins brings veteran leadership...",
    image: "https://static.www.nfl.com/image/private/t_headshot_desktop/league/qmibcrwjjziie3vnoy7f"
  }
];

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-base font-semibold text-indigo-600">Elite QB Watch</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Top 10 Quarterbacks to Watch in 2025
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {qbs.map((qb, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-xl shadow-md p-6 flex flex-col overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={qb.image}
                alt={qb.name}
                className="h-40 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {idx + 1}. {qb.name}
              </h3>
              <p className="text-sm text-gray-600">{qb.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Top10QBsBento;
