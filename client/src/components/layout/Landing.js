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
        <div className="dark-overlay landing-inner text-light">
          <div className="row">
            <Transition appear={true} timeout={500}>
              {status => {
                return <Logo status={status} />;
              }}
            </Transition>
          </div>
          <div className="row landing-row">
            <span className="column left text-center">
              <i className="fas fa-angle-double-left" />
            </span>
            <span className="column middle">
              <Transition appear={true} timeout={500}>
                {status => {
                  return <HoverCup status={status} />;
                }}
              </Transition>
            </span>
            <span className="column right text-center">
              <Link to="/contact" className="btn btn-lg btn-info" role="button">
                Let&apos;s Grab Coffee &nbsp;
                <i className="fas fa-angle-double-right" />
              </Link>
            </span>
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
