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
          <div className="row">
            <div className="col-md-12 text-center">
              <Anime duration={3000} opacity={[0, 1]} translateY={"1em"}>
                <img className="logo" src={logo} />
                <div className="row">
                  <div className="container">
                    <Link to="/about">
                      <div className="column left">
                        <i className="fas fa-angle-double-left" />
                      </div>
                    </Link>
                    <HoverCup />
                    <Link to="/about">
                      <div className="column right">
                        <i className="fas fa-angle-double-right" />
                      </div>
                    </Link>
                  </div>
                </div>
                <Anime
                  duration={3000}
                  opacity={[0, 1]}
                  delay={(el, index) => index * 1000}
                >
                  <div className="intro">
                    <p className="lead">
                      We do software development & design,
                      photography/videography, music composition, graphic
                      design/motion design, & much more. Whatever you need,
                      we've got it covered; Tell us about your project & find
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
                </Anime>
              </Anime>
            </div>
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
