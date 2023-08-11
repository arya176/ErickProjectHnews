import React, { useEffect, useState } from "react";
import { Card } from "../components/card/Card";
import { useLocation } from "react-router-dom";

export const HomePage: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const quantity = parseInt(searchParams.get("quantity") || "0", 10);

  const [topStoryIds, setTopStoryIds] = useState<number[]>([]);
  useEffect(() => {
    const fetchTopStoryIds = async () => {
      try {
        const response = await fetch(
          "https://hacker-news.firebaseio.com/v0/topstories.json"
        );
        const data: number[] = await response.json();
        const slicedData = data.slice(0, quantity);
        setTopStoryIds(slicedData);
      } catch (error) {
        console.error("Error fetching top story IDs:", error);
      }
    };

    fetchTopStoryIds();
  }, [quantity]);

  return (
    <div>
      <div className="flex flex-row flex-wrap w-BodyWith m-auto gap-2 ">
        {topStoryIds.map((storyId) => (
          <div className="w-[250px] m-auto">
            <div className="flex-1 p-3  bg-[#F0F0F0] h-80">
              <Card key={storyId} id={storyId} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
