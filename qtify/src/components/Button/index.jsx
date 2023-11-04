import React from 'react'
import "./button.css"
export default function index({children}) {
  return (
    <button className='button'
    >{children}</button>
  )
}
