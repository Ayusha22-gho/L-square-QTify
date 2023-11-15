import React from "react";
import "./song.css";

export default function index({image,likes,title,genre}) {
  return (
    <div className="song-card">
      <div className="song-image-section">
        <div className="song-card-img">
          <img
           src = {image}
            alt="song"
            width={200}
            height={190}
          />
        </div>
        <div className="song-content">
          <span>{likes} likes</span>
        </div>
      </div>
      <div className="song-title">
        <p>{title}</p>
      </div>
    </div>
  );
}
