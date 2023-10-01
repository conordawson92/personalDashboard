// src/components/AppIcon.js
import React from "react";

function AppIcon({ icon, label, url, inDock }) {
  return (
    <a
      href={url}
      className={`app-icon flex flex-col items-center w-20 ${
        inDock
          ? ""
          : " hover:bg-gray-300 hover:bg-opacity-20"
      } rounded-lg p-2 transition duration-300 ease-in-out transform hover:scale-105`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={icon}
        alt={`${label} icon`}
        className="app-icon-image rounded-lg w-16 h-16"
      />
      {!inDock && (
        <div className="app-icon-label text-white mt-2 text-xs truncate w-16">
          {label}
        </div>
      )}
    </a>
  );
}

export default AppIcon;
