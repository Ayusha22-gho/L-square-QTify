import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Section from './components/Section'
import {useState} from 'react'
import axios from 'axios';
import FilterSection from './components/FilterSection'
import Faq from './components/Faq'

const endPoint = 'https://qtify-backend-labs.crio.do'
function App() {
  const [topData, setTopData] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs,setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [genres,setGenres] = useState([]);
  const [faqData, setFaqData] = useState([]);

  const performApicall = async () =>{
    try {
      const topResponse = await axios.get(`${endPoint}/albums/top`);
      const newResponse = await axios.get(`${endPoint}/albums/new`)
      const songResponse = await axios.get(`${endPoint}/songs`)
      const genresResponse = await axios.get(`${endPoint}/genres`)
      const faqResponse = await axios.get(`${endPoint}/faq`)
      setTopData(topResponse.data);
      setNewAlbums(newResponse.data)
      setSongs(songResponse.data)
      setFilteredSongs(songResponse.data);
      setGenres([{"key":"all","label" : "All"}, ...genresResponse.data.data]);
      setFaqData(faqResponse.data.data)
    }catch (e){

    }
  }

  useEffect(()=>{
    performApicall();
  },[])

  return (
    <div>
      <NavBar/>
      <Hero/>
      <Section navId="ta" title = "Top Albums" data = {topData}/>
      <Section navId = "na" title = "New Albums" data = {newAlbums}/>
      <FilterSection title = "Songs" songs = {filteredSongs} genres = {genres}
      filterFuncton = {(genre) => {
        if(genre === 'all'){
          setFilteredSongs(songs)
        }else{
          setFilteredSongs(songs.filter(song => song.genre.key === genre))
        }
      }}
      />
      <Faq faqData = {faqData}/>
    </div>
  )
}

export default App