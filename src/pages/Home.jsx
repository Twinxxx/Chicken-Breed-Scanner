import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ImageUploader from "../components/ImageUploader";
import ScanResult from "../components/ScanResult";
import UserGuide from "../components/UserGuide";
import "../styles/home.css";

const Home = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [scanResult, setScanResult] = useState("");

  const handleScanClick = async (file) => {
    if (!file) return;

    const formData = new FormData();
    if (file instanceof File) {
      formData.append("file", file);
    } else {
      const response = await fetch(file);
      const blob = await response.blob();
      formData.append("file", new File([blob], "sample.jpg", { type: blob.type }));
    }

    try {
      const res = await fetch("http://127.0.0.1:3002/analyze-image", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log("Scan Result:", data);
      setScanResult(data);
    } catch (err) {
      console.error("Scan failed:", err);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="home-container">
        <div className="left-section">
          <ImageUploader onImageSelect={setUploadedImage} uploadedImage={uploadedImage} />

          {/* Can't still access | Still no data to scan */}
          <button className="scan-btn" disabled={!uploadedImage} onClick={() => handleScanClick(uploadedImage)}>
            Scan Chicken
          </button>
        </div>

        <div className="right-section">
          <UserGuide onSampleClick={handleScanClick} />
        </div>

        <div>
          <ScanResult result={scanResult} />
        </div>
      </div>
    </div>
  );
};

export default Home;
