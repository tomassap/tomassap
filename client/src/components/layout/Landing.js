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
import BioBlurb from "../common/BioBlurb";
import HoverCup from "../common/HoverCup";
import Logo from "../common/Logo";
import Contact from "../layout/Contact";
import LandingRow from "../common/LandingRow";
import esp from "../../img/esp.m4v";

class Landing extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <div>
            <BioBlurb />
            <video autoPlay muted loop id="esp">
              <source src={esp} type="video/mp4" />
            </video>
            <div className="row white-background">
              <Transition appear={true} timeout={500}>
                {status => {
                  return <Logo status={status} />;
                }}
              </Transition>
              <Transition appear={true} timeout={500}>
                {status => {
                  return <LandingRow status={status} />;
                }}
              </Transition>
            </div>
          </div>
        </div>
        <div className="landing">
          <div className="dark-overlay text-light">
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
