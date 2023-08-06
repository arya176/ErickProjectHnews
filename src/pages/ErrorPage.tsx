import { useLocation } from "react-router-dom";

export const ErrorPage = () => {
  const location = useLocation();
  const error = location.state?.error;

  console.error(error);

  return (
    <div className="flex flex-row flex-wrap">
      <div
        id="error-page"
        className="w-2/4 m-auto text-center text-lg bg-[#FEBBCC] rounded-lg mt-40 border shadow-xl"
      >
        <h1 className="py-32 text-lg font-bold font-serif ">Oops!</h1>
        <p className="pb-8">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error?.statusText || error?.message}</i>
        </p>
      </div>
    </div>
  );
};
