// src/utils/calculateIconsPerPage.js
const iconWidth = 80; // Assume each icon takes up 100px width including margin
const iconHeight = 110; // Assume each icon takes up 100px height including margin
const pagePadding = 17; // Assume 20px padding around the page
const dockHeight = 112; // Assume the dock has a height of 100px

const calculateIconsPerPage = (windowWidth, windowHeight) => {
  const iconsPerRow = Math.floor((windowWidth - pagePadding * 2) / iconWidth);
  const rowsPerPage = Math.floor(
    (windowHeight - pagePadding * 2 - dockHeight) / iconHeight
  );
  return iconsPerRow * rowsPerPage;
};

export default calculateIconsPerPage;
