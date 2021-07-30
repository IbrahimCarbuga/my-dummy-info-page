import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box
} from "./FooterStyles";
  
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-30px" }}>
        {t("FooterMessage")}
      </h1>     
    </Box>
  );
};