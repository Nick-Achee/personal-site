import React from 'react';
import { Grid, Button, Modal, Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support


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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  

}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};



const Stories = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
                  onClick={handleOpen}
                  exit="hidden"
                  whileHover={{ scale: 1.1 }}>
                  {" "}
                  <iframe className={classes.ivideo__container} width="180" height="320" src={vids} frameBorder="0" />
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
