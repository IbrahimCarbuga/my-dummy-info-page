import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  document.title = "Home Page";  
  return (
    <Suspense fallback="Loading..">
      <div className="container pageContainer">
        <h2 className="center">{t("Home")}</h2>
      </div>
    </Suspense>
  );
};
