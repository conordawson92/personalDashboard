// src/components/AppPage.js
import React, { useState, useEffect } from "react";
import AppIcon from "./AppIcon";
import iconData from "../data/iconData";
import calculateGap from "../utils/calculateGap"; // Adjust the import path if necessary

const AppPage = () => {
  const [gap, setGap] = useState(calculateGap(window.innerWidth));

  const handleResize = () => {
    setGap(calculateGap(window.innerWidth));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="flex flex-wrap justify-center items-center pt-4 px-2"
      style={{ gap: `${gap}rem` }}
    >
      {iconData.map((icon, index) => (
        <AppIcon
          key={index}
          icon={icon.imgSrc}
          label={icon.label}
          url={icon.url}
        />
      ))}
    </div>
  );
};

export default AppPage;
