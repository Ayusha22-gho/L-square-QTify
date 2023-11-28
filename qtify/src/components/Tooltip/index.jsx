import React from 'react'
import './tooltip.css'

export default function index({message}) {
  return (
    <div className='tooltip-container'>
        <span className="tooltip-class">{message} songs</span>
    </div>
  )
}
