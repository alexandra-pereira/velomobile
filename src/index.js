import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "./routes/ProductsPage";
import HomePage from "./routes/HomePage";
import ErrorPage from "./routes/ErrorPage";
import LoginPage from "./routes/LoginPage";
import LogoutPage from "./routes/LogoutPage";
import ShowroomPage from "./routes/ShowroomPage";
import AtelierPage from "./routes/AtelierPage";
import HistoryPage from "./routes/HistoryPage";
import ArticlePluiePage from "./routes/ArticlePluiePage";
import "bootstrap/dist/css/bootstrap.css";
import "./sass/custom.scss";
import MagazinePage from "./routes/MagazinePage";
import ArticleTrajetLongPage from "./routes/ArticleTrajetLongPage";
import ArticleEcoPage from "./routes/ArticleEcoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "logout",
        element: <LogoutPage />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
      {
        path: "atelier",
        element: <AtelierPage />,
      },
      {
        path: "showroom",
        element: <ShowroomPage />,
      },
      {
        path: "magazine",
        element: <MagazinePage />,
      },
      {
        path: "article_pluie",
        element: <ArticlePluiePage />,
      },
      {
        path: "article_trajet_long",
        element: <ArticleTrajetLongPage />,
      },
      {
        path: "article_eco",
        element: <ArticleEcoPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
