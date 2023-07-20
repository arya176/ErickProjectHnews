type headerProps = {
  headline: string;
};

export const Header = (props: headerProps) => {
  return (
    <div className="flex flex-col">
      <div className=" py-8 my-4 w-BodyWith m-auto rounded-xl text-[#182747] text-center text-xl border border-orange-200 shadow-md">
        <h1 className="font-bold text-[#554994]">{props.headline}</h1>
      </div>
    </div>
  );
};
