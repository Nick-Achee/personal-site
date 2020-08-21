import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { motion, AnimatePresence } from "framer-motion";

const itemVariants = {
  hidden: (i) => ({
    scale: 0,
    transition: {
      duration: 0.15,
      delay: i * 0.05,
    },
  }),
  visible: (i) => ({
    scale: 1,
    transition: {
      duration: 0.15,
      delay: i * 0.05,
    },
  }),
  hover: {
    scale: 1.1,
  },
};

const vids = [
  "https://www.youtube.com/embed/QTG0zeEJu3M",
  "https://www.youtube.com/embed/HRTMFv0W6sA",
  "https://www.youtube.com/embed/EDPqvrDpico",
  "https://www.youtube.com/embed/Lg1sKYZg4kc",
];

const useStyles = makeStyles(() => ({
  ivideo__container: {
    boxShadow: "10px 10px 30px .25px rgba(0,0,0,0.30)",
    borderRadius: "9px",
    overflow: "hidden",
    WebkitBorderRadius: "9px",
    margin: 10,
  },
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "flex-start",
    marginRight: "auto",
    margin: "2%",
  },
  stories: {
    paddingLeft: "4vh",
    marginLeft: "4vh",
    marginRight: "auto",
    margin: "2%",
  },
  bloc: {
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    alignContent: "flex-start",
  },

  button: {
    marginRight: "auto",
  },
}));
const Stories = () => {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <AnimatePresence>
        <Grid container className={classes.container} spacing={2}>
          <AnimatePresence>
            {vids.map((vids, i) => (
              <Grid item container className={classes.bloc} xs={12} lg={1} md={1} spacing={3} key={i}>
                <motion.div
                  className={classes.bloc}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i + 1}
                  exit="hidden"
                  whileHover={{ scale: 1.1 }}>
                  {" "}
                  <iframe className={classes.ivideo__container} width="216" height="384" src={vids} frameBorder="0" />
                </motion.div>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </AnimatePresence>
    </div>
  );
};

export default Stories;
