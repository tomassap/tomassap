import React, { Component } from "react";
import Anime from "react-anime";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import logo from "../../img/tomassaplogo-01.png";
import HoverCup from "../common/HoverCup";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="container">
          <div className="text-center">
            <img className="logo" src={logo} />
          </div>
        </div>
        <div className="row">
          <div className="container">
            <Link to="/about">
              <div className="column left text-left">
                <i className="fas fa-angle-double-left" />
              </div>
            </Link>
            <HoverCup />
            <Link to="/about">
              <div className="column right text-right">
                <i className="fas fa-angle-double-right" />
              </div>
            </Link>
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
