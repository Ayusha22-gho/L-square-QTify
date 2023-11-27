import React, { useState } from "react";
import "./top.css";
import Card from "../Card";
import Carousel from "../Carousel"

export default function Index({ navId, title, data }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
    <div className="top-container">
      <div className="top-heading">
        <h1>{title}</h1>
        <p
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          {isCollapsed ? "Show All" : "Collapse"}
        </p>
      </div>
      {isCollapsed ? (
        <Carousel data = {data} isSongData = {false} navId={navId}/>
      ) : (
        <div className="top-card">
          {data.map((el) => (
            <div className="card-container" key={el.id}>
              <Card image={el.image} follows={el.follows} title={el.title} />
            </div>
          ))}
        </div>
      )}
     
    </div>
    <hr/>
    </>
  );
}
