import { useParams } from "react-router-dom";
import { Story } from "../components/card/Card";
import { Comments } from "../components/Comments";
import { useEffect, useState } from "react";

export const DetailsPage = () => {
  const [story, setStory] = useState<Story>();
  const { storyId } = useParams();
  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
        );
        const data = await response.json();
        setStory(data);
      } catch (error) {
        console.error("Error fetching top story IDs:", error);
      }
    };

    fetchStory();
  }, [storyId]);

  return (
    <div className="w-2/4 m-auto mt-6">
      <p>
        <span className="font-bold text-[#00B8FC]">Story id:</span>
        {story?.id}
      </p>
      <p>
        <span className="font-bold text-[#00B8FC]">Story score:</span>
        {story?.score}
      </p>
      <p>
        <span className="font-bold text-[#00B8FC]">Story author:</span>
        {story?.by}
      </p>
      <p>
        <span className="font-bold text-[#00B8FC]">Story descendant:</span>
        {story?.descendants}
      </p>
      <p>
        <span className="font-bold text-[#00B8FC]">Story time:</span>
        {story?.time}
      </p>
      <p>
        <span className="font-bold text-[#00B8FC]">Story type:</span>
        {story?.type}
      </p>
      <Comments kids={story?.kids} />
    </div>
  );
};
