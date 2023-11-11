import React from "react";
import "./card.css";

export default function index({image,follows,title}) {
  return (
    <div className="card">
      <div className="card-image-section">
        <div className="card-img">
          <img
           // src="https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
           src =  {image}
            alt="song"
            width={200}
            height={190}
          />
        </div>
        <div className="content">
          <span>{follows} follows</span>
        </div>
      </div>
      <div className="title">
        <p>{title}</p>
      </div>
    </div>
  );
}
