import React, { useEffect, useState } from "react";
import { Card } from "../card/Card";

export const Body: React.FC = () => {
  const [topStoryIds, setTopStoryIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchTopStoryIds = async () => {
      try {
        const response = await fetch(
          "https://hacker-news.firebaseio.com/v0/topstories.json"
        );
        const data = await response.json();
        setTopStoryIds(data);
      } catch (error) {
        console.error("Error fetching top story IDs:", error);
      }
    };

    fetchTopStoryIds();
  }, []);

  return (
    <div className="flex flex-wrap gap-1 justify-center w-BodyWith">
      <div className="w-1/3">
        {topStoryIds.map((storyId) => (
          <Card key={storyId} id={storyId} />
        ))}
      </div>
    </div>
  );
};
