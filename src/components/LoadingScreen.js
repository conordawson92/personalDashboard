import React from "react";
import { BallTriangle } from "react-loader-spinner";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      {/* Other code might be here */}
      <BallTriangle
        type="BallTriangle" // This prop might not be necessary anymore, depending on the version
        color="#2E8B57"
        height={100}
        width={100}
        // other props
      />
    </div>
  );
};

// Just for positioning the loader in the center
const styles = {
  loaderContainer: {
    height: "100vh", // It takes full viewport height
    width: "100vw", // It takes full viewport width, you can remove this if it's not affecting your layout
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Optional: you might want to have a background color for loader container
  },
};

export default LoadingScreen;
