import { useLocation } from "react-router-dom";

export const ErrorPage = () => {
  const location = useLocation();
  const error = location.state?.error;

  console.error(error);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex justify-center items-center">
        <img src="./images/error.png" alt="" className="w-[250px]" />
        <div id="error-page" className="ml-4">
          <h1 className="py-4 text-lg font-bold font-serif">Oops!</h1>
          <p className="pb-4">Don't worry, an unexpected error has occurred.</p>
          <p>
            <i>{error?.statusText || error?.message}</i>
          </p>
        </div>
      </div>
    </div>
  );
};
