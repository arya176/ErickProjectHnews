type headerProps = {
  headline: string;
};

export const Header = (props: headerProps) => {
  return (
    <div className="flex flex-col pb-[150px] pt-[60px] bg-[#00B8FC] mb-32">
      <div className="  mb-4  text-center text-xl ">
        <h1 className="font-bold font-sans text-4xl text-[#2E3132] uppercase ">
          {props.headline}
        </h1>
      </div>
    </div>
  );
};
