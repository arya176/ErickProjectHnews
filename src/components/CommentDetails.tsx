import { useEffect, useState } from "react";

type Props = {
  id: number;
};

type CommentType = {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
};
export const CommentDetails = (props: Props) => {
  const [comment, setComment] = useState<CommentType>();

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${props.id}.json`
        );
        const data = await response.json();
        setComment(data);
      } catch (error) {
        console.error("Error fetching top story IDs:", error);
      }
    };

    fetchComment();
  }, [props.id]);
  return (
    <>
      <div>{comment?.id}</div>
      <div>{comment?.by}</div>
      <div>{comment?.text}</div>;
      <hr />
    </>
  );
};
