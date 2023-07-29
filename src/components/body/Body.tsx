import React, { useEffect, useState } from "react";
import { Card } from "../card/Card";

export const Body: React.FC = () => {
  const [topStoryIds, setTopStoryIds] = useState<number[]>([]);
  //sintax   useEffect ( () => {}, []);
  useEffect(() => {
    const fetchTopStoryIds = async () => {
      try {
        const response = await fetch(
          "https://hacker-news.firebaseio.com/v0/topstories.json"
        );
        const data: number[] = await response.json();
        //
        // setTopStoryIds(data.slice(0, 13)); or like below
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
            <div className="flex-1 p-4 rounded-3xl mb-4 border border-cyan-600 shadow-md max-h-48 overflow-scroll ">
              <Card key={storyId} id={storyId} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
