// src/utils/calculateGap.js
const calculateGap = (width) => {
  const breakpoints = [640, 768, 1024, 1280, 1536]; // Tailwind CSS breakpoints
  const baseGap = 0.5   ; // Base gap size
  const gapIncrement = 1; // Amount to increase the gap size by for each screen size range

  for (let i = 0; i < breakpoints.length; i++) {
    if (width < breakpoints[i]) {
      return baseGap + gapIncrement * i;
    }
  }

  return baseGap + gapIncrement * breakpoints.length;
};

export default calculateGap;
