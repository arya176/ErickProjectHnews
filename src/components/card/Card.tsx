import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type CardProps = {
  id: number;
};

export type Story = {
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

  return (
    <div className="">
      <div className="mb-4 text-[#182747]  px-2">
        <a
          href={`https://hacker-news.firebaseio.com/v0/item/${props.id}.json`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-l  font-semibold">Card id: {props.id}</h2>
        </a>
      </div>

      <div key={props.id} className="bg-[#F0F0F0]  px-2 pb-8 h-[250px]">
        <div className="">
          <p className="text-[#182747] mb-2 ">
            <span className=" text-[#00B8FC] font-sans font-bold">
              Story title:
            </span>
            <Link to={`/stories/${story?.id}/`}> {story?.title} </Link>
          </p>
        </div>
        <p>
          <span className=" text-[#00B8FC] font-sans font-bold">Story id:</span>
          {story?.id}
        </p>
        <p>
          <span className=" text-[#00B8FC] font-sans font-bold">
            Story score:
          </span>
          {story?.score}
        </p>
        <p>
          <span className=" text-[#00B8FC] font-sans font-bold">
            Story author:
          </span>
          {story?.by}
        </p>
        <p>
          <span className=" text-[#00B8FC] font-sans font-bold">
            Story descendant:
          </span>
          {story?.descendants}
        </p>
        <p>
          <span className=" text-[#00B8FC] font-sans font-bold">
            Story time:
          </span>
          {story?.time}
        </p>
        <p>
          <span className=" text-[#00B8FC] font-sans font-bold">
            Story type:
          </span>
          {story?.type}
        </p>
      </div>
    </div>
  );
};
