import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignatureCanvasComponent = () => {
  const sigCanvas = useRef(null);
  const [savedSignature, setSavedSignature] = useState(null);

  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  const saveSignature = () => {
    const signatureData = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    setSavedSignature(signatureData);
    console.log("Saved Signature:", signatureData); // Logs the base64 data
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h2 className="text-xl font-bold">Signature Maker</h2>
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{
          width: 500,
          height: 200,
          className: "border border-gray-300 rounded-md",
        }}
      />
      <div className="flex gap-4">
        <button
          onClick={clearSignature}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Clear
        </button>
        <button
          onClick={saveSignature}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Save
        </button>
      </div>
      {savedSignature && (
        <div className="mt-4">
          <p className="text-sm">Saved Signature:</p>
          <img src={savedSignature} alt="Saved Signature" className="border border-gray-300" />
        </div>
      )}
    </div>
  );
};

export default SignatureCanvasComponent;
