import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Section from './components/Section'
import {useState} from 'react'
import axios from 'axios';

const endPoint = 'https://qtify-backend-labs.crio.do'
function App() {
  const [topData, setTopData] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  const performApicall = async () =>{
    try {
      const topResponse = await axios.get(`${endPoint}/albums/top`);
      const newResponse = await axios.get(`${endPoint}/albums/new`)
      setTopData(topResponse.data);
      setNewAlbums(newResponse.data)
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
     
    </div>
  )
}

export default App