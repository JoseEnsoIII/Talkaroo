import React from 'react';
import VideoPlayer from '../components/movie';
import Navbar from '../Header/navbar';
import FlexWrap from '../components/multiplecard'
import Footer from '../Footer/footer';
import { FaDownload, FaShare,FaPlus } from 'react-icons/fa';

function Movie() {
  const videoUrl = 'https://example.com/your-video.mp4'; // Replace with your video URL
  const videoDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const handleDownloadClick = () => {
    // Implement the download functionality here
    // You can use the HTML5 download attribute on a link element or fetch the video and trigger a download
    // Example: window.location.href = videoUrl;
  };

  const handleShareClick = () => {
    // Implement the share functionality here
    // You can open a share dialog or copy the video URL to the clipboard
    // Example: navigator.clipboard.writeText(videoUrl);
  };

  return (
    <div className="Movie" style={{ backgroundColor: "#212016",height:"100%" }}>
    <Navbar />
    <h1 style={{ fontSize: "40px", marginLeft: "30px", color: "#fff" }}>| Sample Movie</h1>
  
    <VideoPlayer videoUrl={videoUrl} />
    <p style={{ textAlign: "center", maxWidth: "80%", margin: "0 auto",marginTop:"20px", color: "#fff" }}>{videoDescription}</p>
    
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: "50px" }}>
      <button style={{margin:"10px"}} onClick={handleDownloadClick}>
        <FaDownload /> Download
      </button>
      <button style={{margin:"10px"}} onClick={handleDownloadClick}>
        <FaPlus /> Add to Watchlist
      </button>
      <button style={{margin:"10px"}} onClick={handleShareClick}>
        <FaShare /> Share
      </button>
    </div>
    
    <FlexWrap />
    <Footer />
  </div>
  
  );
}

export default Movie;
