import React from "react";
import { useLocation } from "react-router-dom";

export const ErrorPage = () => {
  const location = useLocation();
  const error = location.state?.error;

  console.error(error);

  return (
    <div className="flex flex-col">
      <div
        id="error-page"
        className="w-2/4 m-auto align-middle justify-center  text-center text-lg bg-slate-400 rounded-lg"
      >
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error?.statusText || error?.message}</i>
        </p>
      </div>
    </div>
  );
};
