import React, { useEffect, useRef, useState, Suspense } from "react";
import "./Video.css";
import video from "../../assets/video.mp4";
import circle from "../../assets/circle.svg";
import videoPreview from "../../assets/image2.png"

const Video = () => {

  const viewportWidth = window.innerWidth;

 


  // let heroVideoSrc = heroVideoEl.dataset.srcMobile;
  // let viewportWidth = window.innerWidth;
  // if (viewportWidth >= DESKTOP_BREAKPOINT) {
  //   heroVideoSrc = heroVideoEl.dataset.srcDesktop;
  // }
  // heroVideoEl.src = heroVideoSrc;

  return (
    <div className="hero">
      <Suspense fallback={<img  src={videoPreview} className="video-preview"/>}>
      <video  autoPlay loop muted playsInline id="video">
        <source src={viewportWidth > 768 ? video : video} type="video/mp4" />
      </video>
      </Suspense>
      <div className="hero-text">
        <h1>PRVI AI CHABOT</h1>
        <h1>U REGIONU</h1>
        <p>- AI sistem veštačke inteligencije na području Balkana -</p>
        <div className="btn-group">
          <button className="btn">
            <img src={circle} alt="circle" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
