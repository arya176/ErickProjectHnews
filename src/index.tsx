import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HomePage } from "./pages/HomePage";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DetailsPage } from "./pages/DetailsPage";
import { ErrorPage } from "./pages/ErrorPage";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <HomePage />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/stories/:storyId/",
  //     element: <DetailsPage />,
  //   },
  // ]);
  {
    path: "/",
    element: (
      <>
        <Header headline="Top Stories From HackerNews By Arya" />
        <HomePage />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/stories/:storyId/",
    element: (
      <>
        <Header headline="Top Stories From HackerNews By Arya" />
        <DetailsPage />
        <Footer />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
