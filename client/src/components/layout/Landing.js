import React, { Component } from "react";
import Anime from "react-anime";
import anime from "animejs";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { CSSTransition, Transition } from "react-transition-group";
import HoverCup from "../common/HoverCup";
import Logo from "../common/Logo";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Transition appear={true} timeout={500}>
          {status => {
            return <Logo status={status} />;
          }}
        </Transition>
        <div className="row">
          <div className="container">
            <Transition appear={true} timeout={500}>
              {status => {
                return <HoverCup status={status} />;
              }}
            </Transition>
          </div>
        </div>
        <div className="intro text-center">
          <p className="lead">
            We do software development & design, photography/videography, music
            composition, graphic design/motion design, & much more. Whatever you
            need, we&apos;ve got it covered; Tell us about your project & find
            out how we can help you realize the vision in your head!
          </p>
          <hr />
          <div className="div">
            <Link to="/register" className="btn btn-lg btn-info mr-2">
              Create an Account
            </Link>
            <Link to="/login" className="btn btn-lg btn-light">
              Login
            </Link>
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
