import { useState, useEffect } from "react";
import footballService from "../apis/backend-caller";
import Card from "./Card";

function Panel() {
  const [matches, setMatches] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(4);

  function formatLocalTime(utcDate) {
    const date = new Date(utcDate);
    return date.toLocaleString();
  }

  useEffect(() => {
    const fetchData = async () => {
      const matchData = await footballService.getSoccerMatches();
      setMatches(matchData);
    };
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 4);
  };

  return (
    <>
      <div className="flex justify-center px-4 mt-6">
        <div className="w-full max-w-5xl grid grid-cols-1 gap-6">
          {matches.slice(0, itemsToShow).map((item, index) => (
            <Card
              key={index}
              league={item.competition.name}
              league_photo={item.competition.emblem}
              season_start={item.season.startDate}
              season_end={item.season.endDate}
              stage={item.stage}
              team1={item.homeTeam.name}
              team2={item.awayTeam.name}
              team1_shortName={item.homeTeam.shortName}
              team2_shortName={item.awayTeam.shortName}
              team1_logo={item.homeTeam.crest}
              team2_logo={item.awayTeam.crest}
              scheduled_time={formatLocalTime(item.utcDate)}
            />
          ))}
        </div>
      </div>

      {itemsToShow < matches.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-white text-black px-3 py-2 rounded-lg shadow hover:bg-gray-100 transition duration-200"
          >
            Load More...
          </button>
        </div>
      )}
    </>
  );
}

export default Panel;
