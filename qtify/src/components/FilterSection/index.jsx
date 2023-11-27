import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Carousel from "../Carousel";
//import Card from '../Card'
import "./filter.css";
export default function Index({ title, songs, genres,filterFuncton }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    filterFuncton(genres[newValue].key)
    setValue(newValue);
    console.log(newValue);
    console.log(genres[newValue].key)
    // const arr = songs.filter((song)=> {
    //   return song.genre.label ==="Jazz"
    // })
    // console.log(newValue);
  };

  return (
    <>
    <div className="songs-contaner">
      <div className="songs-heading">
        <h1>{title}</h1>
      </div>

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            className="tab-list"
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example"
            value = {value}
            TabIndicatorProps={{
              style : {
                backgroundColor : "green",
                height : "4px"
              }
            }}
            >
              {genres.map((element) => (
                <Tab
                className="tab-colour"
                  label={element.label}
                  key={element.key}
                />
              ))}
            </TabList>
          </Box>
          {/* <TabPanel value="all">
            <Carousel songs={songs} isSongData={true} />
          </TabPanel>
          {genres.map((el) => (
            <TabPanel value={el.key} key = {el.key}>
              <Carousel
              //To increase usablility we do not use the below methos
              //suppose in future we have a different criteria to filter songs
                songs={songs.filter((song) => song.genre.key === el.key)}
                isSongData={true}
              />
            </TabPanel>
          ))} */}
          <div className="filtred-songs">
            <Carousel songs = {songs} isSongData={true} navId="filter"/>
          </div>
          
        </TabContext>
      </Box>
    </div>
    <hr/>
    </>
  );
}
