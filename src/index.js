import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import LoginPage from "./Pages/LoginPage";
import LogoutPage from "./Pages/LogoutPage";
import ShowroomPage from "./Pages/ShowroomPage";
import AtelierPage from "./Pages/AtelierPage";
import HistoryPage from "./Pages/HistoryPage";
import ArticlePluiePage from "./Pages/ArticlePluiePage";
import "bootstrap/dist/css/bootstrap.css";
import "./sass/custom.scss";
import MagazinePage from "./Pages/MagazinePage";
import ArticleTrajetLongPage from "./Pages/ArticleTrajetLongPage";
import ArticleEcoPage from "./Pages/ArticleEcoPage";
import CguPage from "./Pages/CguPage";
import LegalMentionsPage from "./Pages/LegalMentionsPage";

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
      {
        path: "cgu_cgv",
        element: <CguPage />,
      },
      {
        path: "legal_mentions",
        element: <LegalMentionsPage />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
