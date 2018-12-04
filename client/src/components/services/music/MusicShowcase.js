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
import img1 from "../../../img/10toesdown.jpg";
import img2 from "../../../img/donce.jpg";
import img3 from "../../../img/overthrow.jpg";
import tenToesDown from "../../../audio/10toesdown.wav";
import donce from "../../../audio/donce.wav";
import overthrow from "../../../audio/overthrow.wav";

const styles = theme => ({
  heading: {
    marginTop: "2%",
    textAlign: "center",
    color: "#ff0000"
  },
  blurb: {
    textAlign: "center",
    marginRight: "10%",
    marginLeft: "10%"
  },
  mediaList: {
    display: "grid"
  },
  media: {
    gridColumn: 1,
    width: "100vw",
    marginBottom: "2%"
  },
  card: {
    position: "relative",
    display: "flex",
    width: "80vw",
    left: "10%"
  },
  cardInfo: {
    width: "40vw"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "40vw"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: "40vw"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

class MusicShowcase extends Component {
  constructor(props) {
    super(props);

    this.audioRef1 = React.createRef();
    this.audioRef2 = React.createRef();
    this.audioRef3 = React.createRef();
  }

  componentDidMount() {
    this.audio1 = this.audioRef1.current;
    this.audio2 = this.audioRef2.current;
    this.audio3 = this.audioRef3.current;
  }

  playAudio1() {
    if (!this.audio2.paused) {
      this.audio2.pause();
    } else if (!this.audio3.paused) {
      this.audio3.pause();
    }
    this.audio1.play();
  }

  pauseAudio1() {
    this.audio1.pause();
  }

  playAudio2() {
    if (!this.audio1.paused) {
      this.audio1.pause();
    } else if (!this.audio3.paused) {
      this.audio3.pause();
    }
    this.audio2.play();
  }

  pauseAudio2() {
    this.audio2.pause();
  }

  playAudio3() {
    if (!this.audio1.paused) {
      this.audio1.pause();
    } else if (!this.audio2.paused) {
      this.audio2.pause();
    }
    this.audio3.play();
  }

  pauseAudio3() {
    this.audio3.pause();
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <h1 className={classes.heading}>Music Composition &amp; Production</h1>
        <p className={classes.blurb}>
          I compose &amp; produce music for many different mediums including
          film, TV, advertisements, &amp; more! I compose many different styles
          of music, but I specialize in Hip-Hop, Jazz, &amp; Rock. Here are some
          examples of compositions I've made for clients. If you like what you
          hear, let me know what I can do for your next project!
        </p>
        <div className={classes.mediaList}>
          <div className={classes.media}>
            <Card className={classes.card}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5" color="textPrimary">
                    Lo-Fi Hip-Hop Composition
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    "Ten Toes Down"
                  </Typography>
                </CardContent>
                <div className={classes.controls}>
                  <IconButton aria-label="Play">
                    <PlayArrowIcon
                      className={classes.playIcon}
                      onClick={this.playAudio1.bind(this)}
                    />
                  </IconButton>
                  <IconButton aria-label="Pause">
                    <PauseIcon
                      className={classes.playIcon}
                      onClick={this.pauseAudio1.bind(this)}
                    />
                  </IconButton>
                </div>
              </div>
              <CardMedia className={classes.cover} image={img1} title="Cover" />
              <audio id="tenToesDown" ref={this.audioRef1} src={tenToesDown} />
            </Card>
          </div>
          <div className={classes.media}>
            <Card className={classes.card}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5" color="textPrimary">
                    Short Film Composition
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    "Donce"
                  </Typography>
                </CardContent>
                <div className={classes.controls}>
                  <IconButton aria-label="Play">
                    <PlayArrowIcon
                      className={classes.playIcon}
                      onClick={this.playAudio2.bind(this)}
                    />
                  </IconButton>
                  <IconButton aria-label="Pause">
                    <PauseIcon
                      className={classes.playIcon}
                      onClick={this.pauseAudio2.bind(this)}
                    />
                  </IconButton>
                </div>
              </div>
              <CardMedia className={classes.cover} image={img2} title="Cover" />
              <audio id="donce" ref={this.audioRef2} src={donce} />
            </Card>
          </div>
          <div className={classes.media}>
            <Card className={classes.card}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5" color="textPrimary">
                    Advertisement Composition
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    "Overthrow"
                  </Typography>
                </CardContent>
                <div className={classes.controls}>
                  <IconButton aria-label="Play">
                    <PlayArrowIcon
                      className={classes.playIcon}
                      onClick={this.playAudio3.bind(this)}
                    />
                  </IconButton>
                  <IconButton aria-label="Pause">
                    <PauseIcon
                      className={classes.playIcon}
                      onClick={this.pauseAudio3.bind(this)}
                    />
                  </IconButton>
                </div>
              </div>
              <CardMedia className={classes.cover} image={img3} title="Cover" />
              <audio id="donce" ref={this.audioRef3} src={overthrow} />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

MusicShowcase.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MusicShowcase);
