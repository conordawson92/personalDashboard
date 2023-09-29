// src/components/Dock.js
import React from 'react';
import AppIcon from './AppIcon';
import iconData from '../data/iconData';  // Adjust the import path if necessary

const Dock = () => {
  // Assuming the last 4 icons in your iconData array are the ones you want in the dock
  const dockIcons = iconData.slice(-4);

  return (
    <div className="dock fixed bottom-0 left-0 right-0 h-21 bg-gray-800 p-1">
      <div className="flex justify-between items-center h-full mx-auto max-w-screen-md">
        {dockIcons.map((icon, index) => (
          <AppIcon key={index} icon={icon.imgSrc} label={icon.label} url={icon.url} inDock={true} />
        ))}
      </div>
    </div>
  );
};

export default Dock;
