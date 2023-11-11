import React from 'react'
import './top.css';
import Card from '../Card'

export default function index({title, data}) {

  return (
    <div className='top-container'>
      <div className="top-heading">
        <h1>{title}</h1>
        <p>Collapse</p>
      </div>
      <div className="top-card">
        {
          data.map((el)=>(
            <div className="card-container" key = {el.id}>
               <Card image = {el.image} follows = {el.follows} title = {el.title}  />
            </div>
           
          ))
        }
      </div>
    </div>
  )
}
