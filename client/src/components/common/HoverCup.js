import React, { Component } from "react";
import anime from "animejs";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class HoverCup extends Component {
  constructor(props) {
    super(props);

    // create cup DOM reference
    this.cupRef = React.createRef();
    this.spin = this.spin.bind(this);
  }

  componentDidMount() {
    this.setState({
      in: true
    });
    const fadeIn = anime({
      targets: this.cupRef.current,
      delay: 1000,
      duration: 3000,
      scale: [0.5, 1],
      opacity: 1
    });
  }

  spin() {
    const spinCup = anime({
      targets: this.cupRef.current,
      duration: 3000,
      scale: [0.75, 1],
      rotate: "3turn"
    });
  }

  render() {
    return (
      <Link to="/contact">
        <div className="column middle">
          <div
            className="coffee circle-base"
            ref={this.cupRef}
            onMouseOver={this.spin.bind(this)}
          />
        </div>
      </Link>
    );
  }
}

export default HoverCup;
