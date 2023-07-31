import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type CardProps = {
  id: number;
};

type Story = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

export const Card: React.FC<CardProps> = (props: CardProps) => {
  const [story, setStory] = useState<Story>();
  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${props.id}.json`
        );
        const data = await response.json();
        setStory(data);
      } catch (error) {
        console.error("Error fetching top story IDs:", error);
      }
    };

    fetchStory();
  }, [props.id]);
  console.log(story);
  return (
    <div className="">
      <div className="mb-4 text-[#9F8772] ">
        <a
          href={`https://hacker-news.firebaseio.com/v0/item/${props.id}.json`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-xl font-semibold">Card id: {props.id}</h2>
        </a>
      </div>

      <div
        key={props.id}
        className="bg-[#F5EFE6] hover:bg-[#FEF5ED] hover:shadow-md hover:border-emerald-200 rounded-tr-lg rounded-tl-lg  p-4"
      >
        <p className="text-[#554994]">
          <span className="font-bold text-[#54BAB9]">Story title:</span>
          <Link to={`/stories/${story?.id}/`}> {story?.title} </Link>
        </p>
        <p>
          <span className="font-bold text-[#54BAB9]">Story id:</span>
          {story?.id}
        </p>
        <p>
          <span className="font-bold text-[#54BAB9]">Story score:</span>
          {story?.score}
        </p>
        <p>
          <span className="font-bold text-[#54BAB9]">Story author:</span>
          {story?.by}
        </p>
        <p>
          <span className="font-bold text-[#54BAB9]">Story descendant:</span>
          {story?.descendants}
        </p>
        <p>
          <span className="font-bold text-[#54BAB9]">Story time:</span>
          {story?.time}
        </p>
        <p>
          <span className="font-bold text-[#54BAB9]">Story type:</span>
          {story?.type}
        </p>
      </div>
    </div>
  );
};
