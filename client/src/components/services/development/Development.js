import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import DevelopmentShowcase from "./DevelopmentShowcase";
import Contact from "../../layout/Contact";

class Development extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <DevelopmentShowcase />
        <div className="landing">
          <div className="dark-overlay text-light">
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

Development.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withRouter(Development));
