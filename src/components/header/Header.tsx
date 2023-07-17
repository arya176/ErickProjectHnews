type headerProps = {
  headline: string;
};

export const Header = (props: headerProps) => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#F3F3F3] py-8 my-4 w-BodyWith m-auto rounded-xl text-[#182747] text-center text-xl">
        <h1 className="font-bold">{props.headline}</h1>
      </div>
    </div>
  );
};
