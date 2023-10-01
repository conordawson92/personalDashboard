// src/components/AppPage.js
import React, { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import IconPage from "./IconPage";
import { pageIcons } from "../data/iconData";
import calculateIconsPerPage from "../utils/calculateIconsPerPage"; // Import the new function

const AppPage = () => {
  const [iconsPerPage, setIconsPerPage] = useState(
    calculateIconsPerPage(window.innerWidth, window.innerHeight)
  );
  const pages = Math.ceil(pageIcons.length / iconsPerPage);

  const handleResize = () => {
    setIconsPerPage(
      calculateIconsPerPage(window.innerWidth, window.innerHeight)
    );
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SwipeableViews>
      {Array.from({ length: pages }).map((_, pageIndex) => {
        const icons = pageIcons.slice(
          // Update to use pageIcons
          pageIndex * iconsPerPage,
          (pageIndex + 1) * iconsPerPage
        );
        return <IconPage key={pageIndex} icons={icons} />;
      })}
    </SwipeableViews>
  );
};

export default AppPage;
