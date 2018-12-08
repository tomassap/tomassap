import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import mov1 from "../../../mov/esp.m4v";
import mov2 from "../../../mov/showcase.webm";
import mov3 from "../../../mov/coxfed_v2.webm";

const styles = theme => ({
  heading: {
    marginTop: "2%",
    marginBottom: "2%",
    textAlign: "center",
    color: "#ff0000",
    textDecoration: "underline overline",
    textDecorationColor: "#ffffff"
  },
  blurb: {
    textAlign: "center",
    marginRight: "10%",
    marginLeft: "10%"
  },
  mediaList: {
    display: "grid",
    marginBottom: "5%"
  },
  column1: {
    gridColumn: 1,
    width: "100vw",
    marginBottom: "2%"
  }
});

class CinematographyShowcase extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <h1 className={classes.heading}>Cinematography</h1>
        <h3 className={classes.blurb}>
          I do cinematography for films, documentaries, advertisements, events,
          &amp; more. If you need high quality video content for your project,
          your event, or your business, get in touch with the form at the bottom
          of this page!
        </h3>
        <div className={classes.mediaList}>
          <video controls className={classes.column1} src={mov1} />
          <video controls className={classes.column1} src={mov2} />
          <video controls className={classes.column1} src={mov3} />
        </div>
      </div>
    );
  }
}

CinematographyShowcase.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(CinematographyShowcase);
