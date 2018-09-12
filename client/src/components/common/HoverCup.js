import React, { Component } from "react";
import anime from "animejs";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class HoverCup extends Component {
  constructor() {
    super();

    // create cup DOM reference
    this.cupRef = React.createRef();
  }

  spin() {
    this.animeRef = anime({
      targets: this.cupRef.current,
      duration: 3000,
      rotate: 720,
      loop: false,
      scale: [0.75, 1]
    });
  }

  render() {
    return (
      <Link to="/contact">
        <div
          className="coffee column middle"
          ref={this.cupRef}
          onMouseOver={this.spin.bind(this)}
        />
      </Link>
    );
  }
}

export default HoverCup;
