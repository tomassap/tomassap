import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  heading: {
    marginTop: "2%",
    marginBottom: "2%",
    textAlign: "center",
    color: "#ff0000",
    textDecoration: "underline overline",
    textDecorationColor: "#ffffff"
  },
  subheading: {
    marginTop: "2%",
    marginBottom: "2%",
    textAlign: "center",
    color: "#ff0000",
    textDecoration: "overline",
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
    gridTemplateColumns: "16vw 16vw 16vw 16vw 16vw 16vw",
    textAlign: "center",
    marginLeft: "2vw",
    marginBottom: "5%"
  },
  gridItem: {
    width: "15vw",
    marginLeft: "0.5vw",
    marginRight: "0.5vw",
    marginBottom: "2%"
  }
});

class AboutBlurb extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <h1 className={classes.subheading}>About</h1>
        <h4 className={classes.blurb}>
          My name is Andrew Tomassone; I graduated from James Madison University
          in 2018 with a B.S. in Mathematics &amp; Computer Science, both of
          which I continue to study independently. I am a platform agnostic
          Software Engineer, Designer, Photographer, Cinematographer, &amp;
          Musician. I created tomassap services as a unified front for all of my
          skills &amp; services. I learn quickly &amp; carefully, work
          dilligently, &amp; deliver timely, valuable results. I am extremely
          passionate about everything that I do. If you'd like to talk to me
          about a project, get in touch with the form below or start a chat with
          me through the icon in the lower right corner of your screen.
        </h4>
      </div>
    );
  }
}

AboutBlurb.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(AboutBlurb);
