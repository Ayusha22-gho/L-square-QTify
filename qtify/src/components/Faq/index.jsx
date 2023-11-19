import React from "react";
import "./faq.css";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Index() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
    <div className="faq-container">
      <div className="faq-heading">
        <p>FAQs</p>
      </div>
      <div className="faq-accordian">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{ borderRadius: "4px" , border: "0.5px solid white",}}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            expandIcon={<ExpandMoreIcon sx={{color:"var(--primary)",fontSize:"40px"}} />}
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "10px",
             
            }}
          >
            <Typography>Is QTify free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{ borderRadius: "4px" , border: "0.5px solid white",}}
        >
          <AccordionSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
            expandIcon={<ExpandMoreIcon sx={{color:"var(--primary)",fontSize:"40px"}} />}
            sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
              }}
          >
            <Typography>Can I download and listen to songs offline?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
    <hr/>
    </>
  );
}
