import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MusicShowcase from "./MusicShowcase";
import Contact from "../../layout/Contact";

class Music extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <MusicShowcase />
        <div className="landing">
          <div className="dark-overlay text-light">
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

Music.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Music);
