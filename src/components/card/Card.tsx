type cardProps = {
  id: number;
};

export const Card = (props: cardProps) => {
  return (
    <div>
      <div
        className="w-1/4 h-60 bg-[#F3F3F3] hover:bg-[#FFFFFF] rounded-3xl "
        key={props.id}
      >
        <div className="pl-8 py-10">
          <p>title</p>
        </div>
      </div>
    </div>
  );
};
