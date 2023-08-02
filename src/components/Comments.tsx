import { CommentDetails } from "./CommentDetails";

type Props = {
  kids?: number[];
};

// comments should have 'kids' as a prop , it's an array of numbers
export const Comments = (props: Props) => {
  //do fetching based on kids coming from props [12319, 123981923, 2193892138]
  // Render Comment component that accepts commentId as a prop
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
