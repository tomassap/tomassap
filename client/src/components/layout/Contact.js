import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { sendEmail } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

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
                <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextFieldGroup
                  placeholder="Subject"
                  name="subject"
                  type="text"
                  value={this.state.subject}
                  onChange={this.onChange}
                  error={errors.subject}
                />
                <TextFieldGroup
                  placeholder="Message"
                  name="body"
                  type="text"
                  value={this.state.body}
                  onChange={this.onChange}
                  error={errors.body}
                />
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
