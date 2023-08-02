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
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/stories/:storyId/",
    element: <DetailsPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header headline="Top Stories From HackerNews By Arya" />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
