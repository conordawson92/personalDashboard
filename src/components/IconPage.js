import React from "react";
import AppIcon from "./AppIcon";

const IconPage = ({ icons }) => {
  return (
    <div
      className="flex flex-wrap justify-center items-center pt-4 px-1"
      style={{ gap: "0.5rem" }}
    >
      {icons.map((icon, index) => (
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

export default IconPage;
