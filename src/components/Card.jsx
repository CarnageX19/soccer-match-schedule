function Card({
  league,
  league_photo,
  season_start,
  season_end,
  stage,
  team1,
  team2,
  team1_shortName,
  team2_shortName,
  team1_logo,
  team2_logo,
  scheduled_time
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-md mx-auto hover:shadow-lg transition duration-300">
      {/* League Info */}
      <div className="flex items-center mb-2">
        <img
          src={league_photo}
          alt={`${league} emblem`}
          className="w-8 h-8 object-contain mr-3"
        />
        <div>
          <h2 className="text-md font-semibold">{league}</h2>
          <p className="text-xs text-gray-500">
            {stage} | {season_start} → {season_end}
          </p>
        </div>
      </div>

      {/* Match Detail */}
      <div className="mb-2">
        <p className="text-sm font-medium">{team1} vs {team2}</p>
        <p className="text-xs text-gray-600">Scheduled: {scheduled_time}</p>
      </div>

      {/* Teams Logos */}
      <div className="flex justify-around items-center mt-3">
        <div className="flex flex-col items-center">
          <img
            src={team1_logo}
            alt={team1_shortName}
            className="w-12 h-12 object-contain"
          />
          <p className="text-xs mt-1">{team1_shortName}</p>
        </div>

        <div className="text-md font-semibold text-gray-500">vs</div>

        <div className="flex flex-col items-center">
          <img
            src={team2_logo}
            alt={team2_shortName}
            className="w-12 h-12 object-contain"
          />
          <p className="text-xs mt-1">{team2_shortName}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;