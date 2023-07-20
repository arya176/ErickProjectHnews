import React, { useEffect, useState } from "react";

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
  return (
    <div className="">
      <div className="mb-4">
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
        className="bg-[#D1E8E4] hover:bg-[#FEF5ED] hover:shadow-md hover:border-emerald-200  p-4"
      >
        <p>
          <span className="font-bold">Story title:</span>
          {story?.title}
        </p>
        <p>
          <span className="font-bold">Story id:</span>
          {story?.id}
        </p>
        <p>
          <span className="font-bold">Story score:</span>
          {story?.score}
        </p>
        <p>
          <span className="font-bold">Story author:</span>
          {story?.by}
        </p>
        <p>
          <span className="font-bold">Story descendant:</span>
          {story?.descendants}
        </p>
        <p>
          <span className="font-bold">Story time:</span>
          {story?.time}
        </p>
        <p>
          <span className="font-bold">Story type:</span>
          {story?.type}
        </p>
        {/* <p className="text-base">
          Story type:
          {story?.kids.map((kid) => {
            return <div></div>;
          })}
        </p> */}
      </div>
    </div>
  );
};
