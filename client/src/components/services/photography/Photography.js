import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import PhotographyShowcase from "./PhotographyShowcase";
import Contact from "../../layout/Contact";

class Photography extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <PhotographyShowcase />
        <div className="landing">
          <div className="dark-overlay text-light">
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

Photography.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withRouter(Photography));
