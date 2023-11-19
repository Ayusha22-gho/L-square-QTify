import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Carousel from "../Carousel";
//import Card from '../Card'
import "./filter.css";
export default function Index({ title, songs, genres }) {
  const [value, setValue] = React.useState("all");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label="All"
                value="all"
                sx={{ color: "white", fontWeight: "600"}}
              />
              {genres.map((element) => (
                <Tab
                  label={element.label}
                  value={element.key}
                  key={element.key}
                  sx={{ color: "white", fontWeight: "600" }}
                />
              ))}
            </TabList>
          </Box>
          <TabPanel value="all">
            <Carousel songs={songs} isSongData={true} />
          </TabPanel>
          {genres.map((el) => (
            <TabPanel value={el.key} key = {el.key}>
              <Carousel
                songs={songs.filter((song) => song.genre.key === el.key)}
                isSongData={true}
              />
            </TabPanel>
          ))}

          {/* <TabPanel value="rock">
        <Carousel songs = {songs.filter(song => song.genre.key === value)} isSongData={true} />
        </TabPanel>
        <TabPanel value="pop">
        <Carousel songs = {songs.filter(song => song.genre.key === value)} isSongData={true} />
        </TabPanel>
        <TabPanel value="blues">
        <Carousel songs = {songs.filter(song => song.genre.key === value)} isSongData={true} />
        </TabPanel> */}
        </TabContext>
      </Box>
    </div>
    <hr/>
    </>
  );
}
