import { useParams } from "react-router-dom";
import { Card } from "../card/Card";

export const DetailsPage = () => {
  const { storyId } = useParams();
  return (
    <div className="w-2/4 m-auto mt-6">
      <Card id={parseInt(storyId || "")} />
    </div>
  );
};
