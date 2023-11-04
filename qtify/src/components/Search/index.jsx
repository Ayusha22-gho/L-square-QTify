import React from 'react'
//import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { ReactComponent as SearchIcon } from './search-icon.svg';

export default function index() {
  return (
    <form class = "search">
        <input type="text" placeholder='Search a album of your choice'/>
        <button><SearchIcon /></button>
        
       </form>
  )
}
