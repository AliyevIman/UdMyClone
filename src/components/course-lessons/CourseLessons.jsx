import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./CourseLessons.scss" ;
import CloseIcon from '@mui/icons-material/Close';
export default function CourseLessons({ lessons }) {
  const [expanded, setExpanded] = React.useState(false);
const [modal,setmodal]=React.useState(false);
const [current,setcurrent]=React.useState("");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return ( 
    <div>
      { modal &&(
       <div className="my-modal">
          <div onClick={()=>setmodal(false) } className="close-modal">
            <CloseIcon fontSize="large"/>
          </div>
          <iframe width="704" height="396" src={`https://www.youtube.com/embed/${current}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      )}
    
      {lessons?.map((ls) => (
        <Accordion
          key={ls.lessonId}
          expanded={expanded === `p${ls.lessonId}`}
          onChange={handleChange(`p${ls.lessonId}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {ls.name}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>I</Typography>
          </AccordionSummary>
          <AccordionDetails>
              {ls.lessonsVideos?.map((video) => (
                <div onClick={()=>{setmodal(true) 
                setcurrent(video.videoURl)}}className="d-flex align-items-center ">
                <img width={"40%"} height={180} style={{objectFit:"cover"}} src={`https://www.youtube.com/embed/${video.videoURl}/ypbopjISWPw?list=RDypbopjISWPw.jpg`} alt="sekil" />
               Bele i.in icine zibil
                </div>
              ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
