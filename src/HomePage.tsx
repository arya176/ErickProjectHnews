import React, { useEffect, useState } from "react";
import { Card } from "./components/card/Card";

export const HomePage: React.FC = () => {
  const [topStoryIds, setTopStoryIds] = useState<number[]>([]);
  useEffect(() => {
    const fetchTopStoryIds = async () => {
      try {
        const response = await fetch(
          "https://hacker-news.firebaseio.com/v0/topstories.json"
        );
        const data: number[] = await response.json();
        const slicedData = data.slice(0, 13);
        setTopStoryIds(slicedData);
      } catch (error) {
        console.error("Error fetching top story IDs:", error);
      }
    };

    fetchTopStoryIds();
  }, []);

  return (
    <div>
      <div className="flex flex-row flex-wrap gap-2 w-BodyWith m-auto">
        {topStoryIds.map((storyId) => (
          <div className="w-[250px] m-auto">
            <div className="flex-1 p-4 rounded-3xl mb-4 border border-cyan-600 shadow-md max-h-48 overflow-scroll bg-[#FFBF86]">
              <Card key={storyId} id={storyId} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
