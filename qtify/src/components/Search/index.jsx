import React from 'react'
//import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { ReactComponent as SearchIcon } from './search-icon.svg';
import "./search.css"
export default function index() {
  return (
    <form class = "search">
        <input type="text" placeholder='Search an album of your choice'/>
        <button class = "search-button">
            <SearchIcon />
        </button>
       </form>
  )
}
