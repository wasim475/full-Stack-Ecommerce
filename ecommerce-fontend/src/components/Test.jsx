import { useState } from "react";

function App() {
  const [isLandingVisible, setIsLandingVisible] = useState(false);

  return (
    <div className="w-screen h-screen">
      {!isLandingVisible ? (
        <div
          className="relative w-full h-full bg-black flex overflow-hidden"
          onAnimationEnd={() => setIsLandingVisible(true)}
        >
          <div className="w-1/2 h-full bg-black absolute left-0 animate-slideLeft"></div>
          <div className="w-1/2 h-full bg-black absolute right-0 animate-slideRight"></div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-gray-100">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to the Landing Page!</h1>
        </div>
      )}
    </div>
  );
}

export default App;