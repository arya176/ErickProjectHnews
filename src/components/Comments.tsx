import { CommentDetails } from "./CommentDetails";

type Props = {
  kids?: number[];
};

export const Comments = (props: Props) => {
  return props.kids && props.kids.length ? (
    <div>
      {props.kids.map((kidId) => {
        return <CommentDetails id={kidId} />;
      })}
    </div>
  ) : (
    <div> No comments</div>
  );
};
