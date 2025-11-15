import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 
import ImageUploader from '../components/ImageUploader';
// import ScanResult from '../components/ScanResult';
import UserGuide from '../components/UserGuide';
import '../styles/home.css';

const Home = () => {
  const [uploadedImage, setUploadedImage] = useState(null);


  const handleSampleClick = (src) => {
    setUploadedImage(src); 
  };

  return (
    <div>

      <Navbar />

      <div className="home-container">
        <div className="left-section">

          <ImageUploader 
            onImageSelect={setUploadedImage} 
            uploadedImage={uploadedImage} 
          />

          {/* Can't still access | Still no data to scan */}
          <button className="scan-btn" disabled>
            Scan Chicken
          </button>

        </div>

        <div className="right-section">
          <UserGuide onSampleClick={handleSampleClick} />
        </div>
      </div>
    </div>
  );
};

export default Home;
