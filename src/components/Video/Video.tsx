import React, { useEffect, useRef, useState, Suspense } from "react";
import "./Video.css";
import video from "../../assets/video.mp4";
import circle2 from "../../assets/circle2.svg";
import videoPreview from "../../assets/videoPreview.png";

const Video = ({ resultRef }: any) => {
  const [loaded, setLoaded] = useState(false);

  const viewportWidth = window.innerWidth;

  const scroll = (e: any) => {
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      {!loaded && (
        <img
          src={videoPreview}
          className="video-preview"
          width={500}
          height={500}
        />
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <video
          autoPlay
          disablePictureInPicture
          loop
          muted
          playsInline
          id="video"
          onLoadedData={() => setLoaded(true)}
          style={{ display: loaded ? "inline" : "none" }}
        >
          <source src={viewportWidth > 768 ? video : video} type="video/mp4" />
        </video>
      </Suspense>
      <div className="hero-text">
        <h1>PRVI AI CHABOT</h1>
        <h1>U REGIONU</h1>
        <p>- AI sistem veštačke inteligencije na području Balkana -</p>
        <div className="btn-group">
          <button className="btn" onClick={(e) => scroll(e)}>
            <img src={circle2} alt="circle" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
