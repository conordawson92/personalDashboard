import React from 'react';
import AppIcon from './AppIcon';
import { dockIcons } from '../data/iconData';  // Adjust the import statement

const Dock = () => {
  return (
    <div className="dock fixed bottom-2 left-4 right-4 bg-opacity-10 bg-white p-2 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center h-full mx-auto max-w-screen-md">
        {dockIcons.map((icon, index) => (
          <AppIcon key={index} icon={icon.imgSrc} url={icon.url} inDock={true} />
        ))}
      </div>
    </div>
  );
};

export default Dock;