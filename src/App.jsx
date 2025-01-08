import React from "react";
import SignatureCanvasComponent from "./components/SignatureCanvas";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-8">
      <SignatureCanvasComponent />
    </div>
  );
}

export default App;
