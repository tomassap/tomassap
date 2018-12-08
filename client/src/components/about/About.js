import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import AboutBlurb from "./AboutBlurb";
import Contact from "../layout/Contact";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <AboutBlurb />
        <div className="landing">
          <div className="dark-overlay text-light">
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withRouter(About));
