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
    this.spin = this.spin.bind(this);
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
            className="coffee"
            ref={this.cupRef}
            onMouseOver={this.spin.bind(this)}
          />
        </div>
      </Link>
    );
  }
}

export default HoverCup;
