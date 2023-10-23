import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import AppContainer from "./components/AppContainer";
import LoadingScreen from "./components/LoadingScreen";
import "./App.css";

function App() {
  // State to keep track of loading status
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate the loading of resources with a timeout
    // You can replace this with your actual loading logic
    const simulateLoading = setTimeout(() => {
      setIsLoading(false); // Set loading to false when resources are loaded
    }, 3000); // 3000 milliseconds = 3 seconds

    // Cleanup the timeout if the component is unmounted
    return () => clearTimeout(simulateLoading);
  }, []);

  // Render the loading screen if still loading
  if (isLoading) {
    return <LoadingScreen />;
  }

  // Render your application once it is loaded
  return (
    <div className="App">
      <AppContainer />
    </div>
  );
}

export default App;
