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
    <div className="mt-8  w-BodyWith">
      <div>
        <span className="text-[#54BAB9]">Wrriten By:</span> {comment?.by}
      </div>
      <div>
        <span className="text-[#54BAB9]">comment ID:</span> {comment?.id}
      </div>
      <div>
        <span className="bg-[#54BAB9]">Story comment:</span> {comment?.text}
      </div>
      ;
      <hr />
    </div>
  );
};
