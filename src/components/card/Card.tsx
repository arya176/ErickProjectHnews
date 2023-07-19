import React from "react";

type CardProps = {
  id: number;
};

export const Card: React.FC<CardProps> = (props) => {
  return (
    <div>
      <div
        className="p-4 bg-[#F3F3F3] hover:bg-[#FFFFFF] hover:shadow-md hover:border-emerald-200 rounded-3xl mb-4 "
        key={props.id}
      >
        <a
          href={`https://hacker-news.firebaseio.com/v0/item/${props.id}.json`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-xl font-semibold">Card id: {props.id}</h2>
        </a>
        <p className="text-base">Score:</p>
        <p className="text-base">Author:</p>
      </div>
    </div>
  );
};
