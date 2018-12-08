import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import DesignShowcase from "./DesignShowcase";
import Contact from "../../layout/Contact";

class Design extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <DesignShowcase />
        <div className="landing">
          <div className="dark-overlay text-light">
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

Design.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withRouter(Design));
