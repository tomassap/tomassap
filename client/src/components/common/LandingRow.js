import React, { Component } from "react";
import Anime from "react-anime";
import anime from "animejs";
import { Link, withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { CSSTransition, Transition } from "react-transition-group";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import HoverCup from "../common/HoverCup";
import Logo from "../common/Logo";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%"
  },
  image: {
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important" // Overrides inline-style
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "relative",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.black
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.black,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
});

class LandingRow extends Component {
  constructor(props) {
    super(props);

    // create cup DOM reference
    this.rowRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      in: true
    });
    const fadeIn = anime({
      targets: this.rowRef.current,
      delay: function(el, i) {
        return i * 500;
      },
      duration: 3000,
      scale: [0.5, 1],
      opacity: 1
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div ref={this.rowRef} className="row landing-row">
        <span className="column left text-center">
          <Link to="/about">
            <ButtonBase
              focusRipple
              key="About"
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: "25%"
              }}
            >
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subheading"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  About &nbsp;
                  <i className="fas fa-angle-double-left" />
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          </Link>
        </span>
        <span className="column middle">
          <Transition appear={true} timeout={500}>
            {status => {
              return <HoverCup status={status} />;
            }}
          </Transition>
        </span>
        <span className="column right text-center">
          <Link to="/contact">
            <ButtonBase
              focusRipple
              key="contact"
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: "25%"
              }}
            >
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subheading"
                  color="inherit"
                  className={classes.imageTitle}
                  style={{
                    minWidth: 200
                  }}
                >
                  Let&apos;s grab coffee &nbsp;
                  <i className="fas fa-angle-double-right" />
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          </Link>
        </span>
      </div>
    );
  }
}

LandingRow.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default withStyles(styles, { withTheme: true })(
  withRouter(connect(mapStateToProps)(LandingRow))
);
