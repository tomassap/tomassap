import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import CinematographyShowcase from "./CinematographyShowcase";
import Contact from "../../layout/Contact";

class Cinematography extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <CinematographyShowcase />
        <div className="landing">
          <div className="dark-overlay text-light">
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

Cinematography.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withRouter(Cinematography));
