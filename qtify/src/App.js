import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Section from './components/Section'
import {useState} from 'react'
import axios from 'axios';
import FilterSection from './components/FilterSection'

const endPoint = 'https://qtify-backend-labs.crio.do'
function App() {
  const [topData, setTopData] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs,setSongs] = useState([]);
  const [genres,setGenres] = useState([]);

  const performApicall = async () =>{
    try {
      const topResponse = await axios.get(`${endPoint}/albums/top`);
      const newResponse = await axios.get(`${endPoint}/albums/new`)
      const songResponse = await axios.get(`${endPoint}/songs`)
      const genresResponse = await axios.get(`${endPoint}/genres`)
      setTopData(topResponse.data);
      setNewAlbums(newResponse.data)
      setSongs(songResponse.data)
      setGenres(genresResponse.data.data);
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
      <Section title = "Top Albums" data = {topData}/>
      <Section title = "New Albums" data = {newAlbums}/>
      <FilterSection title = "Songs" songs = {songs} genres = {genres}/>
    </div>
  )
}

export default App