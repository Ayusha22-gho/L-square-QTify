import React from 'react'
import "./card.css"
export default function index() {
  return (
   <div className='card'>
    <div className="image-section">
        <img src = "https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" alt = "song" width={200} height={190}/>
        <div><span>100 followers</span></div>
    </div>
    <div className="title">
        <p>Bollywood</p>
    </div>
   </div>
   
  )
}
