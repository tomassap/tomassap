import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import logo from "../../img/tomassaplogo.png";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <img src={logo} alt="tomassap Logo" />
                <p className="lead">
                  I do software development & design, photography/videogrpahy,
                  music composition, graphic design, & much more. Whatever you
                  need, I've got it covered; Tell me about your project & find
                  out how I can help you realize the vision in your head!
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Create an Account
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
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
