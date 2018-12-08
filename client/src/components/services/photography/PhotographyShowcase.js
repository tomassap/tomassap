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
import img1 from "../../../img/showcase1.jpg";
import img2 from "../../../img/showcase2.jpg";
import img3 from "../../../img/showcase3.jpg";
import img4 from "../../../img/showcase4.jpg";
import img5 from "../../../img/showcase5.JPG";
import img6 from "../../../img/showcase6.JPG";
import img7 from "../../../img/showcase7.JPG";
import img8 from "../../../img/showcase8.png";

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
    marginLeft: "10%",
    marginBottom: "5%"
  },
  mediaList: {
    display: "grid",
    marginBottom: "5%"
  },
  column1: {
    gridColumn: 1,
    width: "50vw",
    marginBottom: "2%"
  },
  column2: {
    gridColumn: 2,
    width: "50vw"
  }
});

class PhotographyShowcase extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <h1 className={classes.heading}>Photography</h1>
        <h3 className={classes.blurb}>
          I do many different kinds of photography such as Product Photography,
          Event Photography, Pet Photography, Portrait Photography, Wedding
          Photography, &amp; more. If you need high quality photos for yourself,
          your family, or your business, get in touch with the form below!
        </h3>
        <div className={classes.mediaList}>
          <img className={(classes.row1, classes.column1)} src={img6} />
          <img className={(classes.row1, classes.column2)} src={img2} />
          <img className={(classes.row2, classes.column1)} src={img5} />
          <img className={(classes.row2, classes.column2)} src={img7} />
          <img className={(classes.row3, classes.column1)} src={img3} />
          <img className={(classes.row3, classes.column2)} src={img4} />
          <img className={(classes.row4, classes.column1)} src={img1} />
          <img className={(classes.row4, classes.column2)} src={img8} />
        </div>
      </div>
    );
  }
}

PhotographyShowcase.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PhotographyShowcase);
