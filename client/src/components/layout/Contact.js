import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { sendEmail } from "../../actions/authActions";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      body: "",
      errors: {}
    };

    this.onChange = this.onChange;
    this.onSubmit = this.onSubmit;
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const emailData = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      body: this.state.body
    };
    this.props.sendEmail(emailData, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Contact Me</h1>
              <p className="lead text-center">Tell me about your project!</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="name"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.name
                    })}
                    placeholder="Full Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email
                    })}
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="subject"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.subject
                    })}
                    placeholder="Subject"
                    name="subject"
                    value={this.state.subject}
                    onChange={this.onChange}
                  />
                  {errors.subject && (
                    <div className="invalid-feedback">{errors.subject}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="body"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.body
                    })}
                    placeholder="Message"
                    name="subject"
                    value={this.state.body}
                    onChange={this.onChange}
                  />
                  {errors.body && (
                    <div className="invalid-feedback">{errors.body}</div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  sendEmail: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { sendEmail }
)(withRouter(Contact));
