import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ProductAccordion = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordion mobile">
      <Accordion
        square={true}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ backgroundColor: "#f1f1f1", color: "#8a8a8a" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: "100%",
              flexShrink: 0,
              fontWeight: "bold",
              fontFamily: "Montserrat",
            }}
          >
            Description
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: "Montserrat" }}>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square={true}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ backgroundColor: "#f1f1f1", color: "#8a8a8a" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              width: "100%",
              flexShrink: 0,
              fontWeight: "bold",
              fontFamily: "Montserrat",
            }}
          >
            Shipping and Returns
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: "Montserrat" }}>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square={true}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          backgroundColor: "#f1f1f1",
          color: "#8a8a8a",
          fontFamily: "Montserrat",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            sx={{
              width: "100%",
              flexShrink: 0,
              fontWeight: "bold",
              fontFamily: "Montserrat",
            }}
          >
            Frequently Asked Questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: "Montserrat" }}>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ProductAccordion;
