import React from "react";
import Container from "@material-ui/core/Container";
import Stories from "../components/Stories";
import Feeds from "../components/Feeds";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  pap: {
    padding: 5,
    margin: 20,
  },

  story_info: {
    marginTop: "2%",
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div>
      <Container>
      <code> <Typography variant="h6" align="center">
          BRANDED <br /> ADVERTISEMENT
        </Typography></code>
      </Container>
      <Container>
        
          <Typography align="center" className={classes.story_info}>
            Instagram or Facebook Stories/Reels <br /> TikTok | Snapchat <br /> (16:9 Vertical Format){" "}
          </Typography>
          <Stories />
        
        
          <Typography align="center" className={classes.story_info}>
            Instagram or Facebook Feeds <br /> (4:5 Vertical Format){" "}
          </Typography>
          <Feeds />
        
      </Container>
    </div>
  );
}
